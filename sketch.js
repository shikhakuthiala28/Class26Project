
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;

var mainGround, dustbinSprite,dustbinImage;
var ball;

function preload(){

dustbinImage=loadImage("dustbingreen.png");

}
function setup() {
	createCanvas(1200, 600);

	dustbinSprite=createSprite(900,500);
	dustbinSprite.addImage(dustbinImage);
	dustbinSprite.scale=0.5;

	engine = Engine.create();
	world = engine.world;

	mainGround=new Ground(600,590,1200,20);
	
	ball=new Ball(200,20);
	
	
	Engine.run(engine);
  
}


function draw() {
  
  background("black");  

  fill ("brown");
  mainGround.display();
  
  ball.display();

	drawSprites();
  

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		
		 Body.applyForce(ball.body ,ball.body.position,{x:90 ,y:-85 });
	
	  }
}


