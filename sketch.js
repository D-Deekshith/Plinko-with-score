const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;

var up,right,left,down;
var ground;

var particles= [];
var plinkos= [];
var divisions= [];

var divisionHeight = 300;
var divisionsVar;

var gameState = "play";

var turn = 5;
var score = 0;

var particle;

var gameOver;
var gameOverImg;

var stopper;

function preload(){
  gameOverImg = loadAnimation('sprites/GAME1-1.JPG','sprites/GAME2-2.JPG','sprites/GAME3-3.JPG','sprites/GAME4-4.JPG')
}

function setup() {
  createCanvas(830,800);
  engine = Engine.create();
  world = engine.world;

  gameOver = createSprite(width/2,(height/2)+30,1,1);
  gameOver.addAnimation("GAMEOVER",gameOverImg);
  gameOver.visible = false;

  //creating rightEdge
  right = new Edges(width-5, height/2, 10, height);
 
  //creating rightEdge
  up = new Edges(width/2,5,width,10);
 
  //creating rightEdge
  left = new Edges(5,height/2,10,height);
  
  //creating rightEdge
  down = new Edges(width/2,height-5,width,10);
  
  //creating ground
  ground = new Ground(415,795,810,10);

    //creating plinkos first layer
    for (var j = 50; j <=width; j+=50){ 
        plinkos.push(new Plinko(j,75)); 
      }

    //creating plinkos second layer
    for (var j = 50/2; j <=width-10; j+=50) { 
      plinkos.push(new Plinko(j,175)); 
      }

    //creating plinkos third layer
    for (var j = 75-25; j <=width; j+=50) { 
      plinkos.push(new Plinko(j,275)); 
      }

    //creating plinkos forth layer
    for (var j = 50-25; j <=width-10; j+=50) { 
        plinkos.push(new Plinko(j,375)); 
      }

    //creating divisions
    for (var k =15; k <=width; k += 80) {
        divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
      }
    }

function draw() {
  background(0);
  Engine.update(engine);
 
  drawSprites();

  textFont("Times New Roman");
  textSize(30);
  fill(255);

  text("Score: "+score,50,50);

  text("Turns: "+turn,700,50);

  text("500",35,550);
  text("500",115,550);
  text("500",195,550);
  text("500",275,550);

  text("100",355,550);
  text("100",435,550);
  text("100",515,550);

  text("200",595,550);
  text("200",675,550);
  text("200",755,550);
  
  //displaying plinkos
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display(); 
    }

  //displaying divisions
  for (var s = 0; s < divisions.length; s++) { 
    divisions[s].display(); 
  }

  //particles will fall with same distance
 

  //displaying particles 
  //for (var j = 0; j < particles.length; j++) {
    //  particles[j].display(); 
      //} 

  //displaying divisions
  for (var k = 0; k < divisions.length; k++) { 
      divisions[k].display(); 
    }

    if(particle!=null){
      particle.display();

      if(particle.body.position.y>760){
        if(particle.body.position.x<90 && particle.body.position.x>20){
          score = score + 500;
          turn = turn-1;
          particle = null;
         }
        else if(particle.body.position.y>760){
          if(particle.body.position.x<170 && particle.body.position.x>100){
            score = score + 500;
            turn = turn-1;
            particle = null;
           }
        else if(particle.body.position.y>760){
          if(particle.body.position.x<250 && particle.body.position.x>180){
            score = score + 500;
            turn = turn-1;
            particle = null;
          }
        else if(particle.body.position.y>760){
          if(particle.body.position.x<330 && particle.body.position.x>260){
            score = score + 500;
            turn = turn-1;
            particle = null;
          }
        else if(particle.body.position.y>760){
          if(particle.body.position.x<410 && particle.body.position.x>340){
            score = score + 100;
            turn = turn-1;
            particle = null;
          }
        else if(particle.body.position.y>760){
          if(particle.body.position.x<490 && particle.body.position.x>420){
            score = score + 100;
            turn = turn-1;
            particle = null;
          }
        else if(particle.body.position.y>760){
          if(particle.body.position.x<570 && particle.body.position.x>500){
            score = score + 100;
            turn = turn-1;
            particle = null;
          }
        else if(particle.body.position.y>760){
          if(particle.body.position.x<650 && particle.body.position.x>580){
            score = score + 200;
            turn = turn-1;
            particle = null;
          }
        else if(particle.body.position.y>760){
          if(particle.body.position.x<730 && particle.body.position.x>660){
            score = score + 200;
            turn = turn-1;
            particle = null;
          }
        else if(particle.body.position.y>760){
          if(particle.body.position.x<810 && particle.body.position.x>740){
            score = score + 200;
            turn = turn-1;
            particle = null;
          }
      }
        }
      }
    }
  }
}
        }
      }
    }
    
    }

    if(turn !== 5 && turn !== 3 && turn !== 2 && turn !== 4 && turn !== 1){
      gameOver.visible = true;
      stopper = new  Ground(415,11,830,1);
      stopper.visible = false;
    }
  }

  // displaying ground
  ground.display();

  //displaying edges
  right.display();
  left.display();
  up.display();
  down.display();
}

function mouseClicked(){
  if(gameState!=="end"){
 
    particle = new Particle(mouseX,10,10,10)
  }
}