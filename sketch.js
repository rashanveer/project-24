
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,dustbin1,paper1;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1 = new Ground(width/2,670,width,20)
	dustbin1 = new dustbin(1200,650)
	paper1 = new Paper(200,450,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  dustbin1.display();
  paper1.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})

	}
}


