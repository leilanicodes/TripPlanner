const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");
console.log("hello world");
mapboxgl.accessToken =
  "pk.eyJ1IjoibTExZWxiYWwiLCJhIjoiY2s5c292bjU3MTB1NDNlbHp5MjJ5eHpmdyJ9.TlLyEprHF1iLIGpAgL0adw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009151, 40.705086], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10", // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = `url(http://i.imgur.com/WbMOfMl.png)`; // if wrapped with " ", it'll be forbidden
// new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map);

const marker = buildMarker("hotels", [-74.009151, 40.705086]);
marker.addTo(map);
