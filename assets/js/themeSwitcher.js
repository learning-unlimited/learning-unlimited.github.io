document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');

  // Safe storage helpers — never throw, even if localStorage is blocked
  const getStoredTheme = () => {
    try {
      return localStorage.getItem('theme');
    } catch {
      return null;
    }
  };

  const setStoredTheme = (theme) => {
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Storage unavailable — theme just won't persist, no crash
    }
  };

  // Normalize whatever we read into exactly 'light' or 'dark'
  const normalizeTheme = (value) => (value === 'dark' ? 'dark' : 'light');

  // 1. Check local storage for saved theme, default to 'light'
  const currentTheme = normalizeTheme(getStoredTheme());

  // 2. Apply the saved theme on initial load
  document.documentElement.setAttribute('data-theme', currentTheme);

  // 3. Update the button UI on initial load (guard against missing elements)
  const updateButtonUI = (theme) => {
    if (themeIcon) themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    if (themeText) themeText.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    // Tell assistive tech the current state
    if (themeToggle) themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  };

  updateButtonUI(currentTheme);

  // 4. Listen for button clicks to swap themes
  if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
      e.preventDefault();

      const theme = document.documentElement.getAttribute('data-theme');
      const newTheme = theme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      setStoredTheme(newTheme); // Safe write — won't throw
      updateButtonUI(newTheme);
    });
  }
});