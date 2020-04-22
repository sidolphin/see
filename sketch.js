const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var drop;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  drop = new Drop(200,200,70,70);
}

function draw() {
  background(0); 

  drawSprites();
}