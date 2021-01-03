function preload() {
  panda = loadImage("./assets/panda.jpg");
}

function PandaTool() {
  //set an icon and a name for the object
  this.icon = "assets/panda.jpg";
  this.name = "panda";
  this.size = 20;

  this.draw = function () {
    var pandaSize = pandaSizeSlider.value();
    //if the mouse is pressed
    if (mouseIsPressed) {
      var xPos = mouseX - pandaSize;
      var yPos = mouseY - pandaSize;
      image(panda, xPos, yPos, pandaSize, pandaSize);
    }
  };
}
