import React from 'react';
import { Moon, Sun, BookOpen, Home, Layers, Rocket, Building2, Menu, X } from 'lucide-react';
import { useDarkMode } from '../contexts/SDDarkModeContext';
import { useNavigate, useLocation } from 'react-router-dom';

const SDNavbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const currentPath = location.pathname;

  const navItems = [
    { path: '/system-design-course', label: 'Home', icon: Home, match: '/system-design-course' },
    { path: '/system-design-course/level1/system-design-intro', label: 'Basics', icon: BookOpen, match: '/system-design-course/level1' },
    { path: '/system-design-course/level2/load-balancer', label: 'Core', icon: Layers, match: '/system-design-course/level2' },
    { path: '/system-design-course/level3/microservices', label: 'Advanced', icon: Rocket, match: '/system-design-course/level3' },
    { path: '/system-design-course/level4/whatsapp', label: 'Case Studies', icon: Building2, match: '/system-design-course/level4' }
  ];
  const isActive = (item) => {
    if (item.path === '/system-design-course') {
      return currentPath === '/system-design-course' || currentPath === '/system-design-course/';
    }
    return currentPath.startsWith(item.match);
  };

  const navigateTo = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav className="sd-neumorphic sticky top-3 z-40 mx-3 my-3 rounded-2xl transition-colors">
      <div className="mx-auto max-w-7xl px-3 py-2 sm:px-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateTo('/system-design-course')}
              className="sd-neumorphic-btn !p-2"
              aria-label="Go to System Design home"
            >
              <BookOpen className="h-5 w-5 text-indigo-500" />
            </button>
            <div>
              <h1
                className="cursor-pointer text-base font-bold text-gray-900 transition-colors hover:text-indigo-600 dark:text-white dark:hover:text-indigo-300 sm:text-lg"
                onClick={() => navigateTo('/system-design-course')}
              >
                System Design Mastery
              </h1>
              <p className="hidden text-xs text-gray-500 dark:text-gray-400 sm:block">
                Clean architecture + visual learning path
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigateTo(item.path)}
                className={`sd-neumorphic-btn inline-flex items-center gap-2 px-3 py-2 text-sm ${
                  isActive(item)
                    ? 'ring-2 ring-indigo-400 dark:ring-indigo-500'
                    : ''
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="sd-neumorphic-btn inline-flex items-center gap-2 px-3 py-2"
              aria-label="Toggle theme"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <>
                  <Sun className="h-4 w-4 text-amber-400" />
                  <span className="hidden text-sm sm:inline">Light</span>
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 text-slate-700" />
                  <span className="hidden text-sm sm:inline">Dark</span>
                </>
              )}
            </button>
            <button
              onClick={() => navigate('/courses')}
              className="sd-neumorphic-btn hidden px-3 py-2 text-sm text-indigo-600 dark:text-indigo-300 sm:block"
            >
              ← Courses
            </button>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="sd-neumorphic-btn !p-2 md:hidden"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mt-3 grid gap-2 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigateTo(item.path)}
                className={`sd-neumorphic-btn inline-flex items-center justify-start gap-2 px-3 py-2 text-sm ${
                  isActive(item)
                    ? 'ring-2 ring-indigo-400 dark:ring-indigo-500'
                    : ''
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            ))}
            <button
              onClick={() => navigate('/courses')}
              className="sd-neumorphic-btn px-3 py-2 text-left text-sm text-indigo-600 dark:text-indigo-300"
            >
              ← Back to Courses
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SDNavbar;
