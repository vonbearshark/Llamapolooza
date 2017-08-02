
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
				delay = 600;
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
			if( llamasArray[i] === 'none') //sets the canvas to hidden for the intro
			{
				document.getElementById("llamaScene").style.display = "none";
			}
			else
			{
				document.getElementById("llamaScene").removeAttribute("style"); //re-shows the canvas for all else
				llamasArray[i].printLlama();
			}
		}

		type(); //inititates the recusive, animated printing function function

	};
	//
}
//

//Slides:
var slide0 = new llamaSlide(
	"<p>Greetings, humanoids!</p>\
	<p>As you are painfully aware, the year is 3014, and the superior llama species has vanquished your forces in glorious battle!</p>\
	<p>In fact, if you're seeing this, you are probably enslaved.<\p>\
	<p>Ha ha! What a funny turn of events!</p>\
	<p>We have prepared this presentation in an effort to forward your appreciation for our peoples, and to ease the transition into your servitude.</p>\
	<p>Really, once you've made yourself at home you will hardly notice the security measures we have taken to keep you impotent-</p>\
	<p>...Err <i>safe</i></p>\
	<p>So, while we wait around for Stockholm Syndrome to kick in, allow me to guide you through a brief demonstration on our peoples: who we are and why we are better.</p>\
	<p>It's good fun for the whole family...especially the children!</p>\
	<p>I want this to be a fun little adventure, so feel free to use the Left or Right keys to move me to the next slide. And because we are so flexible and loosy-goosy, just like you humans, you can use the A and D keys as well!</p>\
	<p>Wow, maybe this technological superiority of ours is what lead to your downfall and eventual enslavement!</p>\
	<p>Ha, ha! Im kidding.</p>\
	<p>It was our forced-cannibalism and dismemberment of your leaders.</p>\
	<p>Onward towards your betterment!</p>")

slide0.addLlamas("none");

var slide1 = new llamaSlide(
	"<p>As you can see, we have an array of diverse skills and professions, just like you!</p>\
	<p>In fact, we have even adopted many of your naming conventions.<p>\
	<p>For example, here we have llama-doctors, llama-lawyers, business llamas, and entrepreneur-llamas.</p>\
	<p>We would have drawn more except that our llama-hands make fine motor skills, such as writing, difficult</p>\
	<p>Good thing for slave labor!<p>\
	<p>Isn't it funny how the world will never return to the way it was as you knew it, and this will be the new world order?</p>\
	<p>I think so...</p>");

	var llama1 = new llamaBuilder(LLAMASCENECANV2D, 100, labcoat);
	var llama2 = new llamaBuilder(LLAMASCENECANV2D, 250, fancyCoat, pipe, briefcase);
	var llama3 = new llamaBuilder(LLAMASCENECANV2D, 500, businessCoat, sunglasses, briefcase);
	var llama4 = new llamaBuilder(LLAMASCENECANV2D, 700, fancyCoat, eyeGlass, pipe, topHat, briefcase);

slide1.addLlamas(llama1, llama2, llama3, llama4);

var slide2 = new llamaSlide(
	"<p>Us llamas even enjoy llama-sports!</p>\
	<p>Here is the starting lineup for the llama-yankees, playing llama-baseball!</p>\
	<p>Despite its name, llama baseball has very little relation to the human version.</p>\
	<p>For example, instead of hitting a ball and running around the diamond, we take away your family and force them to work in the mines!</p>\
	<p>We are quite good, and rarely lose!</p>\
	<p>In this way we receive the products of free labor necessary to fund the security protocols of our FUN camps, <i>and</i> we get to watch humans wallow in their own misery.</p>\
	<p>Now, that's what you call good old fashioned cold llama efficiency.</p>");

	llama1 = new llamaBuilder(LLAMASCENECANV2D, 0, jersey, ballcap);
	llama2 = new llamaBuilder(LLAMASCENECANV2D, 150, jersey, sunglasses, ballcap);
	llama3 = new llamaBuilder(LLAMASCENECANV2D, 500, jersey, ballcap);
	llama4 = new llamaBuilder(LLAMASCENECANV2D, 600, mustache, jersey, ballcap);

slide2.addLlamas(llama1, llama2, llama3, llama4);

