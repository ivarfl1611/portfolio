"use client";
import { useEffect, useState } from "react";
import "./Switcher.css";
import PropTypes from "prop-types";

const Switcher = ({ darkClassName = "dark-mode" }) => {
  // State to hold the selected theme
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Check if we're in the browser and set the initial theme based on user preference
  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);
    setMounted(true);
  }, []);

  // Apply the selected theme (dark or light) when the component mounts and theme changes
  useEffect(() => {
    if (mounted) {
      applyTheme();
    }
  }, [isDarkMode, mounted]);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Apply the selected theme by adding/removing a class to the body element
  const applyTheme = () => {
    if (isDarkMode) {
      document.body.classList.add(darkClassName);
    } else {
      document.body.classList.remove(darkClassName);
    }
  };

  // Render nothing on the server to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
      <div className="light-dark-button">
        <button
            onClick={toggleTheme}
            className={`btn ${isDarkMode ? 'btn-dark' : 'btn-light'}`}
            data-testid="themeSwitcherButton"
        >
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
  );
};

Switcher.propTypes = {
  darkClassName: PropTypes.string,
};

export default Switcher;
