var player;
let img;
const lineWidth = 1.5;

const ballColor = (186, 206, 217);
const strokeColor = (186, 206, 217);
const ballSize = 16;

var co

const ball1 = {
    x: 300,
    y: 650,
    size: ballSize,
    speed: 10,
    fillColor: ballColor,
    strokeColor: strokeColor,
    ballStrokeWeight: 1,
} 

const ball2 = {
    x: 300,
    y: 600,
    size: 10,
    speed: 12,
    fillColor: ballColor,
    strokeColor: strokeColor,
    ballStrokeWeight: 2,
} 

const ball3 = {
    x: 300,
    y: 520,
    size: 30,
    speed: 14,
    fillColor: ballColor,
    strokeColor: strokeColor,
    ballStrokeWeight: 1,
} 

const ball4 = {
    x: 300,
    y: 520,
    size: ballSize,
    speed: 16,
    fillColor: ballColor,
    strokeColor: strokeColor,
    ballStrokeWeight: 1,
} 

const ball5 = {
    x: 300,
    y: 430,
    size: 40,
    speed: 18,
    fillColor: ballColor,
    strokeColor: strokeColor,
    ballStrokeWeight: 1,
} 

const ball6 = {
    x: 300,
    y: 375,
    size: ballSize,
    speed: 6,
    fillColor: ballColor,
    strokeColor: strokeColor,
    ballStrokeWeight: 1,
} 

const ball7 = {
    x: 300,
    y: 300,
    size: 6,
    speed: 22,
    fillColor: ballColor,
    strokeColor: strokeColor,
    ballStrokeWeight: 1,
}

const ball8 = {
    x: 300,
    y: 300,
    size: ballSize,
    speed: 24,
    fillColor: ballColor,
    strokeColor: strokeColor,
    ballStrokeWeight: 1,
}

const ball9 = {
    x: 300,
    y: 200,
    size: 30,
    speed: 27,
    fillColor: ballColor,
    strokeColor: strokeColor,
    ballStrokeWeight: 1,
}

const ball10 = {
    x: 300,
    y: 200,
    size: ballSize,
    speed: 26,
    fillColor: ballColor,
    strokeColor: strokeColor,
    ballStrokeWeight: 1,
}

const balls = [ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9,ball10];

const leftEdge = {
    x1: 50,
    y1: 50,
    x2: 50,
    y2: 750,
    color: (186, 206, 217),
    width: lineWidth,
}

const rightEdge = {
    x1: 550,
    y1: 750,
    x2: 550,
    y2: 50,
    color: (186, 206, 217),
    width: lineWidth,
}

const topEdge = {
    x1: 50,
    y1: 50,
    x2: 550,
    y2: 50,
    color: (186, 206, 217),
    width: lineWidth,
}

const bottomEdge = {
    x1: 550,
    y1: 750,
    x2: 50,
    y2: 750,
    color: (186, 206, 217),
    width: lineWidth,

}



function setup() {
  createCanvas(600, 800);
  player = new Player();
  img = loadImage('outro/ktoutro.JPEG');
  co = new clockOut();
  angleMode(DEGREES);

  clock = new Clock();

}

function draw() {
  if (keyIsDown(UP_ARROW)) {
    player.y -= 4;
  } else if (keyIsDown(DOWN_ARROW)) {
    player.y += 4;
  } else if (keyIsDown(RIGHT_ARROW)) {
    player.x += 4; 
  } else if (keyIsDown(LEFT_ARROW)) {
    player.x -= 4; 
  }
  
  
  background(8, 33, 130, 50);
  player.update();
  player.show();
  co.show();
  clockoutcollision(co);
  
  
  balls.forEach((ball) => {
     updateBall(ball);
    displayBall(ball);
    collision(ball, player);
   })

  
    drawLine(leftEdge);
    drawLine(rightEdge);
    drawLine(topEdge);
    drawLine(bottomEdge);
   
  
 
    translate(200, 200);
  rotate(-90);
  translate(84,100);
  clock.update();
  clock.display();
    
}


class Player {
  constructor() {
    this.x = 295;
    this.y = 720;
    //this.x = 195;
    //this.y = 100;
    this.xspeed = 0;
    this.yspeed = 0;


    this.update = function () {
      this.x = this.x + this.xspeed;
      this.y = this.y + this.yspeed;

      this.x = constrain(this.x, 50, 542);
      this.y = constrain(this.y, 50, 742);
    };

    this.show = function () {
      fill(173, 53, 2,);
      noStroke();
      rect(this.x, this.y, 7, 7);

    }

  }
}

class clockOut {
  constructor() {
    this.x = 300;
    this.y = 116;

    this.show = function() {
      fill(255, 255, 255, 15);
      noStroke();
      circle(this.x, this.y, 100);
    }
    
    //this.draw = function() {
      //Image(img, 100, 100);
    //}

  }
}

function clockoutcollision(){
  if(player.x >= co.x - 50 && player.x <= co.x + 50 && player.y >= co.y - 50 && player.y <= co.y + 50){
   Image(img, 20, 20);
    // text('word', 10, 30);
    //clockOut.draw(); 
    
  }
}


function updateBall(ball){
    console.log(ball.x);
    if(ball.x + ball.size/2 > rightEdge.x1 ){
        ball.speed *= -1;
        activateLine(rightEdge);
    } else if(ball.x - ball.size/2 < leftEdge.x1 ){
        ball.speed *= -1;
        activateLine(leftEdge);
    }
    ball.x+= ball.speed;

}
 

//this works now yay!!!!!!!
function collision(ball, updatePlayer, Player) {
  console.log(ball.x);
  console.log(player.x);
  console.log(player.y);
  console.log(ball.y)
  if(player.x >= ball.x - ball.size && player.x <= ball.x + ball.size && player.y >= ball.y - ball.size && player.y <= ball.y + ball.size){
  player.x = 295;
  player.y = 720;
  }
}


const displayBall = ({x, y, size, strokeColor, fillColor, ballStrokeWeight}) => {
        stroke(strokeColor);
        fill(fillColor);
        strokeWeight(ballStrokeWeight);
        ellipse(x, y, size);
}

function drawLine({x1, y1, x2, y2, color, width}){
    stroke(color);
    strokeWeight(width);
    line(x1, y1, x2, y2);
}



function activateLine(line){

    setTimeout(() => resetLines(line), 500);
}


function resetLines(line){
}