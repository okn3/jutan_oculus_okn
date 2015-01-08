#pragma strict
var vy :float=0;
var rotate_rate :float=0.5;
//0.0055*90=0.5
function Start () {

}

function Update () {
	vy=Input.GetAxis("Vertical");
	transform.Translate(0, vy*0.5,0.5); //動作版

//上下移動で視点変更
	 //  if (Input.GetKey("up")) {
  //   // transform.position.y += spd*100;
  //   transform.Rotate(-5,0,0);
  // }
  // else if (Input.GetKey("down")) {
  //   // transform.position.y -= spd*100;
  //   transform.Rotate(15,0,0);
  // }

	if(Input.GetKey("right")){
	    transform.Rotate(0,rotate_rate,0);
	    if(rotate_rate<1){
			// rotate_rate+=0.0059;
      rotate_rate+=0.05;
		}
	}else if(Input.GetKey("left")){
		transform.Rotate(0,-rotate_rate,0);
		if(rotate_rate<1){
			// rotate_rate+=0.0059;
      rotate_rate+=0.05;
		}
	}
	if(Input.GetKeyUp("right")||Input.GetKeyUp("left")){
		rotate_rate = 0.5;
	}



}