> Introduction to Programming II - Final Report
Student id: cl174

### List the modifications and extension that you have made to the template file (400 words).

I have finished four extensions namely: panda stamping, editable shape, abstract art generator and random art generator.

Panda stamping and editable shape extensions are similar to the extensions that demonstrated in the class. In terms of functionality panda stamping extension draws cute panda onto the canvas when user clicks the mouse, the editable shape extension allows user to edit the shape of the drawing in editing mode. I have adapted the code of these two extensions to make them structured and comparable to the sample extensions.

Abstract art generator extension is the one I put most efforts on. User could first select color palettes, each palette has four different colors. Then user would need to select the shape and style of each drawing layer, we have two layers in total, for each layer user would also need to choose the complexity and the size of each shape. 

The shape of the drawing could be line, circle, polygon, square, dot, curve or ring. For each shape it could be placed in the center/corner of the screen or horizontally/vertically placed, chaotic and mosaic placements are also an option here. Each time the app will generate a different drawing even user chose the same setting. I have put certain randomness to the app so the quantity, the position as well as the color of each shape would change each time it runs.

The art generator fits into the design of the template since it generates beautiful abstract image, the user could just choose the style then edit on top of it, or export the image as desktop picture.

I have structured the code, each shape has its method in the drawing class, shape drawing method can be called from the class instance. I have added comments to the code to make it more readable.

The last extension is called random art generator where user could just click a button to generate stunning art. This time user does not need to select any settings, everything is generated randomly including color, shape, style and complexity. There are endless possibilities here and I am quite pleased to see the outcome.

It fits into the design of the template to generate visually pleasing picture for user to edit on. In terms of structure, there are not too many lines of code in this class, it would call the subroutine of art generator class where the drawing happens.

### Describe how effective your plan was in completing your project (250 words).

I think my planning was okay. As I stated in the midterm report, before the midterm I will work on the two extensions processor Edward showed on the class, meanwhile reading the pygame documentation[^1]. Afterwards I would read the source code of that pygame implementation[^2] to understand how thing works under the hood, in the end port everything using p5.js. It turned out to be an effective plan and I didn't rush everything in the last minute.

In most of my time I did stick to my schedule, although I had around two weeks during Chinese new year when I had to rest and spent time with my family.

I didn't encounter too much difficulties. Learning pygame is a fresh experience but it turns out to be fun learning building games.



### Evaluate the process of completing the project and how effective the final product is. (250 words)


This project was an inspiration came from a youtube video[^3] I saw months ago where the author tried to use a python library called pygame to build abstract art. Initially I had doubt whether it was possible to implement the same functionalities with p5.js. With the project progresses I realized the full power of javascript and I become confident to use the tool to build application.

This project is a reflection of the original python implementation[^2] but using javascript. Next time I wish I could do more to add my creativity on top of it.

I did a bit unit testing on this application to try out the possible scenarios I could imagine the app could run into. I personally found some edge cases happened that when I developed the app I didn't really anticipated. I am glad I solved those issues, however, I have to admit I am not very seasoned at testing and there are a lot more to be done.

I think the users were happy to see the outcome since they could easily see abstract arts generated and exported to be used. The user interface could be polished a bit more to be responsive to mobile layout, certain screen elements could also be expandable so user could have enough space to draw on a blank canvas.



### List any external sources that you have actively utilised in your project.  

[^1]: "pygame", https://www.pygame.org/news

[^2]: "Abstract Art Generator", Burakoli, 2020, https://github.com/Burakcoli/Abstract-Art-Generator

[^3]: "Showcasing Your Programming Projects - Code Jam Winners and Top Projects", Tech with Tim, Sep 24 2020, https://www.youtube.com/watch?v=Nl5KqXasBx4&t=852s