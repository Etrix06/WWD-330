//But first, let’s start with the basics. Before we can draw onto 
//a canvas, we need to grab hold of the canvas element on our page:

var canvas = document.getElementById("myCanvas");

//We obtain our drawing context by calling the getContext method 
//and passing it the string "2d" , since we’ll be drawing in two dimensions:

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

//The object that’s returned by getContext is an instance 
//of CanvasRenderingContext2D . In this chapter, we’ll refer to it as 
//simply “the context object” for brevity.

//On a real-life painting canvas, you must first saturate your brush with paint 
//before you can begin. In the HTML5 canvas, you must do the same, and we do so 
//with the strokeStyle or fillStyle properties. Both strokeStyle and fillStyle 
//are set on a context object, and both take one of three values: a string 
//representing a color, a CanvasGradient object, or a CanvasPattern object.

//Let’s start by using a color string to style thestroke. You can think of the 
//stroke as the border of the shape you’re going to draw. To draw a rectangle 
//with a red border, we first define the stroke color:

context.strokeStyle = "red";

//To draw a rectangle with a red border and blue fill, we must also define the fill color:

//context.fillStyle = "blue";

//We can use any CSS color value to set the stroke or fill color, as long as we 
//specify it as a string: a hexadecimal value such as #00FFFF , a color name such 
//as red or blue , or an RGB value such as rgb(0, 0, 255) . We can even use the 
//property rgba to set a semitransparent stroke or fill color.

//Let’s change our blue fill to blue with a 50% opacity:

context.fillStyle = "rgba(0, 0, 255, 0.5)";

//Once we’ve defined the color of the stroke and the fill, we’re ready to start 
//drawing! Let’s begin by drawing a rectangle. We can repeat the steps we just 
//took: grabbing the canvas and the context, and setting a fill and stroke 
//style. But now, we’ll draw a rectangle. We can do this by calling the fillRect 
//and strokeRect methods. Both of these methods take the X and Y coordinates 
//where you want to begin drawing the fill or the stroke, and the width and 
//height of the rectangle. We’ll add the stroke and fill 10 pixels from the top 
//and 10 pixels from the left of the canvas’s top-left corner:

context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);

function drawPattern() {
  var canvas = document.getElementById("demo2");
  var context = canvas.getContext("2d");
  context.strokeStyle = "red";
  var img = new Image(); 
  img.src = "Chess_Rook.png";
  img.onload = function() { 
    var pattern = context.createPattern(img, "repeat"); 
    context.fillStyle = pattern;                        
    context.fillRect(10, 10, 100, 100);                  
    context.strokeRect(10, 10, 100, 100);
  };  
}

