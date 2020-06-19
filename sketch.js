
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(2000, 700);
	engine = Engine.create();
	world = engine.world;
	
	paper=new Papper(200,height-60,60);
	ground=new Ground (width/2,height-50,width,5);
	box1=new Ground (1000,height-50,200,10);
	box2= new Ground(1100,height-150,10,200);
	box3= new Ground(900,height-150,10,200);
	box4=new dustbin(1000,550,200,190);
	

	Engine.run(engine); 
}
  

function draw() {
  background(200);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  paper.display();
  ground.display(); 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-105});
		

	}
}




