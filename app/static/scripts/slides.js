
/*==========BEGIN Llama Slides==========*/

//creates the slides
function llamaSlide (copy)
{
	this.copy = copy;

    var llamasArray = [];

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

	//prints the llamas and copy on of the slide
	this.printLlamaSlide = function()
	{
		clearCanvas(LLAMASCENECANV2D);//clear the previous slides

		//print the llamas in the slide
		for (var i = 0; i < llamasArray.length; i++)
		{
			llamasArray[i].printLlama();
		}

		//prints the copy of the slide
		document.getElementById("llamaCopySlide").innerHTML = this.getCopy();
	};
	//
}
//

//Slides:
var slide0 = new llamaSlide(
	"<p>This is the intro test!</p>\
	<p>All hail our llama overlords!</p>");

	var llama1 = new llamaBuilder(LLAMASCENECANV2D, 0, eyeGlass, ballcap, mustache, jersey);
	var llama2 = new llamaBuilder(LLAMASCENECANV2D, 300, sunglasses, helmet, mustache, labcoat);
	var llama3 = new llamaBuilder(LLAMASCENECANV2D, 500, eyePatch, normalCoat2, bloodCoat, briefcase);
	var llama4 = new llamaBuilder(LLAMASCENECANV2D, 800, briefcase, severedArmPlatter, bloodCoat, forkKnife);

slide0.addLlamas(llama1, llama2, llama3, llama4);

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