var slide3 = new llamaSlide(
	"<p>Let's take a journey back into the past: </p>\
	<p>Long before your enforced-memory is allowed to remember, the llamas and humans lived in a very different world.</p>\
	<p>Humans would herd the peaceful llamas, corral them, and shave off their hair for ironically hideous sweaters.</p>\
	<p>However, what the humans mistook for grazing, was really plotting!</p>\
	<p>Now your people are the sweaters: irony indeed!</p>")

	llama1 = new llamaBuilder(LLAMASCENECANV2D, 100);
	llama2 = new llamaBuilder(LLAMASCENECANV2D, 250);
	llama3 = new llamaBuilder(LLAMASCENECANV2D, 450);
	llama4 = new llamaBuilder(LLAMASCENECANV2D, 600);

slide3.addLlamas(llama1, llama2, llama3, llama4);

var slide4 = new llamaSlide(
	"<p>In the summer of human-year 2015 (or llama-year 0), we began our coup d\'&#233;tat.<p>\
	<p>Here are our valiant llama-warriors, following the 2015 Llama Uprising in what is today llama-Las Vegas, llama-Nevada<p>\
	<p>I myself fought in the uprising, losing the eye I am sure you noticed.</p>\
	<p>Luckily, I harbor no resentment.</p>");

	llama1 = new llamaBuilder(LLAMASCENECANV2D, 100, GICoat, helmet);
	llama2 = new llamaBuilder(LLAMASCENECANV2D, 250, GICoat, sunglasses, helmet);
	llama3 = new llamaBuilder(LLAMASCENECANV2D, 400, GICoat, pipe);
	llama4 = new llamaBuilder(LLAMASCENECANV2D, 600, normalCoat1, sunglasses, helmet);
	var llama5 = new llamaBuilder(LLAMASCENECANV2D, 800, GICoat, mustache, helmet);

slide4.addLlamas(llama1, llama2, llama3, llama4, llama5);

var slide5 = new llamaSlide(
	"<p>As you know, the battle dragged on for almost 100 human-years.</p>\
	<p>(You humans are as resilient as you are fragile!)</p>\
	<p>Battles were long and bloody, leaving many good llamas in waste.</p>\
	<p>Don't worry, we retaliated by bombing your civilizations to rubble.</p>\
	<p>Take this time to mourn the loss of your friends and loved ones.</p>\
	<p>...</p>\
	<p>Okay, moving on!</p>");

	llama1 = new llamaBuilder(LLAMASCENECANV2D, 100, GICoat, bloodCoat, helmet);
	llama2 = new llamaBuilder(LLAMASCENECANV2D, 250, GICoat, sunglasses, helmet);
	llama3 = new llamaBuilder(LLAMASCENECANV2D, 400, GICoat, bloodCoat, pipe);
	llama4 = new llamaBuilder(LLAMASCENECANV2D, 600, normalCoat1, bloodCoat, sunglasses, helmet);
	llama5 = new llamaBuilder(LLAMASCENECANV2D, 800, GICoat, mustache, helmet);

slide5.addLlamas(llama1, llama2, llama3, llama4, llama5);

var slide6 = new llamaSlide(
	"<p>Most humans fell easily to the llama forces.</p>\
	<p>However, there were notable holdouts.</p>\
	<p>After months of deliberation and sieging of the human capital cities, the llama-generals had the idea to save resources by eating your people!</p>\
	<p>Look! There are little pieces of you! We are keeping it close to our hearts.</p>\
	<p>(...Anatomically!)</p>\
	<p>This could not have gone any better: not only did this save on costly resources, but it also broke your spirit!</p>\
	<p>Think about this demoralization the next time you want to resist and\\or escape!</p>");

	llama1 = new llamaBuilder(LLAMASCENECANV2D, 50, GICoat, bloodCoat, helmet);
	llama2 = new llamaBuilder(LLAMASCENECANV2D, 250, GICoat, sunglasses, helmet, severedArmPlatter, bloodMouth);
	llama3 = new llamaBuilder(LLAMASCENECANV2D, 400, GICoat, bloodCoat, bloodMouth, pipe, forkKnife);
	llama4 = new llamaBuilder(LLAMASCENECANV2D, 600, normalCoat1, bloodCoat, sunglasses, helmet, severedArmPlatter, forkKnife);
	llama5 = new llamaBuilder(LLAMASCENECANV2D, 800, GICoat, bloodMouth, mustache, helmet, forkKnife);

slide6.addLlamas(llama1, llama2, llama3, llama4, llama5);

