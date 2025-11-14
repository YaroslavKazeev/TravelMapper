// Fetches driving routes between two locations using Google Maps DirectionsService
export async function fetchRoutes(start, end) {
  return new Promise((resolve, reject) => {
    // DirectionsService doesn't require a Map instance, but it does require the
    // Google Maps JS API to be loaded. Check for `google.maps` instead of
    // `window.gMap` so we can fetch routes before the map instance exists.
    if (typeof google === "undefined" || !google.maps) {
      reject(new Error("Google Maps JS API not loaded"));
      return;
    }
    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      },
      (result, status) => {
        if (status === "OK") {
          resolve(result);
        } else {
          reject(new Error("Directions request failed: " + status));
        }
      }
    );
  });
}
