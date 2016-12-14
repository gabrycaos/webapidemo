function getPosition() {
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

function getMedia() {
    if (navigator.getUserMedia) {
        navigator.getUserMedia({audio: true, video: {width: 1280, height: 720}},
            function (stream) {
                var video = document.querySelector('video');
                video.src = window.URL.createObjectURL(stream);
                video.onloadedmetadata = function (e) {
                    video.play();
                };
            },
            function (err) {
                alert("The following error occurred: " + err.name);
            }
        );
    } else {
        alert("getUserMedia not supported");
    }
}

function fullscreenPika() {

    var pikachu = document.querySelector("#pikachu");
    if (pikachu.requestFullscreen) {
        pikachu.requestFullscreen();
    }
}

function speech() {
    var phrase = document.getElementById("phrase").value;
    var speech = new SpeechSynthesisUtterance(phrase);
    window.speechSynthesis.speak(speech);
}
function notify() {
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }

    else if (Notification.permission === "granted") {
        var notification = new Notification("Hi people!");
    }

    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                var notification = new Notification("Hi people!");
            }
        });
    }
}

function speechRecognition() {
    // var recognition = new SpeechRecognition();
    // //recognition.continuous = false;
    // recognition.lang = 'en-US';
    // recognition.interimResults = false;
    // recognition.maxAlternatives = 1;
    //
    // recognition.start();
    // console.log('Ready to receive a color command.');
    //
    // recognition.onresult = function (event) {
    //     var color = event.results[0][0].transcript;
    //     // alert(color);
    //     $("#speeched").append(color);
    // }
    $("#speeched").append("API currently not supported :(");

}

function getFromWorker(e){

    //WEBWORKER CODE
    var myWorker = new Worker("worker.js");
        console.log($("#dataForWorker").val());
        myWorker.postMessage([$("#dataForWorker").val()]);
        console.log('Message posted to worker');

    myWorker.onmessage = function(result){
        console.log(result);
        $("#result").empty();
        $("#result").append(result.data);
    };
//--------------

};



