
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var crumpet;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 crumpet= new Crumpets(100,20,10,10);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 crumpet=ellipseMode("oval");


 
}



