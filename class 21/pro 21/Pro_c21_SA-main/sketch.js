//Name Spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// Declare all the variables
var ground;
var left;
var right;
var top_wall;
var ball;
var btn1;
var btn2;
var btn3;
var dustbin, dustbinImg;
var net1;
var net2;



//Create function setup()
function setup() {
	createCanvas(800, 650);

  console.log("CLICK RIGHT ARROW TO FORCE BALL TO RIGHTside");
  console.log("CLICK LEFT ARROW TO FORCE BALL TO LEFTside");
  console.log("CLICK UP ARROW TO FORCE BALL TO UPside");

  //Create dustbin sprite
  dustbin = createImg('dustbin.png');
  dustbin.position(600,505);
  dustbin.size(100,100);

// Create Engine and World
	engine = Engine.create();
	world = engine.world;

// Create ball option
  var ball_options={
    isStatic:false,
    restitution: 0.95,
    friction:0,
    density:0.02,
   }

  // Create BUTTONs to force the ball
  btn1 = createImg('right.png');
  btn1.position(600,70);
  btn1.size(50,50);
  btn1.mouseClicked(hForce);

  btn3 = createImg('left_arrow.png');
  btn3.position(400,70);
  btn3.size(50,50);
  btn3.mouseClicked(hForceLeft);

  
  btn2 = createImg('up.png');
  btn2.position(222,70);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  
  //Create Boundry with the help of GROUND CLASS
	ground =new Ground(398,620,800,20);
	right =new Ground(790,260,20,700);
	left =new Ground(10,305,20,607);
	top_wall =new Ground(400,10,800,20);

  //Create NET
  net1 =new Ground(720,538,12,140);
  net2 =new Ground(570,538,12,140);

  //Create ball body
  ball = Bodies.circle(200,200,20,ball_options)
  World.add(world,ball)

	//Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS)
  textSize(30);
}

// Create function draw()
function draw() {

rectMode(CENTER);
  background(0);
  
//Display ball body
  ellipse(ball.position.x, ball.position.y, 20)

  //Display ground and net
  ground.show();
  left.show();
  right.show();
  top_wall.show();
  net1.show();
  net2.show();

  push();
  noStroke();
  fill(255, 255, 0)
  
  Engine.update(engine); 
}

//Create funtion hForce()
function hForce() {
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0.8, y:0})
  
}

//Create function hForceLeft()
function hForceLeft() {
  Matter.Body.applyForce(ball,{x:0, y:0},{x:-0.8, y:0})
  
}

//Create function vForce()
function vForce() {
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0, y:-0.8})
  
} 