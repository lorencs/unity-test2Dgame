#pragma strict

var moving : boolean;
var direction : int;
var jumping : boolean;

var X : float;
var AT : AnimateTexture;

function Start () {
	direction = -1;
	X = transform.localScale.x;
	
}

function Update () {
	//handle input
	if (Input.GetKey("a") || Input.GetKey("left")){
		moving = true;
		direction = -1;
		transform.localScale.x = X;
	} else if(Input.GetKey("d") || Input.GetKey("right")){
		moving = true;
		direction = 1;
		transform.localScale.x = -X;
	} else {
		moving = false;
	}
	
	AT = GetComponent(AnimateTexture);
	//handle animation/sprites
	if (moving)
		AT.rowNumber = 1;
	else
		AT.rowNumber = 0;	
}