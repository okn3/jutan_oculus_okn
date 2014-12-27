#pragma strict
var vy :float=0;
var rotate_rate :float=0.5;


var speed = 1.0; //ios
  var dir : Vector3 = Vector3.zero;


//0.0055*90=0.5
function Start () {

}

function Update () {
  vy=Input.GetAxis("Vertical");
  transform.Translate(0, vy*0.5,0.5);

//ios
  var dir : Vector3 = Vector3.zero;

  // デバイスが地面に平行と仮定
  // し、ホームボタンが右側

  // デバイスの加速度軸をゲームの座標にあわせて再マッピング:
  //  1) デバイスの XY 平面をXZ平面にマッピング
  //  2) Y軸の周りに90度回転
  dir.x = -Input.acceleration.y;
  dir.z = Input.acceleration.x;

  // 球の単位に加速度ベクトルの値を Clamp
  if (dir.sqrMagnitude > 1)
    dir.Normalize();

  // 10メートル毎秒で移動（1フレームあたりでなく）
  // dir *= Time.deltaTime;

  // 加速度で移動
  // transform.Translate (dir * speed);
    if(Input.acceleration.x > 0.3){
      transform.Rotate(0,rotate_rate,0);
      if(rotate_rate<1){
      // rotate_rate+=0.0059;
      rotate_rate+=0.05;
    }
  }else if(Input.acceleration.x < -0.3){
    transform.Rotate(0,-rotate_rate,0);
    if(rotate_rate<1){
      // rotate_rate+=0.0059;
      rotate_rate+=0.05;
    }
  }

  // 上下移動で視点変更
    if (Input.acceleration.z < -0.5) {
    transform.position.y -= speed*0.03;
    // transform.Rotate(-3,0,0);
  }
  else if (Input.acceleration.z > 0.10) {
    transform.position.y += speed*0.03;
    // transform.Rotate(10,0,0);
  }


//上下移動で視点変更
   //  if (Input.GetKey("up")) {
  //   // transform.position.y += spd*100;
  //   transform.Rotate(-5,0,0);
  // }
  // else if (Input.GetKey("down")) {
  //   // transform.position.y -= spd*100;
  //   transform.Rotate(15,0,0);
  // }

//キーボード用
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

