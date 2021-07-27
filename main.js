// Create canvas variable

var canvas = new fabric.Canvas('myCanvas');

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
// to upload images
	fabric.Image.fromURL(get_image, function(img){
	block_image_object = img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({

	top:block_y,
	left:block_x
	});
	canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		// upload red ranger
		new_image('rr1.png');
		console.log("r is pressed-Red ranger uploading-Agni")
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		// upload green ranger
		new_image('gr.png')
		console.log("g is pressed-green ranger uploading-Juvenile")
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
		new_image('yr.png')
		console.log("y is pressed-yellow ranger uploading-Happy")
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
		new_image('pr.png')
		console.log("p is pressed-pink ranger uploading-Amity")
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	// upload blue ranger
	new_image('br.png')
	console.log("b is pressed-blue ranger uploading-Aman")
	}
	
}