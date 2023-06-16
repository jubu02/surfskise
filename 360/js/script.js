document.addEventListener("DOMContentLoaded", function(){
    document.body.addEventListener("touchstart", playVideo);
    function playVideo() {
        const video = document.getElementById('myVideo');
        if(video.playing) {
        } else {
            video.play();
        }
    }
});

var options = {
    plugins: {
      panorama: {
        clickAndDrag: true,
        clickToToggle: true,
        autoMobileOrientation: true,
        backToVerticalCenter: false,
        backToHorizonCenter: false
      }
    }
  };
  var player = videojs('player', options, function() {
  
  });