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

function getMedia(){
	if (navigator.getUserMedia) {
	   navigator.getUserMedia({ audio: true, video: { width: 1280, height: 720 } },
	      function(stream) {
	         var video = document.querySelector('video');
	         video.src = window.URL.createObjectURL(stream);
	         video.onloadedmetadata = function(e) {
	           video.play();
	         };
	      },
	      function(err) {
	         alert("The following error occurred: " + err.name);
	      }
	   );
	} else {
	   alert("getUserMedia not supported");
	}
}

function fullscreenPika(){

	var pikachu = document.querySelector("#pikachu");
	if (pikachu.requestFullscreen) {
	  pikachu.requestFullscreen();
	}
}