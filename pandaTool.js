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

  //adds a slider to control the size of the panda drawing on canvas
	this.populateOptions = function() {
      // create a tag under options
      select(".options").html("<div id='sizeOfPanda'></div>");

      var s = select("#sizeOfPanda");
      s.html("Size of Panda:");

      // add panda slider
      pandaSizeSlider = createSlider(5, 50, 20);
      pandaSizeSlider.parent("#sizeOfPanda");

  };
  
  //when the tool is deselected clear options
	this.unselectTool = function() {
		//clear options
		select("#sizeOfPanda").html("");
	};
}
