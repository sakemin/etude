var img = [];
var x,y;

var img = [];
var tic;
var persp;
var step;

function setup(){
  frameRate(10);
  createCanvas(window.innerWidth,window.innerHeight);
  background(200);
  scale(2.0,2,0);

  x=0;
  y=0;

  tic = 0;
  persp = 3;
  step = 0;

  for(var i = 0; i < 4; i++){
    img[i]=[];
  }
  img [0][0] = loadImage("assets/ui.png");
  img [0][1] = loadImage("assets/u1.png");
  img [0][2] = loadImage("assets/ui.png");
  img [0][3] = loadImage("assets/u2.png");
  img [1][0] = loadImage("assets/ri.png");
  img [1][1] = loadImage("assets/r1.png");
  img [1][2] = loadImage("assets/ri.png");
  img [1][3] = loadImage("assets/r2.png");
  img [2][0] = loadImage("assets/di.png");
  img [2][1] = loadImage("assets/d1.png");
  img [2][2] = loadImage("assets/di.png");
  img [2][3] = loadImage("assets/d2.png");
  img [3][0] = loadImage("assets/li.png");
  img [3][1] = loadImage("assets/l1.png");
  img [3][2] = loadImage("assets/li.png");
  img [3][3] = loadImage("assets/l2.png");
}


function draw(){
  background(200);
  if(mouseIsPressed == true){
    if(step == 0){
      if(mouseX>x && abs(mouseX-x)>abs(mouseY-y)){
        step=8;
        persp = 1;
      }
      else if(mouseY<y && abs(mouseX-x)<abs(mouseY-y)){
        step=8;
        persp = 0;
      }
      else if(mouseY>y && abs(mouseX-x)<abs(mouseY-y)){
        step=8;
        persp = 2;
      }
      else if(mouseX<x && abs(mouseX-x)>abs(mouseY-y)){
        step=8;
        persp = 3;
      }
    }
    else{
      if(step == 0){
        tic = 0;
      }
    }
  }

  if(step > 0){
    step--;
    switch (persp) {
      case 0:
        y-=2;
          if(y<16){y=16;}
        break;
      case 1:
        x+=2;
          if(x>288){x=288;}
        break;
      case 2:
        y+=2;
        if(y>288){y=288;}
        break;
      case 3:
        x-=2;
          if(x<16){x=16;}
        break;
    }
    tic++;
  }

  image(img[persp][tic%3],x,y);
  console.log(step);
}
