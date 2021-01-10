function ArtGeneratorTool() {
  //set an icon and a name for the object
  this.icon = "assets/dice.png";
  this.name = "artGenerator";
  this.colorPalette = new colorPalette();
  this.palette = this.colorPalette.palette;
  this.palette_names = this.colorPalette.palette_names;

  this.art_styles_list = [
    "Chaotic",
    "Striped Horizontal",
    "Striped Vertical",
    "Mosaic",
    "Cornered",
    "Centered",
    "Empty",
  ];

  this.art_shapes_list = [
    "Lines",
    "Circles",
    "Squares",
    "Hollow Polygons",
    "Filled Polygons",
    "Dots",
    "Curves",
    "Rings",
  ];

  //select canvas
  this.c = select("canvas");

  this.draw = function () {
    //if the mouse is pressed
    if (mouseIsPressed) {
    }
  };

  //adds a slider to control the size of the panda drawing on canvas
  this.populateOptions = function () {
    // create option tags
    select(".options").html(
      `<div id="artGeneratorOptions">
            <div id="colorPaletteOption"></div>
            <div id="artStyleOption"></div>
            <div id="artShapeOption"></div>
            <div id="complexityOption"></div>
            <div id="sizeOption"></div>
            <div id='generateBtns'></div>
        </div>`
    );

    // create color palette selector, create options for selector
    var colorPaletteOption = select("#colorPaletteOption");
    colorPaletteOption.html("Color Palete: ");

    colorSelector = createSelect();
    colorSelector.parent("#colorPaletteOption");

    for (var i = 0; i < this.palette_names.length; i++) {
      colorSelector.option(this.palette_names[i]);
    }

    // create art style selector, options for selector
    var artStyleOption = select("#artStyleOption");
    artStyleOption.html("Art Style: ");

    artStyleSelector = createSelect();
    artStyleSelector.parent("#artStyleOption");

    for (var i = 0; i < this.art_styles_list.length; i++) {
      artStyleSelector.option(this.art_styles_list[i]);
    }

    // create art shape selector, create options
    var artShapeOption = select("#artShapeOption");
    artShapeOption.html("Art Shape: ");

    artShapeSelector = createSelect();
    artShapeSelector.parent("#artShapeOption");

    for (var i = 0; i < this.art_shapes_list.length; i++) {
      artShapeSelector.option(this.art_shapes_list[i]);
    }

    // add complexity slider
    var complexityOption = select("#complexityOption");
    complexityOption.html("Shape complexity: ");
    complexitySlider = createSlider(5, 50, 20);
    complexitySlider.parent("#complexityOption");

    // add shape size slider
    var sizeOption = select("#sizeOption");
    sizeOption.html("Shape size: ");
    sizeSlider = createSlider(5, 50, 20);
    sizeSlider.parent("#sizeOption");

    // add generate btn
    generateBtn = createButton("Generate");
    generateBtn.parent("#generateBtns");
  };

  //when the tool is deselected clear options
  this.unselectTool = function () {
    //clear options
    select("#artGeneratorOptions").html("");
  };
}
