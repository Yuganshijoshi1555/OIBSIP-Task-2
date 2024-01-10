// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
  
  // Event listener for the toggle button
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.addEventListener('click', toggleDarkMode);
  