import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  // Read the saved theme synchronously to avoid flash
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' ? 'dark' : 'light';
  });

  const [menuOpen, setMenuOpen] = useState(false);

  // Apply theme to <html> on every change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleMenu = () => setMenuOpen(v => !v);
  const closeMenu  = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
    window.location.href = '/login';
  };

  return (
    <header className="header">
      <div className="container">

        {/* Logo → goes to /home (dashboard), not landing page */}
        <div className="logo">
          <h2><Link to="/home">TECH IN MY STYLE</Link></h2>
        </div>

        {/* ── Mobile controls (hamburger + theme) ── */}
        <div className="mobile-header-controls">
          <div className="theme-toggle" role="group" aria-label="Theme switcher">
            <i className="fas fa-sun" aria-hidden="true" />
            <label className="switch" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
              <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={toggleTheme}
              />
              <span className="slider" />
            </label>
            <i className="fas fa-moon" aria-hidden="true" />
          </div>

          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>

        {/* ── Desktop nav ── */}
        <nav className="nav" aria-label="Main navigation">
          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <Link className={`nav-link ${isActive('/home')}`}           to="/home"          onClick={closeMenu}>
              <i className="fas fa-home" /><span>Home</span>
            </Link>
            <Link className={`nav-link ${isActive('/courses')}`}        to="/courses"       onClick={closeMenu}>
              <i className="fas fa-book" /><span>Courses</span>
            </Link>
            <Link className={`nav-link ${isActive('/about-us')}`}       to="/about-us"      onClick={closeMenu}>
              <i className="fas fa-info-circle" /><span>About Us</span>
            </Link>
            <Link className={`nav-link ${isActive('/stay-connected')}`} to="/stay-connected" onClick={closeMenu}>
              <i className="fas fa-users" /><span>Stay Connected</span>
            </Link>
            <Link className={`nav-link ${isActive('/feedback')}`}       to="/feedback"      onClick={closeMenu}>
              <i className="fas fa-comment" /><span>Feedback Center</span>
            </Link>
            <button
              className="nav-link"
              onClick={handleLogout}
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
              aria-label="Logout"
            >
              <i className="fas fa-arrow-right-from-bracket" /><span>Logout</span>
            </button>
          </div>

          {/* Desktop theme toggle (right side of nav) */}
          <div className="theme-toggle" role="group" aria-label="Theme switcher">
            <i className="fas fa-sun" aria-hidden="true" />
            <label className="switch" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
              <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={toggleTheme}
              />
              <span className="slider" />
            </label>
            <i className="fas fa-moon" aria-hidden="true" />
          </div>
        </nav>

      </div>
    </header>
  );
};

export default Header;
