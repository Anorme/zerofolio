/**
 * Theme color definitions for the portfolio
 * Defines semantic color tokens for both light and dark themes
 */

// Light theme colors
export const lightTheme = {
  // Background colors
  background: '#ffffff',
  backgroundSecondary: '#f8fafc',
  backgroundTertiary: '#f1f5f9',
  
  // Text colors
  text: '#1e293b',
  textSecondary: '#64748b',
  textMuted: '#94a3b8',
  
  // Primary brand colors
  primary: '#3b82f6', // blue-500
  primaryHover: '#2563eb', // blue-600
  primaryLight: '#dbeafe', // blue-100
  
  // Secondary colors
  secondary: '#6366f1', // indigo-500
  secondaryHover: '#4f46e5', // indigo-600
  
  // Accent colors
  accent: '#06b6d4', // cyan-500
  accentHover: '#0891b2', // cyan-600
  
  // Neutral colors
  neutral: '#64748b', // slate-500
  neutralLight: '#e2e8f0', // slate-200
  neutralDark: '#334155', // slate-700
  
  // Border colors
  border: '#e2e8f0', // slate-200
  borderDark: '#cbd5e1', // slate-300
  
  // Card colors
  card: '#ffffff',
  cardHover: '#f8fafc',
  
  // Status colors
  success: '#10b981', // emerald-500
  warning: '#f59e0b', // amber-500
  error: '#ef4444', // red-500
  
  // Technology-specific colors (for icons)
  tech: {
    html: '#f97316', // orange-500
    css: '#3b82f6', // blue-500
    js: '#fbbf24', // yellow-400
    ts: '#2563eb', // blue-600
    react: '#06b6d4', // cyan-500
    next: '#000000', // black
    node: '#22c55e', // green-500
    express: '#06b6d4', // cyan-500
    mongo: '#22c55e', // green-600
    postgres: '#0ea5e9', // sky-500
    redux: '#8b5cf6', // violet-500
    firebase: '#fbbf24', // yellow-400
    supabase: '#2563eb', // blue-600
    jest: '#64748b', // slate-500
    docker: '#3b82f6', // blue-500
    git: '#f97316', // orange-500
  }
};

// Dark theme colors
export const darkTheme = {
  // Background colors
  background: '#0f172a', // slate-900
  backgroundSecondary: '#1e293b', // slate-800
  backgroundTertiary: '#334155', // slate-700
  
  // Text colors
  text: '#f1f5f9', // slate-100
  textSecondary: '#cbd5e1', // slate-300
  textMuted: '#94a3b8', // slate-400
  
  // Primary brand colors
  primary: '#3b82f6', // blue-500
  primaryHover: '#60a5fa', // blue-400
  primaryLight: '#1e3a8a', // blue-900
  
  // Secondary colors
  secondary: '#6366f1', // indigo-500
  secondaryHover: '#818cf8', // indigo-400
  
  // Accent colors
  accent: '#06b6d4', // cyan-500
  accentHover: '#22d3ee', // cyan-400
  
  // Neutral colors
  neutral: '#94a3b8', // slate-400
  neutralLight: '#475569', // slate-600
  neutralDark: '#e2e8f0', // slate-200
  
  // Border colors
  border: '#334155', // slate-700
  borderDark: '#475569', // slate-600
  
  // Card colors
  card: '#1e293b', // slate-800
  cardHover: '#334155', // slate-700
  
  // Status colors
  success: '#10b981', // emerald-500
  warning: '#f59e0b', // amber-500
  error: '#ef4444', // red-500
  
  // Technology-specific colors (for icons) - same as light theme
  tech: {
    html: '#f97316', // orange-500
    css: '#3b82f6', // blue-500
    js: '#fbbf24', // yellow-400
    ts: '#2563eb', // blue-600
    react: '#06b6d4', // cyan-500
    next: '#ffffff', // white for dark theme
    node: '#22c55e', // green-500
    express: '#06b6d4', // cyan-500
    mongo: '#22c55e', // green-600
    postgres: '#0ea5e9', // sky-500
    redux: '#8b5cf6', // violet-500
    firebase: '#fbbf24', // yellow-400
    supabase: '#2563eb', // blue-600
    jest: '#64748b', // slate-500
    docker: '#3b82f6', // blue-500
    git: '#f97316', // orange-500
  }
};

// Default theme (dark theme as it matches current design)
export const defaultTheme = darkTheme;
