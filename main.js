var map = L.map('map').setView([51.505, -0.09], 13); //direccion

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09], 18).addTo(map); //efecto de donde es y el mensaje
marker.bindPopup("<b>Hello, I'm Infonet.!</b><br>I am the best company.").openPopup();