/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic color tokens using CSS variables
        bg: {
          DEFAULT: 'var(--color-background)',
          secondary: 'var(--color-background-secondary)',
          tertiary: 'var(--color-background-tertiary)',
        },
        text: {
          DEFAULT: 'var(--color-text)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          light: 'var(--color-primary-light)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          hover: 'var(--color-secondary-hover)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
        },
        neutral: {
          DEFAULT: 'var(--color-neutral)',
          light: 'var(--color-neutral-light)',
          dark: 'var(--color-neutral-dark)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          dark: 'var(--color-border-dark)',
        },
        card: {
          DEFAULT: 'var(--color-card)',
          hover: 'var(--color-card-hover)',
        },
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        // Technology-specific colors
        tech: {
          html: 'var(--color-tech-html)',
          css: 'var(--color-tech-css)',
          js: 'var(--color-tech-js)',
          ts: 'var(--color-tech-ts)',
          react: 'var(--color-tech-react)',
          next: 'var(--color-tech-next)',
          node: 'var(--color-tech-node)',
          express: 'var(--color-tech-express)',
          mongo: 'var(--color-tech-mongo)',
          postgres: 'var(--color-tech-postgres)',
          redux: 'var(--color-tech-redux)',
          firebase: 'var(--color-tech-firebase)',
          supabase: 'var(--color-tech-supabase)',
          jest: 'var(--color-tech-jest)',
          docker: 'var(--color-tech-docker)',
          git: 'var(--color-tech-git)',
        },
      },
    },
  },
  plugins: [],
}