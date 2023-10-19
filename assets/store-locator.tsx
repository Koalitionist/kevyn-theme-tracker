export const initStoreLocatorMaps = async () => {
  const config = {
    zoom: 14,
    backgroundColor: "none",
    draggable: false,
    clickableIcons: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    disableDefaultUI: true,
  };
  let apiStatus = null;

  // TODO - error handling
  const messages = {
    addressError: "Error looking up that address",
    addressNoResults: "No results for that address",
    addressQueryLimit:
      'You have exceeded the Google API usage limit. Consider upgrading to a <a href="https://developers.google.com/maps/premium/usage-limits">Premium Plan</a>.',
    authError:
      'There was a problem authenticating your Google Maps account. Create and enable the <a href="https://developers.google.com/maps/documentation/javascript/get-api-key">JavaScript API</a> and <a href="https://developers.google.com/maps/documentation/geocoding/get-api-key">Geocoding API</a> permissions of your app.',
  };

  const mapElements = document.querySelectorAll(".map-section");

  const GeoLocate = async (map) => {
    if (!map) {
      return;
    }
    const geocoder = new window.google.maps.Geocoder();
    const address = map.dataset.addressSetting;

    return await geocoder.geocode({ address });
  };

  const InitAllMaps = () => {
    mapElements.forEach(async (container) => {
      const map = container.querySelector("[data-map]");
      const req_geolocate = await GeoLocate(map);
      //console.log(req_geolocate)

      if (req_geolocate.results.length) {
        const map_config = Object.assign(config, {
          center: req_geolocate.results[0].geometry.location,
        });
        const gmap = new window.google.maps.Map(map, map_config);

        const marker = new window.google.maps.Marker({
          position: req_geolocate.results[0].geometry.location,
          map: gmap,
        });
      } else {
        // TODO - error handling
      }
    });
  };

  // init google api if section used
  if (mapElements.length) {
    const apiKey = mapElements[0].querySelector<HTMLElement>("[data-map]").dataset.apiKey;
    window.Shopify;
    if (typeof window.google === "undefined" || typeof window.google.maps === "undefined") {
      const script = document.createElement("script");
      script.onload = function () {
        apiStatus = "loaded";
        InitAllMaps();
      };
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      document.head.appendChild(script);
    }
  }
};
