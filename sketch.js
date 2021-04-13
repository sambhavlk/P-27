
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

	roof = new Roof(400, 100, 500, 20)

	r1 = new Rope(b1.body, roof.body, 50*2, 0)
	r2 = new Rope(b2.body, roof.body, 50*2, 0)
	r3 = new Rope(b3.body, roof.body, 50*2, 0)
	r4 = new Rope(b4.body, roof.body, 50*2, 0)
	r5 = new Rope(b5.body, roof.body, 50*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	roof.display();

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