var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }

  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
 //attempting to create a slider 
 slider = createSlider(0.5, 120, 30,);
 slider.position(10, 10);
 slider.style('width', '80px')
    
}
 


function draw() {
  
  background("black");
  fill("red")
  textSize(20)
  text("slider to control particle spawn speed (the lower the faster){default : 1 part./sec}" , 100,30)
  text( "[the lowest is 240x faster than default, highest is 4x slower]", 120, 50)
  
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
var frameC = slider.value();
  //create the particles using frameCount
if(frameCount % frameC === 0){
  particles.push(new Particles(random(0,400),5))
}
console.log(frameC)
fill(0,117,255)
text(Math.round(frameC/30) + "secs/ part.", 10, 40)
  //display the particles 
for(var k = 0; k < particles.length; k++){
  particles[k].display();
}

}