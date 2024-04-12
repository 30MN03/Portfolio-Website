// Define a variable to track the current mode
let darkMode = false;

// Function to toggle between light and dark modes
function toggleDarkMode() {
  const body = document.body;
  darkMode = !darkMode; // Toggle the mode
  body.classList.toggle('dark-mode');

  // Update the button appearance based on the current mode
  const modeToggle = document.getElementById('mode-toggle');
  if (darkMode) {
    modeToggle.classList.add('dark-mode');
  } else {
    modeToggle.classList.remove('dark-mode');
  }
}