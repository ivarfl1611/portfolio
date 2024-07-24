"use client";
import { useEffect, useState } from "react";
import "./Switcher.css";
import PropTypes from "prop-types";

const Switcher = ({ darkClassName = "dark-mode" }) => {
  // State to hold the selected theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if we're in the browser and set the initial theme based on user preference
  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  // Apply the selected theme (dark or light) when the component mounts and theme changes
  useEffect(() => {
    applyTheme();
  }, [isDarkMode]);

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

  return (
      <div className="light-dark-button">
        <button onClick={toggleTheme} className="btn" data-testid="themeSwitcherButton">
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </div>
  );
};

Switcher.propTypes = {
  darkClassName: PropTypes.string,
};

export default Switcher;
