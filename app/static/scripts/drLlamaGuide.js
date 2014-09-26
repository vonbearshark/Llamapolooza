
/*==========BEGIN Dr. Llama Guide==========*/

window.addEventListener("keydown", moveDrLlama, false); //listens for pressing keys and executes moveDrLlama()

/* Dr. Llama Body */

var drLlama = new llamaBuilder(DRLLAMACANV2D, 400, eyePatch, labcoat, mustache);

drLlama.printLlama();

/* End Dr. Lama Body */

/* BEGIN Dr. Llama Movement */

var collisionDetector = 'right';

function moveDrLlama(e)
{
	var boundryBoxLeft = drLlama.getXCoord();
	var boundryBoxRight = drLlama.getXCoord() + drLlama.getWidth();

	if (e.keyCode == KEYLEFT || e.keyCode == KEYA)
	{
		if (boundryBoxLeft <= (CANVASWIDTH-CANVASWIDTH))
		{
			collisionDetector = 'left';
			colliderSwitch();
		}

		else
		{
			drLlama.moveLeft();

			drLlama.printLlama();

			clearCanvas(DRLLAMACANV2D);

			drLlama.printLlama();
		}
	}

	else if (e.keyCode == KEYRIGHT || e.keyCode == KEYD)
	{
		if (boundryBoxRight >= CANVASWIDTH)
		{
			collisionDetector = 'right';

			colliderSwitch();
		}

		else
		{
			drLlama.moveRight();

			drLlama.printLlama();

			clearCanvas(DRLLAMACANV2D);

			drLlama.printLlama();
		}
	}
}

/* END Dr. Llama Movement */

/* BEGIN Dr. Llama Collision Detection Control Switch */

var countTracker = 0;

slides[countTracker].printLlamaSlide();
document.getElementById("navSlide" + countTracker).style.color = "#821121";

function rightCollide()
{
	countTracker++;
    document.getElementById("navSlide" + (countTracker - 1)).style.color = "#BD3548";
    document.getElementById("navSlide" + countTracker).style.color = "#821121";

	for (var i = 0; i <  slides.length; i++)
	{
   		slides[i].stopTypewriter();
	}
	slides[countTracker].startTypewriter();
    slides[countTracker].printLlamaSlide();

    drLlama.moveCenter();
	clearCanvas(DRLLAMACANV2D);
    drLlama.printLlama();
}

function leftCollide()
{
	countTracker--;
    document.getElementById("navSlide" + (countTracker + 1)).style.color = "#BD3548";
    document.getElementById("navSlide" + countTracker).style.color = "#821121";

	for (var i = 0; i <  slides.length; i++)
	{
   		slides[i].stopTypewriter();
	}
	slides[countTracker].startTypewriter();
    slides[countTracker].printLlamaSlide();

    drLlama.moveCenter();
	clearCanvas(DRLLAMACANV2D);
    drLlama.printLlama();
}

function linkCollide()
{
	for (var i = 0; i <  slides.length; i++)
	{
		document.getElementById("navSlide" + i).style.color = "#BD3548";
	}
    document.getElementById("navSlide" + countTracker).style.color = "#821121";

	for (var i = 0; i <  slides.length; i++)
	{
   		slides[i].stopTypewriter();
	}
	slides[countTracker].startTypewriter();
    slides[countTracker].printLlamaSlide();


    drLlama.moveCenter();
	clearCanvas(DRLLAMACANV2D);
    drLlama.printLlama();
}

function colliderSwitch()
{
	if(collisionDetector == 'right')
    {
    	if(countTracker < slides.length -1)
    	{
       		rightCollide();
       	}
    }
    else if(collisionDetector == 'left')
    {
     	if (countTracker > 0)
		{
        	leftCollide();
        }
    }
    else if(collisionDetector == 'link')
	{
			linkCollide();
	}       
}

//if coming from a link
function linkDrawLlamaSlide(thisNavID)
{
	collisionDetector = 'link';
	countTracker = parseInt(thisNavID);
	colliderSwitch();
}
//

/* END Dr. Llama Collision Detection Control Switch */

/*==========END Dr. Llama Guide==========*/