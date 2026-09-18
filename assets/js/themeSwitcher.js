document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');

  const setStoredTheme = (theme) => {
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Storage unavailable 
    }
  };

  // Sync the button UI with the theme already applied by the inline <head> script
  const updateButtonUI = (theme) => {
    const isDark = theme === 'dark';
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      themeToggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }
  };

  updateButtonUI(document.documentElement.getAttribute('data-theme') || 'light');

  if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
      e.preventDefault();

      const theme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = theme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      setStoredTheme(newTheme);
      updateButtonUI(newTheme);
    });
  } 
});