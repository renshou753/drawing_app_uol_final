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

  this.startX = this.c.elt.offsetLeft
  this.endX = this.c.elt.offsetLeft + this.c.width
  this.startY = this.c.elt.offsetTop
  this.endY = this.c.elt.offsetTop + this.c.height
  this.width = this.c.width
  this.height = this.c.height

  this.draw = function () {
    
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
    complexitySlider = createSlider(10, 30, 10);
    complexitySlider.parent("#complexityOption");

    // add shape size slider
    var sizeOption = select("#sizeOption");
    sizeOption.html("Shape size: ");
    sizeSlider = createSlider(50, 500, 50);
    sizeSlider.parent("#sizeOption");

    // add generate btn
    generateBtn = createButton("Generate");
    generateBtn.parent("#generateBtns");

    generateBtn.mousePressed(()=>{
      let layer_one_color = colorSelector.value()
      let layer_one_cp = this.colorPalette.get_color_from_name(layer_one_color)
      let layer_one_style = artStyleSelector.value()
      let layer_one_shape = artShapeSelector.value()
      let layer_one_complexity = complexitySlider.value()
      let layer_one_size = sizeSlider.value()
      this.generateLayerOne(art_style=layer_one_style, art_shape=layer_one_shape, color_palette=layer_one_cp, complexity=layer_one_complexity, magnitude=layer_one_size)
  })
    
  };

  //when the tool is deselected clear options
  this.unselectTool = function () {
    //clear options
    select("#artGeneratorOptions").html("");
  };

  this.generateLayerOne = function(art_style, art_shape, color_palette, complexity, magnitude){
    this.generateArt(art_style, art_shape, color_palette, complexity, magnitude)
  };

  this.generateArt = function(art_style, art_shape, color_palette, complexity, magnitude){
    if(this.art_shapes_list[0] == art_shape){
      this.generate_lines(complexity, color_palette, art_style, magnitude)
    }else if(this.art_shapes_list[0] == art_shape){
      this.generate_circles(complexity, color_palette, art_style, magnitude)
    }
  };

  this.generate_lines = function(complexity, cp, style, magnitude){
    if(style==this.art_styles_list[0]){    // chaotic
      for(let i=0; i<complexity; i++){
        let posX0 = random(this.startX-200, this.endX+200)
        let posX1 = random(this.startX, this.endX)
        let posY0 = random(this.startY-200, this.endY+200)
        let posY1 = random(this.startY, this.endY)
        let current_color = this.get_random_color(cp)
        stroke(current_color)
        line(posX0, posY0, posX1, posY1)
      }
    }else if(style==this.art_styles_list[1]){   // striped horizontal
      let interval = Math.floor(this.height/complexity)
      for(let i=0; i<complexity; i++){
        let posX0 = 0
        let posX1 = this.endX
        let posY0 = i*interval + random(0, this.height/10)
        let posY1 = i*interval + random(0, this.height/10)
        let current_color = this.get_random_color(cp)
        stroke(current_color)
        line(posX0, posY0, posX1, posY1)
      }
    }else if(style==this.art_styles_list[2]){  // striped vertical
      let interval = Math.floor(this.width/complexity)
      for(let i=0; i<complexity; i++){
        let posY0 = 0
        let posY1 = this.endY
        let posX0 = i*interval + random(0, this.width/10)
        let posX1 = i*interval + random(0, this.width/10)
        let current_color = this.get_random_color(cp)
        stroke(current_color)
        line(posX0, posY0, posX1, posY1)
      }    
    }else if(style==this.art_styles_list[3]){   // mosaic
      let row_line_count = Math.floor(complexity/3)+1
      let row_count = Math.floor(complexity/4)+1
      let x_interval = this.width/(row_line_count-1)
      let y_interval = this.height/(row_count-1)
      let color_one = this.get_random_color(cp)
      let color_two = this.get_random_color(cp)
      while(color_one==color_two){
        color_two = this.get_random_color(cp)
      }
      let current_color
      for(let i=0;i<row_count;i++){
        for(let j=0;j<row_line_count;j++){
          if((i+j)%2==0){
            current_color = color_one
          }else{
            current_color = color_two
          }
          let posX = [x_interval*j, x_interval*(j+1)]
          let posY_u = [y_interval*i, y_interval*(i+1)]
          let posY_d = [y_interval*(i+1), y_interval*(i)]
          console.log(posX, posY_d)
          stroke(current_color)
          if(random(0,1)==0){            
            line(posX[0], posY_u[0], posX[1], posY_u[1])
          }else{
            line(posX[0], posY_d[0], posX[1], posY_d[1])
          }

        }
      }
    }else if(style==this.art_styles_list[4]){ // cornered

    }else if(style==this.art_styles_list[5]){

    }
  };

  this.get_random_color = function(cp){
    var idx = Math.floor(Math.random() * cp.length); 
    return cp[idx]
  }

  this.generate_circles = function(complexity, cp, style, magnitude){

  };

  this.generate_squares = function(complexity, cp, style, magnitude){

  };

  this.generate_polygons = function(complexity, cp, style, magnitude){

  };

  this.generate_dots = function(complexity, cp, style, magnitude){

  };

  this.generate_curves = function(complexity, cp, style, magnitude){

  };


}
