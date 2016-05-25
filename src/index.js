var L = require('leaflet'),
	Control = require('./control'),
	Bing = require('./geocoders/bing');

module.exports = L.Util.extend(Control.class, {
	Bing: Bing.class,
	bing: Bing.factory
});

L.Util.extend(L.Control, {
	Geocoder: module.exports,
	geocoder: Control.factory
});