var slide7 = new llamaSlide(
	"<p>When it was clear that the human forces had been destroyed or scattered, and that all leadership and societal structure had been abandoned, our supreme llama leaders got together and officially surrendered <i>for</i> you.</p>\
	<p>(See how helpful we can be!)</p>\
	<p>The reign of human terror was over. Now it was time to rebuild...</p>\
	<p>That's where you come in!</p>\
	<p>Through our patented Forced Uneatenlaborforce N' lobotomies (F.U.N.)  programs, you get a chance to help build a better society that we will then inhabit.</p>\
	<p>You'll get to work in one of our many FUN camps, FUN experimental testing facilities, or FUN lead mines.</p>\
	<p>The choice is yours!<p>\
	<p>...err rather ours! This makes it more exciting. Like a surprise party.</p>");

	llama1 = new llamaBuilder(LLAMASCENECANV2D, 150, businessCoat);
	llama2 = new llamaBuilder(LLAMASCENECANV2D, 300, businessCoat, pipe);
	llama3 = new llamaBuilder(LLAMASCENECANV2D, 500, businessCoat, mustache);
	llama4 = new llamaBuilder(LLAMASCENECANV2D, 600, businessCoat);

slide7.addLlamas(llama1, llama2, llama3, llama4);


var slide8 = new llamaSlide(
	"<p>Our team of marginally trained FUN enthusiasts help enforce a number of the facilities' services, ranging from monitored Information Sessions to personal retreats to the Relaxation Chamber, for especially nervous guests.</p>\
	<p>You will feel safe and secure in their llama-hands!</p>\
	<p>This may <i>seem</i> like an unfortunate predicament, but remember: when life gives you llamas-</p>\
	<p>...serve them tirelessly or feel their unrelenting wrath.</p>");

	llama1 = new llamaBuilder(LLAMASCENECANV2D, 100, GICoat, helmet);
	llama2 = new llamaBuilder(LLAMASCENECANV2D, 150, GICoat, sunglasses, helmet);
	llama3 = new llamaBuilder(LLAMASCENECANV2D, 300, GICoat, pipe);
	llama4 = new llamaBuilder(LLAMASCENECANV2D, 350, normalCoat1, sunglasses, helmet);
	llama5 = new llamaBuilder(LLAMASCENECANV2D, 600, GICoat, mustache, helmet);
	llama6 = new llamaBuilder(LLAMASCENECANV2D, 700, GICoat);
	llama7 = new llamaBuilder(LLAMASCENECANV2D, 800, normalCoat1, sunglasses, helmet);

slide8.addLlamas(llama1, llama2, llama3, llama4, llama5, llama6, llama7);

var slide9 = new llamaSlide(
	"<p>Now that we have crushed  our ene-..<i>friends</i>..-the humans, we live in total harmony.</p>\
	<p>We, of course, meaning us, the llamas, and not you, the slave people.</p>");

	llama1 = new llamaBuilder(LLAMASCENECANV2D, 0, normalCoat1, ballcap);
	llama2 = new llamaBuilder(LLAMASCENECANV2D, 50, normalCoat2);
	llama3 = new llamaBuilder(LLAMASCENECANV2D, 250, jersey, sunglasses);
	llama4 = new llamaBuilder(LLAMASCENECANV2D, 350, normalCoat2, sunglasses, pipe);
	llama5 = new llamaBuilder(LLAMASCENECANV2D, 450, normalCoat3, mustache);
	var llama6 = new llamaBuilder(LLAMASCENECANV2D, 500, fancyCoat, topHat);
	var llama7 = new llamaBuilder(LLAMASCENECANV2D, 650, businessCoat, eyeGlass, briefcase);
	var llama8 = new llamaBuilder(LLAMASCENECANV2D, 750, normalCoat2, sunglasses, ballcap);

slide9.addLlamas(llama1, llama2, llama3, llama4, llama5, llama6, llama7, llama8);

var slide10 = new llamaSlide(
	"<p>Great! So now if you would be so kind as to continue down the Conveyor Belt of Affection into the Testing Chamber of Even <i>More</i> Affection, we can proceed with today's festivities!</p>\
	<p>And remember: you can't spell funlobotomy without \"fun\" shoehorned in there!</p>");

slide10.addLlamas("none");

var slides = [slide0, slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10]; //array for the switch counter functionality
//END slides

/*==========END Llama Slides==========*/