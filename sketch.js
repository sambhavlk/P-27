
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	b1 = new Bob(200, 400, 50)
	b2 = new Bob(225, 400, 50)
	b3 = new Bob(250, 400, 50)
	b4 = new Bob(275, 400, 50)
	b5 = new Bob(300, 400, 50)

	roofObject = new Roof(400, 100, 500, 20)

	r1=new rope(b1.body,roofObject.body,-80, 0)
	r2=new rope(b2.body,roofObject.body,-40, 0)
	r3=new rope(b3.body,roofObject.body,0, 0)
	r4=new rope(b4.body,roofObject.body,40, 0)
	r5=new rope(b5.body,roofObject.body,80, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  roofObject.display();

	b1.display();
	b2.display();
	b3.display();
	b4.display();
	b5.display();

	r1.display();
	r2.display();
	r3.display();
	r4.display();
	r5.display();

	drawSprites();

}

function keyPressed(){

	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(b1.body, b1.body.position, {x:-50, y:-50})
	}
}
