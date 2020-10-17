//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground ;
var box;

function setup() {
  createCanvas(1200,600);


  engine = Engine.create();
  world = engine.world;

  box = [];
  ground = new Ground(600,550,1200,10);
  for(var i = 600;i<1000;i=i+50){
    for(var t = 100;t<500;t=t+20){
      box.push(new Box(i,t));
    }
  }

  ball = new Ball();
  chain = new Chain(ball.body,{x:350,y:100});
  roof = new Ground(350,100,100,10);
  console.log(box);

  

}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  for(var j=0;j<box.length;j++){
    box[j].display();
  }
  ball.display();
  chain.display();
  roof.display();


  
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}