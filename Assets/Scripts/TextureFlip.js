#pragma strict

var X : float;

function Start () {
	X = transform.localScale.x;
}

function Update () {
	if (Input.GetKey("a")){
		print("a is pressed");
		transform.localScale.x = X;
	} else if(Input.GetKey("d")){
		print("d is pressed");
		transform.localScale.x = -X;
	}
}
