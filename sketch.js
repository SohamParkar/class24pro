const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world , backgroungImage;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20)
    leftBox = new Box(700,350,20,70)
    downBox = new Box(760,390,150,20)
    rightBox = new Box(820,350,20,70)
    paper = new Ball(100,370,20,20)

}

function draw(){
    background('white');
    Engine.update(engine);

    leftBox.display();
    downBox.display();
    ground.display();
    paper.display()
    rightBox.display();
    
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:21,y:-21})
  }
  
}