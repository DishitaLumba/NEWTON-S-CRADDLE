const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof,rope1,rope2,rope3,rope4,rope5;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function preload()
{
    
}

function setup() {
    createCanvas(800, 700);

    engine = Engine.create();
    world = engine.world;
    
    roof = createSprite(400,height/4,600,20);
    roof.shapeColor = color(156, 158, 161);

    bobObject1 = new Bob(260,600,70);
    bobObject2 = new Bob(330,600,70);
    bobObject3 = new Bob(400,600,70);
    bobObject4 = new Bob(470,600,70);
	bobObject5 = new Bob(540,600,70);

	// keyPressed();
	
	// rope1 =new Rope(bobObject1.body,roof.body);
	// rope2 =new Rope(bobObject2.body,roof.body);
	// rope3 =new Rope(bobObject3.body,roof.body);
	// rope4 =new Rope(bobObject4.body,roof.body);
	// rope5 =new Rope(bobObject5.body,roof.body);
	

 

    Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(222, 224, 227);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
//   rope1.display();
//   rope2.display();
//   rope3.display();
//   rope4.display();
//   rope5.display();
  
  drawSprites();
 
}

// function keyPressed(){
// 	if (keyCode === UP_ARROW){
// 		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:85,y:-85});
// 	} 

// }



