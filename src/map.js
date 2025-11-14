// Map initialization
window.initMap = function () {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 40.7128, lng: -74.006 }, // Default to New York City
    mapTypeId: "roadmap",
  });
  // Store the map instance globally
  // Use a less collision-prone global name to avoid the DOM id -> global var behavior
  // (elements with id="map" are exposed on window as `map` in browsers).
  window.gMap = map;
  // If a DirectionsRenderer was created before the map was ready, attach it now
  if (
    window.directionsRenderer &&
    typeof window.directionsRenderer.setMap === "function"
  ) {
    window.directionsRenderer.setMap(map);
  }
  // Signal to the rest of the app that the Maps API and map instance are ready.
  // Include the map reference in the event detail for consumers that need it.
  try {
    document.dispatchEvent(
      new CustomEvent("mapsInitialized", { detail: { map: window.gMap } })
    );
  } catch (e) {
    // Fallback for very old browsers: dispatch a plain Event.
    document.dispatchEvent(new Event("mapsInitialized"));
  }
};
