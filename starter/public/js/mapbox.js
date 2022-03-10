/* eslint-disable */
export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoia3VzaGFncmFzaGFybWExNiIsImEiOiJjbDBkbDByanIwOW95M2puMGxpMnpmZXk0In0.-C0_-sHi7AB9NmSgOuqShg';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/kushagrasharma16/cl0dyxcmi001k14qwjhy7qtog',
    scrollZoom: false
    //   center: [-118.113491, 34.1111745],
    //   zoom: 1,
    //   interactive: true
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Tour ${loc.day} : ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
