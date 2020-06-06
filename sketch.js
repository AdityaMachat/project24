var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
//function preload()
//{}
var paper,box1,box2,box3;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=createSprite(width/2,600,width,5);

	paper=new Papper(200,200,20);
	
	

	box1=createSprite(400,height-50,200,20);
	 box1.shapeColor="red";
	 box2=createSprite(300,height-90,20,100);
	 box2.shapeColor="red";
	 box3=createSprite(500,height-90,20,100);
	 box3.shapeColor="red";

	Engine.run(engine);
  
}


function draw() {

  background(100);
  Engine.update(engine);
  paper.display();
  drawSprites();
 
}



