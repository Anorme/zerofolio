import { useState, useEffect } from 'react';

/**
 * Custom hook for managing theme state and switching
 * Uses CSS classes for theming instead of dynamic CSS variables
 */
export const useTheme = () => {
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme || 'dark';
    }
    return 'dark';
  });

  // Apply theme class when theme changes
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');
    
    // Add the current theme class
    root.classList.add(theme);
    
    // Save theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Set specific theme
  const setLightTheme = () => setTheme('light');
  const setDarkTheme = () => setTheme('dark');

  return {
    theme,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    isLight: theme === 'light',
    isDark: theme === 'dark',
  };
};
