var options = {
  plugins: {
    panorama: {
      clickAndDrag: true,
      clickToToggle: true,
      autoMobileOrientation: true,
      backToVerticalCenter: true,
      backToHorizonCenter: true
    }
  }
};
var player = videojs('player', options, function() {
  var myPlayer = this;
  myPlayer.vr({projection: 'Sphere'});
});