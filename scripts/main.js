let box = document.querySelector('#description');
let naplesMap = L.map('naplesMap').setView([26.193813, -81.705949], 11.33);

L.tileLayer('https://api.mapbox.com/styles/v1/zcarnell/clan79yjz002i15pfcn7imdqz/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiemNhcm5lbGwiLCJhIjoiY2xhbjZ6czZsMDVraTNvcGQ1b2h6Zjc2bCJ9.v-shyASMRnY1z_N6vrlt2w', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(naplesMap);

// Marker click code from Professor McAdams: https://jsfiddle.net/macloo/xvrhtfw9/
for (let i = 0; i < places.length; i++) {
  L.marker([places[i].lat, places[i].long], { alt: places[i].id }).on('click', markerOnClick).addTo(naplesMap);
}

// Marker click code from Professor McAdams: https://jsfiddle.net/macloo/xvrhtfw9/
function markerOnClick() {
	// this. refers to the marker that was clicked
  let park_id = this.options.alt;
  // get the index of the state object
  let i = places.findIndex((park, i) => {
    if (park.id === park_id) {
      return true
    }
  })
	// write descrip for that state into external DIV
  box.innerHTML = places[i].desc;
  // console.log(this.options);
}

// Maybe do marker clusters: https://stackoverflow.com/questions/49333263/how-to-use-leaflet-markerclustergroup

// Old desc bind to marker popup
//for (let i = 0; i < places.length; i++) {
  // L.marker([places[i].lat, places[i].long]).bindPopup('<h3><a href="' + places[i].agencyurl + '">' + places[i].placeName + '</a></h3>' + '<p>"' + places[i].desc + '" (<a href="https://hub-collierbcc.opendata.arcgis.com/datasets/CollierBCC::parks/explore?location=26.147654%2C-81.590115%2C10.92&showTable=true">Collier County GIS</a>).</p>').addTo(naplesMap);
// }
