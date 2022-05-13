var player1;
var map1;
var panoramaOptionsGlobal0;
var panoramaOptionsGlobal1;
var panoramaOptionsGlobal2;
var mapOptions1;
var map;
var position;
locationLat0 = 58.1399914;
locationLng0 = 52.6733744;

locationLat1 = 58.1408227;
locationLng1 = 52.6763591;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

  function initialize() {
    var glazov0 = new google.maps.LatLng(locationLat0, locationLng0);
	var glazov1 = new google.maps.LatLng(locationLat1, locationLng1);
    var mapOptions0 = {
      center: glazov0,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(
        document.getElementById("map_canvas"), mapOptions0);
    var panoramaOptions0 = {
      position: glazov0,
      pov: {
        heading: 34,
        pitch: 10,
        zoom: 1
      }
	};
	  var panoramaOptions1 = {
      position: glazov1,
      pov: {
        heading: 34,
        pitch: 10,
        zoom: 1
      }
    };
    var panorama = new  google.maps.StreetViewPanorama(document.getElementById("pano"),panoramaOptions0);
    map.setStreetView(panorama);
	map1 = map;
	//panoramaOptions1 = panoramaOptions;
	//mapOptions1 = mapOptions;
    panoramaOptionsGlobal0 = panoramaOptions0;
	panoramaOptionsGlobal1 = panoramaOptions1;
  }
  

function onClickNext() {
	var panorama = new  google.maps.StreetViewPanorama(document.getElementById("pano"),panoramaOptionsGlobal1);
    map1.setStreetView(panorama);
	console.log("clicked button: next");
	return false;
}
function onClickBack() {
	var panorama = new  google.maps.StreetViewPanorama(document.getElementById("pano"),panoramaOptionsGlobal0);
    map1.setStreetView(panorama);
	console.log("clicked button: back");
	return false;
}
function onClickSave() {
	console.log("current coordinates: "+1);
	console.log("Saving coordinates has passed!");
	return false;
}


