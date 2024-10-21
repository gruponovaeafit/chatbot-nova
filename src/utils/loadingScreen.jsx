/**
 * Handles the loading screen for a specific page.
 *
 * @param {Object} options - The options for handling the loading screen.
 * @param {string} options.pageName - The name of the page to handle the loading screen for.
 */
export const handleLoadingScreen = ({ pageName }) => {
  const loadingScreen = document.getElementById("loading-screen");
  const content = document.getElementById(pageName);

  content.style.display = "none";

  setTimeout(() => {
    content.style.display = "block";
    loadingScreen.style.display = "none";
  }, 2500);

  loadingScreen.style.display = "flex";
};
