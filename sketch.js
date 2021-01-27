var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0,gameState = "play";
var engine,world,ground,count = 5;

function setup() {
  createCanvas(1000, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 100) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(25)
  fill("dgds")
  // stroke(5)
 text("Score : "+score,20,30);
//  text("Chance : "+count,800,30)
 text("500          500         100        100          50          50          200        200        400        400",25,520)
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  //  if(frameCount%60===0){
  //    particle.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //   //  score++;
  //  }
 
  // for (var j = 0; j < particle.length; j++) {
   
  //    particle[j].display();
  //  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
// var particlepos = particle.body.position;
   // its for score
   if(particle!=null)
   {
     particle.display();

     if(particle.body.position.y>760)
     {
       if(particle.body.position.x<200 && particle.body.position.x>0)
       {
         score=score+500;
         //particle=null;
         

       }
      
  
       if(particle.body.position.x > 200 && particle.body.position.x < 400)
       {
          score=score+100;
         // particle=null;

       }

       if(particle.body.position.x > 400 && particle.body.position.x < 600)
       {
         score=score+50;
        // particle=null;

       }

       if(particle.body.position.x > 600 && particle.body.position.x < 800)
       {
          score=score+200;
         // particle=null;

       }

       if(particle.body.position.x > 800 && particle.body.position.x < 1000)
       {
          score=score+400;
         // particle=null;

       }
       particle=null;
 if(count === 0)gameState = "end";
     }
   }
  

   if(gameState === "end")
   {
     push();
     strokeWeight(1);
     stroke("red")
     textSize(60);
     fill("gold")
     text("Score : " + score,200,250);
     textSize(50);
     stroke("yellow")
     text("Press Space Key to Restart",100,340)
     pop();
   }
   


}
function mousePressed(){
  if(gameState === "play"){
  count = count - 1
  particle = new Particle(mouseX , 50,10,10);
  }
}

function keyPressed(){
  if(keyCode === 32)
  {
    score=0;
    count = 5;
    gameState = "play";
  }

}