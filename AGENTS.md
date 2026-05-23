# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Repository shape
- This repo is split into:
  - `client/`: Vite + React frontend (main app and course modules)
  - `server/`: Express API for auth/profile/password reset + proxy to Python Studio
  - `server/python-studio/`: FastAPI code-execution service (can run locally or in Docker)

## Setup and run commands
- Install dependencies:
  - `npm install --prefix client`
  - `npm install --prefix server`
- Create env files:
  - `copy client\.env.example client\.env`
  - `copy server\.env.example server\.env`

### Run for local development
- Start backend API (from repo root):
  - `npm run dev --prefix server`
- Start frontend (from repo root):
  - `npm run dev --prefix client`
- Optional: run Python Studio locally (if working on Python playground / execution features):
  - `pip install -r server/python-studio/requirements.txt`
  - `python -m uvicorn main:app --reload --port 8000 --app-dir server/python-studio`

### Build and production-style run
- Build frontend:
  - `npm run build --prefix client`
- Preview frontend build:
  - `npm run preview --prefix client`
- Run backend in non-dev mode:
  - `npm start --prefix server`

## Tests and linting status
- There is currently no `test` script in `client/package.json` or `server/package.json`.
- There is currently no `lint` script in `client/package.json` or `server/package.json`.
- A legacy `client/src/App.test.js` exists, but test runner/config dependencies are not wired in package scripts.
- Single-test command is therefore not available until a test runner is added to scripts.

## Architecture map (big picture)
### Frontend routing and module composition
- `client/src/App.jsx` is the top-level route hub:
  - Public auth routes: `/login`, `/register`, `/forgot-password`, `/reset-password/:resetToken`
  - Protected core routes (`/`, `/courses`, etc.) are wrapped by `ProtectedRoute`.
  - Course modules are mounted as nested route bundles (for example `/html-course/*`, `/python-course/*`, `/system-design-course/*`).
- `client/src/components/ProtectedRoute.jsx` uses `localStorage.getItem('token')` as the auth gate and redirects unauthenticated users to `/login`.
- Most course features live under `client/src/modules/<course>/` with a repeating structure (`routes`, `pages`, `components`, `data`, `styles`), so module-level work usually starts in each module’s `routes` file.

### Frontend API contract
- Auth pages call backend endpoints via:
  - `const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'`
  - Requests target `${API_URL}/api/auth/...`
- Login persists `token`, `username`, `email`, `userId` in `localStorage`; protected navigation depends on this token key.
- Vite dev server runs on port `3000` (`client/vite.config.js`) and defines proxy entries for `/api` (to `:5000`) and `/python-studio` (to `:8000`), though auth pages currently call absolute `VITE_API_URL` URLs directly.

### Backend request flow and persistence strategy
- `server/server.js` sets up:
  - CORS allowlist using localhost variants + `CLIENT_URL`
  - `/api/auth` routes
  - `/api/python-studio` reverse proxy to `PYTHON_STUDIO_URL` (default hosted Render URL)
  - `/api/health` endpoint exposing active DB mode
- Auth API stack:
  - Routes/validation: `server/routes/authRoutes.js`
  - Controllers: `server/controllers/authController.js`
  - JWT middleware: `server/middleware/auth.js`
  - Mongo model: `server/models/User.js`

### Dual DB mode (important behavior)
- `server/config/db.js` attempts DB connections in this order:
  1. `MONGODB_URI` Atlas SRV connection
  2. Hardcoded direct-shard Mongo URI fallback
  3. Local JSON DB fallback (`lowdb`, file at `server/data/localdb.json`)
- Controllers and auth middleware branch on `getDbMode()` (`mongodb` vs `local`), so changes in auth/user logic must preserve both execution paths.

### Python Studio service integration
- Express does not execute Python directly; it proxies `/api/python-studio` to the FastAPI service.
- `server/python-studio/main.py` handles code execution (`/run`), health checks, and lightweight AI-assist endpoints.
- FastAPI execution prefers Docker isolation when `USE_DOCKER=true`, otherwise falls back to direct Python subprocess execution.

## Environment variables that affect cross-service behavior
- Frontend:
  - `VITE_API_URL` controls where auth/API calls go.
  - `VITE_GROQ_*` values are used by `client/src/modules/python-course/services/groq.ts`.
- Backend:
  - `CLIENT_URL` must match frontend origin for CORS and password reset URL generation.
  - `PYTHON_STUDIO_URL` controls where `/api/python-studio` proxy traffic is sent.
  - `JWT_SECRET`, `JWT_EXPIRE`, SMTP env vars, and Mongo vars are required for full auth/password-reset behavior.
