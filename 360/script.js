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