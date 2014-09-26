
/*==========BEGIN Canvas and Universals==========*/

var KEYLEFT = 37; //left
var KEYRIGHT = 39; //right
var KEYA = 65; //"A" key
var KEYD = 68; //"D" key

var YCOORD = 0; //all images begin at the top of the canvas; as of now, there is no need for vertical mobility

var llamaSceneCanv = document.getElementById('llamaScene');
var LLAMASCENECANV2D = llamaSceneCanv.getContext('2d'); //2d context of the upper canvas, which features the rendered slides

var drLlamaCanv = document.getElementById('drLlamaGuide');
var DRLLAMACANV2D = drLlamaCanv.getContext('2d'); //2d context of the lower canvas, which features the Dr. Llama moving guide

var CANVASWIDTH = 1024; //width of the canvas elements
var CANVASHEIGHT = 350; //height of the canvas elements

var IMAGEHEIGHT = 200; //width of the images
var IMAGEWIDTH = 250; //height of the images

function clearCanvas(canvas) //clears the canvas by setting it to white (this works due to the current white background)
{
	canvas.clearRect(0, 0, CANVASWIDTH, CANVASHEIGHT)
}


/*==========END Canvas and Univerisals==========*/
