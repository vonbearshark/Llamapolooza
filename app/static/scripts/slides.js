
/*==========BEGIN Llama Slides==========*/

//creates the slides
function llamaSlide (copy)
{
	this.copy = copy;

    var llamasArray = [];

	var typewriterCollisionCheck = false; //keeps track of collisions for cancelling the typewriter animation

	this.stopTypewriter = function() //cancels the typewriter animation of the slide
	{
		typewriterCollisionCheck = true;
	}
	this.startTypewriter = function() //starts the typewriter up again
	{
		typewriterCollisionCheck = false;
	}
	function checkTypewriter() //checks the status of the typerwriter checker boolean
	{
		return typewriterCollisionCheck;
	}

    this.getCopy = function()
    {
    	return this.copy;
    }
    this.addLlamas = function()
    {
    	for (var i = 0; i < arguments.length; i++)
    	{
    		llamasArray.push(arguments[i]);
    	}
    };

	//prints the copy of the slide, in a typewriter animation
	var str = this.getCopy();
	var i = 0;
	var delay = 50;
	var delayActivate = false;

	function type()
	{
		delay = 50; //ensures the delay is turned back to normal after paragraphs

		text = str.slice(0, ++i);

		if (checkTypewriter())
		{
			return; //break point, when the typewriter is stopped
		}

		document.getElementById('llamaCopySlide').innerHTML = text;

		var currentCharacter = text.slice(-1);

		//checks for tags, and ignores them
		if(currentCharacter === '<')
		{
		    isTag = true;
		}
		else if (currentCharacter === '/') //activates the delay on the closing paragraph
		{
			delayActivate = true;			

		}
		else if(currentCharacter === '>')
		{
			//extra delay after each paragraph
			if(delayActivate)
			{
				delay = 500;
				delayActivate = false;
			}
			//

		    isTag = false;
		}
		if (isTag)
		{
		    return type();
		}
		//

		//extra delay after each paragraph
		if ( currentCharacter - 2 == '/')
		{
			console.log("delayed");
			delay = 200;
		}
		//

		setTimeout(type, delay);
	};
	//

	//prints the llamas and copy on of the slide
	this.printLlamaSlide = function()
	{
		clearCanvas(LLAMASCENECANV2D);//clear the previous slides

		//print the llamas in the slide
		for (var i = 0; i < llamasArray.length; i++)
		{
			llamasArray[i].printLlama();
		}

		type(); //inititates the recusive, animated printing function function
	};
	//
}
//

//Slides:
var slide0 = new llamaSlide(
	"<p>Hello there,</p>\
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida lectus in elementum auctor. Cras pretium porta elementum. Donec varius consectetur dui, porttitor varius nunc pulvinar aliquam. Quisque porttitor finibus justo, nec dictum urna malesuada at. Nam blandit, odio ac semper vehicula, sem enim tempor orci, et mollis tellus justo id nibh. Duis mollis dui ut sapien gravida, eu ultrices est sodales. Phasellus non suscipit libero, nec lacinia odio. Nulla sit amet accumsan dui, a commodo erat. Sed auctor libero ipsum, ac gravida mauris ornare sit amet. Donec sagittis vel enim sed facilisis. Maecenas sollicitudin nibh vel mauris congue tristique.</p>\
	<p>Vestibulum quam nibh, semper sit amet arcu eu, tristique dictum nunc. Vivamus condimentum at est vitae lacinia. Suspendisse tempor consectetur lorem nec vehicula. Nulla tellus nunc, efficitur eget suscipit a, convallis at magna. Duis vitae dolor a lacus auctor pellentesque. Praesent id tortor euismod, vestibulum orci id, sagittis mi. Phasellus fringilla semper odio, ultrices vehicula elit convallis sed. Nam a faucibus mi. Donec euismod at arcu vel dignissim. Duis sit amet urna quis eros vehicula posuere. Duis sed velit velit. Sed ipsum nisi, facilisis at libero eget, lacinia porttitor dolor. Ut malesuada feugiat urna a accumsan.</p>");

slide0.addLlamas();

var slide1 = new llamaSlide(
	"<p>This is the first test!</p>\
	<p>All hail our llama overlords!</p>");

	var llama1 = new llamaBuilder(LLAMASCENECANV2D, 0, eyeGlass, ballcap, mustache, jersey);
	var llama2 = new llamaBuilder(LLAMASCENECANV2D, 300, sunglasses, helmet, mustache, labcoat);
	var llama3 = new llamaBuilder(LLAMASCENECANV2D, 500, eyePatch, normalCoat2, bloodCoat, briefcase);
	var llama4 = new llamaBuilder(LLAMASCENECANV2D, 800, briefcase, severedArmPlatter, bloodCoat, forkKnife);

slide1.addLlamas(llama1, llama2, llama3, llama4);

var slide2 = new llamaSlide(
	"<p>This is the second test!</p>\
	<p>Keep on hailing our llama overlords!</p>");

	llama1 = new llamaBuilder(LLAMASCENECANV2D, 300, severedArmPlatter, GICoat);
	llama2 = new llamaBuilder(LLAMASCENECANV2D, 250, sunglasses, mustache, fancyCoat);
	llama3 = new llamaBuilder(LLAMASCENECANV2D, 500, eyePatch, normalCoat3);
	llama4 = new llamaBuilder(LLAMASCENECANV2D, 600, bloodMouth, mustache, businessCoat);

slide2.addLlamas(llama1, llama2, llama3, llama4);

