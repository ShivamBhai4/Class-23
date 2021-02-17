const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
ground = new Ground(200,390,400,20);
box2 = new Box(400,360,50,60);


}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();


}