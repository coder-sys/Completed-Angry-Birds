const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const mouse = Matter.Mouse
var engine, world;
var box1, pig1,pig3;
var platform,log;
var bird, slingshot;
var pigx;
var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    pigx = new Pig(800,230)
    log1 = new Log(810,260,300, PI/2);
    log = new Apig(true)
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(996, 226);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    canvasmouse = mouse.create(canvas.elt);
    

    

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){        
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    log.display();
    box3.display();
    box4.display();
    pig3.display();
    log3.display();
    pigx.display();
    SB()
    box5.display();
    log4.display();
    log5.display();


    bird.display();
    platform.display();
    slingshot.display();
}
function mouseDragged(){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}
function keyPressed(){
    if(keyCode === 32){
       
       Matter.Body.setPosition(bird.body,{x:200, y:50});
       slingshot.attach(bird.body);
    }
    if(keyCode === 65){
        bird.disappear()
    }
}
async function SB(){
    let response = await fetch('http://worldtimeapi.org/api/timezone/America/Los_Angeles')
    let response_json = await response.json()
    let hr = response_json.datetime.slice(11,13)
    if(hr > 18){
        background(0)
    }
    else if(hr < 18){
        background(266)
    }
    
    
}