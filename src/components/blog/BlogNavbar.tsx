import React, { useState } from 'react';
import { Menu, X, Home, BookOpen, Sun, Moon, Search } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useSearch } from '../../context/SearchContext';
import { navigateTo } from '../../utils/seo';
import { dlShell, dlBrand, dlNav } from '../shared/daylightShell';

interface BlogNavbarProps {
  onBack: () => void;
  onRegisterClick?: () => void;
}

const BlogNavbar: React.FC<BlogNavbarProps> = ({ onBack: _onBack, onRegisterClick: _onRegisterClick }) => {
  const { darkMode, setDarkModePreference } = useTheme();
  const { setSearchOpen } = useSearch();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkModePreference(darkMode ? 'light' : 'dark');
  };

  const goToBlog = () => {
    navigateTo('/blog');
    setMobileOpen(false);
  };

  const goToTutorials = () => {
    navigateTo('/how-to-use');
    setMobileOpen(false);
  };

  const goHome = () => {
    setMobileOpen(false);
    navigateTo('/');
  };

  return (
    <>
      <nav className={dlShell.nav}>
        <div className={dlShell.inner}>
          <div className={dlShell.row}>
            {/* Logo */}
            <div className={dlBrand.trigger} onClick={goHome}>
              <div className={dlBrand.frame}>
                <img src="/img/ak_industries_logo.jpeg" className="w-full h-full object-contain" alt="A.K. Industries" />
              </div>
              <span className={dlBrand.word}>
                <span className={dlBrand.wordInk}>A.K. </span>
                <span className={dlBrand.wordAccent}>Industries</span>
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={goHome}
                className={dlNav.link}
              >
                Home
              </button>
              <button
                onClick={goToBlog}
                className={dlNav.linkActive}
              >
                Blog
              </button>
              <button
                onClick={goToTutorials}
                className={dlNav.link}
              >
                Guides
              </button>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className={dlNav.iconButton}
                title="Search (Ctrl+K)"
              >
                <Search size={20} />
              </button>
              <button
                onClick={toggleDarkMode}
                className={dlNav.iconButton}
                title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={goHome}
                className={dlNav.buttonBare}
              >
                Login
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-1">
              <button
                onClick={() => setSearchOpen(true)}
                className={dlNav.iconButtonCompact}
                title="Search"
              >
                <Search size={20} />
              </button>
              <button
                onClick={toggleDarkMode}
                className={dlNav.iconButtonCompact}
                title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={dlNav.iconButtonCompact}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className={dlNav.mobilePanel}>
            <div className={dlNav.mobilePanelInner}>
              <button
                onClick={goHome}
                className={dlNav.mobileLink}
              >
                <Home size={16} /> Home
              </button>
              <button
                onClick={goToBlog}
                className={dlNav.mobileLinkActive}
              >
                <BookOpen size={16} /> Blog
              </button>
              <button
                onClick={goToTutorials}
                className={dlNav.mobileLink}
              >
                <BookOpen size={16} /> Guides
              </button>
              <div className={dlNav.mobileDivider}>
                <button
                  onClick={goHome}
                  className={dlNav.mobileButtonQuiet}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer to push content below the fixed navbar */}
      <div className={dlShell.spacer} />
    </>
  );
};

export default BlogNavbar;