var slide3 = new llamaSlide(
	"<p>This is the third and final test!</p>\
	<p>Hail or else!</p>");

	llama1 = new llamaBuilder(LLAMASCENECANV2D, 300, severedArmPlatter, bloodCoat, GICoat);
	llama2 = new llamaBuilder(LLAMASCENECANV2D, 250, eyePatch, pipe, fancyCoat);
	llama3 = new llamaBuilder(LLAMASCENECANV2D, 500, eyePatch, labcoat);
	llama4 = new llamaBuilder(LLAMASCENECANV2D, 600, forkKnife, mustache, normalCoat1);

slide3.addLlamas(llama1, llama2, llama3, llama4);

var slide4 = new llamaSlide(
	"<p>This is the fourth!</p>\
	<p>Hail or else!</p>");

	llama1 = new llamaBuilder(LLAMASCENECANV2D, 300, severedArmPlatter, bloodCoat, GICoat);
	llama2 = new llamaBuilder(LLAMASCENECANV2D, 250, eyePatch, pipe, fancyCoat);
	llama3 = new llamaBuilder(LLAMASCENECANV2D, 500, eyePatch, labcoat);
	llama4 = new llamaBuilder(LLAMASCENECANV2D, 600, forkKnife, mustache, normalCoat1);

slide4.addLlamas(llama1, llama2, llama3, llama4);

var slide5 = new llamaSlide(
	"<p>This is the fifth!</p>\
	<p>Hail or else!</p>");

	llama1 = new llamaBuilder(LLAMASCENECANV2D, 300, severedArmPlatter, bloodCoat, GICoat);
	llama2 = new llamaBuilder(LLAMASCENECANV2D, 250, eyePatch, pipe, fancyCoat);
	llama3 = new llamaBuilder(LLAMASCENECANV2D, 500, eyePatch, labcoat);
	llama4 = new llamaBuilder(LLAMASCENECANV2D, 600, forkKnife, mustache, normalCoat1);

slide5.addLlamas(llama1, llama2, llama3, llama4);

var slide6 = new llamaSlide(
	"<p>This is the sixth!</p>\
	<p>Hail or else!</p>");

	llama1 = new llamaBuilder(LLAMASCENECANV2D, 300, severedArmPlatter, bloodCoat, GICoat);
	llama2 = new llamaBuilder(LLAMASCENECANV2D, 250, eyePatch, pipe, fancyCoat);
	llama3 = new llamaBuilder(LLAMASCENECANV2D, 500, eyePatch, labcoat);
	llama4 = new llamaBuilder(LLAMASCENECANV2D, 600, forkKnife, mustache, normalCoat1);

slide6.addLlamas(llama1, llama2, llama3, llama4);

var slide7 = new llamaSlide(
	"<p>This is the seventh!</p>\
	<p>Hail or else!</p>");

	llama1 = new llamaBuilder(LLAMASCENECANV2D, 300, severedArmPlatter, bloodCoat, GICoat);
	llama2 = new llamaBuilder(LLAMASCENECANV2D, 250, eyePatch, pipe, fancyCoat);
	llama3 = new llamaBuilder(LLAMASCENECANV2D, 500, eyePatch, labcoat);
	llama4 = new llamaBuilder(LLAMASCENECANV2D, 600, forkKnife, mustache, normalCoat1);

slide7.addLlamas(llama1, llama2, llama3, llama4);


var slide8 = new llamaSlide(
	"<p>This is the eigth!</p>\
	<p>Hail or else!</p>");

	llama1 = new llamaBuilder(LLAMASCENECANV2D, 300, severedArmPlatter, bloodCoat, GICoat);
	llama2 = new llamaBuilder(LLAMASCENECANV2D, 250, eyePatch, pipe, fancyCoat);
	llama3 = new llamaBuilder(LLAMASCENECANV2D, 500, eyePatch, labcoat);
	llama4 = new llamaBuilder(LLAMASCENECANV2D, 600, forkKnife, mustache, normalCoat1);

slide8.addLlamas(llama1, llama2, llama3, llama4);

var slide9 = new llamaSlide(
	"<p>This is the ninth!</p>\
	<p>Hail or else!</p>");

	llama1 = new llamaBuilder(LLAMASCENECANV2D, 300, severedArmPlatter, bloodCoat, GICoat);
	llama2 = new llamaBuilder(LLAMASCENECANV2D, 250, eyePatch, pipe, fancyCoat);
	llama3 = new llamaBuilder(LLAMASCENECANV2D, 500, eyePatch, labcoat);
	llama4 = new llamaBuilder(LLAMASCENECANV2D, 600, forkKnife, mustache, normalCoat1);

slide9.addLlamas(llama1, llama2, llama3, llama4);

var slide10 = new llamaSlide(
	"<p>This is the tenth!</p>\
	<p>Hail or else!</p>");

	llama1 = new llamaBuilder(LLAMASCENECANV2D, 300, severedArmPlatter, bloodCoat, GICoat);
	llama2 = new llamaBuilder(LLAMASCENECANV2D, 250, eyePatch, pipe, fancyCoat);
	llama3 = new llamaBuilder(LLAMASCENECANV2D, 500, eyePatch, labcoat);
	llama4 = new llamaBuilder(LLAMASCENECANV2D, 600, forkKnife, mustache, normalCoat1);

slide10.addLlamas(llama1, llama2, llama3, llama4);

var slides = [slide0, slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10]; //array for the switch counter functionality
//END slides

/*==========END Llama Slides==========*/