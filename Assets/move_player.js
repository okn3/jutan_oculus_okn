

#pragma strict

var spd:float = 3;
var i:float;
function Start () {

}

function Update () {
  transform.Translate(0,0,1); //直進

  if (Input.GetKey("right")){
    transform.Rotate(0,1,-3);
  }else if(Input.GetKey("left")){
    transform.Rotate(0,-1,3);
  }

  if (Input.GetKey("up")) {
    transform.position.y += spd*100;
    transform.Rotate(-5,0,0);
  }
  else if (Input.GetKey("down")) {
    transform.position.y -= spd*100;
    transform.Rotate(15,0,0);
  }
}


// 前回
  // transform.position.x += spd*30; //直進
  // // transform.right.x += spd*100;

  // if (Input.GetKey("right")) {
  //   transform.position.z -= spd*100;
  //   // transform.rotation.z += spd*10;
  // }
  // else if (Input.GetKey("left")) {
  //   transform.position.z += spd*100;
  //   // transform.rotation.z -= spd*10;
  // }


  // if (Input.GetKey("up")) {
  //   transform.position.y += spd*100;
  // }
  // else if (Input.GetKey("down")) {
  //   transform.position.y -= spd*100;
  // }

