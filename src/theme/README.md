# Theme System

This directory contains the theme system for the portfolio application, providing support for light and dark mode switching.

## Files

- `colors.js` - Defines the color palettes for both light and dark themes
- `README.md` - This documentation file

## Usage

The theme system is implemented using:

1. **CSS Variables**: All colors are defined as CSS custom properties that can be dynamically updated
2. **Tailwind Integration**: Custom color tokens are mapped to CSS variables in `tailwind.config.js`
3. **React Hook**: `useTheme` hook manages theme state and switching logic
4. **Persistence**: Theme preference is saved to localStorage

## Color Tokens

### Semantic Colors
- `bg` - Background colors (primary, secondary, tertiary)
- `text` - Text colors (primary, secondary, muted)
- `primary` - Brand primary colors with hover states
- `secondary` - Brand secondary colors
- `accent` - Accent colors for highlights
- `neutral` - Neutral grays
- `border` - Border colors
- `card` - Card background colors
- `success`, `warning`, `error` - Status colors

### Technology Colors
- `tech.*` - Specific colors for technology icons (HTML, CSS, JS, React, etc.)

## Adding New Colors

1. Add the color to both `lightTheme` and `darkTheme` objects in `colors.js`
2. Add the CSS variable mapping in `tailwind.config.js`
3. Update the `useTheme` hook to apply the new variable
4. Use the new color token in your components

## Example

```jsx
import { useTheme } from '../hooks/useTheme';

const MyComponent = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  
  return (
    <div className="bg-bg text-text border border-border">
      <button 
        onClick={toggleTheme}
        className="bg-primary text-bg hover:bg-primary-hover"
      >
        Switch to {isDark ? 'light' : 'dark'} theme
      </button>
    </div>
  );
};
```
