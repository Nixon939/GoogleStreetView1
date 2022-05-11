var player1;
var map1;
var panoramaOptions1;
var mapOptions1;
locationLat0 = 58.1399914;
locationLng0 = 52.6733744;

locationLat1 = 58.1408227;
locationLng1 = 52.6763591;

  function initialize() {
    var moscow = new google.maps.LatLng(locationLat0, locationLng0);
	var glazov = new google.maps.LatLng(locationLat1, locationLng1);
    var mapOptions = {
      center: moscow,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(
        document.getElementById("map_canvas"), mapOptions);
    var panoramaOptions = {
      position: moscow,
      pov: {
        heading: 34,
        pitch: 10,
        zoom: 1
      }
	};
	  var panoramaOptions1 = {
      position: glazov,
      pov: {
        heading: 34,
        pitch: 10,
        zoom: 1
      }
    };
    var panorama = new  google.maps.StreetViewPanorama(document.getElementById("pano"),panoramaOptions);
    map.setStreetView(panorama);
	map1 = map;
	//panoramaOptions1 = panoramaOptions;
	mapOptions1 = mapOptions;
  }
  

function onClickNext() {
	var panorama = new  google.maps.StreetViewPanorama(document.getElementById("pano"),panoramaOptions1);
    map1.setStreetView(panorama);

}
