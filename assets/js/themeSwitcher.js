document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');
  
  // Helper function to update the button's text and icon
  const updateButtonUI = (theme) => {
    if (theme === 'dark') {
      themeIcon.textContent = '☀️';
      themeText.textContent = 'Light Mode';
    } else {
      themeIcon.textContent = '🌙';
      themeText.textContent = 'Dark Mode';
    }
  };

  // 1. Check local storage for saved theme, default to 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // 2. Apply the saved theme on initial load
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  // 3. Update the button UI on initial load
  if (themeToggle) {
    updateButtonUI(currentTheme);
  }
  
  // 4. Listen for button clicks to swap themes
  if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      
      let theme = document.documentElement.getAttribute('data-theme');
      let newTheme = theme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      updateButtonUI(newTheme); // Update the button instantly
    });
  }
});