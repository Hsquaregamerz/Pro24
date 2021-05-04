const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)



    box5 = new Box(810,0,70,70);

    pig1 = new PIG(100,0);
    pig2 = new PIG(150,50);
    pig3 = new PIG(200,100);
    pig4 = new PIG(250,150);

    log1 = new LOG(789,260,300,PI/2);
    log2 = new LOG(467,167,300,PI/2);
    log3 = new LOG(760,120,150,PI/7);
    log4 = new LOG(870,120,150,-PI/7);

    bird = new BIRD(200,100);
}

function draw(){
    background("skyblue");

    Engine.update(engine);
    ground.display();


    box5.display();
    pig1.display();
    pig2.display();
    pig3.display();
    pig4.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}