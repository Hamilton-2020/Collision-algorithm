var moving, fixed;

function setup() {
  createCanvas(1200,800);
  moving = createSprite(400, 400, 50, 80);
  fixed = createSprite(600, 400, 80, 50);

  moving.debug = true;
  fixed.debug = true;

  moving.velocityX = 5;
  fixed.velocityX = -5;
}

function draw() {
  background(0);  

  //moving.x = mouseX;
  //moving.y = mouseY;

  //COLLISION ALGORITHM
  if(fixed.x - moving.x <= moving.width/2 + fixed.width/2
    && moving.x - fixed.x <= moving.width/2 + fixed.width/2
    && fixed.y - moving.y <= moving.height/2 + fixed.height/2
    && moving.y - fixed.y <= moving.height/2 + fixed.height/2){
    moving.shapeColor = "red";
    fixed.shapeColor = "red";
  }
  else{
    moving.shapeColor = "green";
    fixed.shapeColor = "green";
  }

  if(fixed.x - moving.x <= moving.width/2 + fixed.width/2
    && moving.x - fixed.x <= moving.width/2 + fixed.width/2){
    
     moving.velocityX = moving.velocityX*(-1);
     fixed.velocityX = fixed.velocityX*(-1);
    }

    if( fixed.y - moving.y <= moving.height/2 + fixed.height/2
      && moving.y - fixed.y <= moving.height/2 + fixed.height/2){
       moving.velocityY = moving.velocityY*(-1);
       fixed.velocityY = fixed.velocityY*(-1);
    }
    
  
 

  drawSprites();
}

/*
ALGORITHMS
-logic to solve any problems
Computer Algorithms - instructions to the computer to solve a problem

Pre-defined Algorithm:
1. Detecting Collision
2. Bounce Off Algorithm
*/