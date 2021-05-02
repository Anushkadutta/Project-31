 const Engine = Matter.Engine
 const World = Matter.World
 const Events = Matter.Events
 const Bodies = Matter.Bodies

var engine,world; 
var particles = [];
var plinkos=[];
var rows=[];
var ground;
var rows;


var rowsHeight = 300;

function setup() {

  
  createCanvas(500,800);
  
  engine = Engine.create(); 
  world = engine.world;
  ground = new Ground(240,800,480,10);

  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 50))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,100))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,150))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,200))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,250))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,300))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,350))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,400))
  }
  for(var k = 0; k <=width; k = k+80){
    rows.push(new Rows(k, height-rowsHeight/2, 10, rowsHeight));
  }
}

function draw() {
  background(225);
  Engine.update(engine);

  if(frameCount % 60 === 0){
    //particle = new Particle(random(130, 400), 0, 7, random(0, 360));
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  
 
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

 
  for(var k = 0; k < rows.length;k++){
    rows[k].display();
 }


  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }


//rows.display();
 ground.display();

  drawSprites();
}