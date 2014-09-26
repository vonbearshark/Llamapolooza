
/*==========BEGIN Llama Builder Class==========*/

//creates individual llamas
function llamaBuilder ()
{
	//first set the llama's body
	this.baseSource = llamaBase.getSource();

	this.xCoord = arguments[1];

	var height = IMAGEHEIGHT;
	var width = IMAGEWIDTH;

	this.canv = arguments[0]; //which canvas: either drLlama or llamaScene

	//creates array with source paths to be passed in to the attributes loop
	var args = [];

	for (var i = 2; i < arguments.length; i++)
	{
		args.push(arguments[i].getSource());
	}
	//

	//prints both the base and attributes
	this.printLlama = function()
	{
		var baseImage = new Image();

		baseImage.onload = function()
		{
			this.canv.drawImage(baseImage, this.xCoord, YCOORD, width, height);
		};
		//necessary for scope of anon function
		baseImage.canv = this.canv;
		baseImage.xCoord = this.xCoord;
		//

		baseImage.src = this.baseSource;

		for(i = 0; i < args.length; ++i)
		{
			var attImage = new Image();

  			attImage.onload = function()
  			{
    			this.canv.drawImage(this, this.xCoord, YCOORD, width, height);
  			};
  			//necessary for scope of anon function
  			attImage.canv = this.canv;
  			attImage.xCoord = this.xCoord;
  			//

  			attImage.src = args[i];
		}
	};
	//
	this.retCanv = function()
	{
		return this.canv;
	}


	//movement functionality (specifcally, for the drLlama object)
	this.getXCoord = function()
	{
		return this.xCoord
	}
	this.getWidth = function()
	{
		return width;
	}

	this.moveLeft = function()
	{
		return this.xCoord -= 10;
	};
	this.moveRight = function()
	{
		return this.xCoord += 10;
	};
	this.moveCenter = function()
	{
		return this.xCoord = (CANVASWIDTH/2) - (width/2);
	};
	//
}

/*==========END Llama Builder Class==========*/