function getPosition(){
function success(position) {
  $("#lat").append(position.coords.latitude);
  $("#lon").append(position.coords.longitude);
  $("#acc").append(position.coords.accuracy);
};

function error(error) {
	alert("Sorry, there is an error :-/");
};

navigator.geolocation.getCurrentPosition(success, error);
}