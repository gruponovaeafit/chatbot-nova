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
