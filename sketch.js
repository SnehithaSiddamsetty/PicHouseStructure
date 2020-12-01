const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(750,350,70,70);
    box2 = new Box(950,350,70,70);
    pig1 = new Pig(850,350);
    log1 = new Log(850,300,300,30,PI)
    box3 = new Box(750,250,70,70);
    box2 = new Box(950,300,70,70);
    pig1 = new Pig(850,320);
    log1 = new Log(850,310,300,30,PI)
    ground = new Ground(600,height,1200,20)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    ground.display();

}



