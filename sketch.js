
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;
  
	ground1 = new Ground(400,590,1200,20);

	box1 = new Dustbin(850,510,20,130);
    box2 = new Dustbin(690,510,20,130);
	box3 = new Dustbin(770,580,135,20);
	
	paperBall = new Paper(100,570,45);

	Engine.run(engine);



}


function draw() {
  rectMode(CENTER);
  background(200);

  
  

 

ground1.display();
box1.display();
box2.display();
box3.display();
paperBall.display();



}

function keyPressed(){
     if(keyCode === UP_ARROW){
		
	Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:90,y:-100})

	 }
}


