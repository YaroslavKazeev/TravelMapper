import { createMainPage } from "./pages/mainPage.js";

function startMainPage() {
  try {
    createMainPage();
  } catch (e) {
    // If createMainPage throws during startup, log it so we can diagnose.
    // eslint-disable-next-line no-console
    console.error("Failed to start main page:", e);
  }
}

// If the map is already initialized (e.g. script loaded and initMap ran), start immediately.
if (window.gMap && typeof window.gMap.getDiv === "function") {
  startMainPage();
} else {
  // Otherwise wait for the map-initialized event dispatched by initMap.
  document.addEventListener("mapsInitialized", startMainPage, { once: true });
}
