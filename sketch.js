//Making variables
var speed,speed2,speed3, weight,weight2,weight3;
var wall,wall2,wall3, bullet,bullet2,bullet3;
var thickness,thickness2,thickness3,height,height2,height3;
var bulletRightEdge,bulletRightEdge2,bulletRightEdge3;
var coolsound;

function preload(){
  coolsound = loadSound("Yep-Any-Help_.wav");
}

function setup() {
  createCanvas(1600,950);
  
  coolsound.loop();

  speed = random(55,90);
  weight = random(400,1500);
  speed2 = random(55,90);
  weight2 = random(400,1500);
  speed3 = random(55,90);
  weight3 = random(400,1500);

  thickness = random(22,83);
  height = 300;
  thickness2 = random(22,83);
  height2 = 300;
  thickness3 = random(22,83);
  height3 = 300;

  bullet = createSprite(10,160,40,10);
  bullet.shapeColor = "cyan";
  bullet2 = createSprite(10,500,40,10);
  bullet2.shapeColor = "cyan";4
  bullet3 = createSprite(10,850,40,10);
  bullet3.shapeColor = "cyan";

  wall = createSprite(1500,150,thickness,height/2);
  wall.shapeColor = "white";
  wall2 = createSprite(1500,500,thickness2,height/2);
  wall2.shapeColor = "white";
  wall3 = createSprite(1500,850,thickness3,height/2);
  wall3.shapeColor = "white";
  
  bullet.velocityX = speed;
  bullet2.velocityX = speed;
  bullet3.velocityX = speed;
  }

function draw() {
  background("black");  

  fill("white")
  rect(00,300,1600,20)
  rect(00,675,1600,20)

  if (hasCollided(bullet, wall)){
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if(damage > 10){
     wall.shapeColor = "red";
    }
    if (damage < 7){
      wall.shapeColor = rgb(37, 245, 0);
    }
    if(damage>7 && damage <10){
      wall.shapeColor = rgb(225, 245, 0)
    }
  }

  if (hasCollided(bullet2, wall2)){
    bullet2.velocityX = 0;

    var damage = 0.5 * weight2 * speed2 * speed2 / (thickness2 * thickness2 * thickness2);
    if(damage > 10){
      wall2.shapeColor = "red";
     }
     if (damage < 7){
       wall2.shapeColor = rgb(37, 245, 0);
     }
     if(damage>7 && damage <10){
       wall2.shapeColor = rgb(225, 245, 0)
     }
  }

  if (hasCollided(bullet3, wall3)){
    bullet3.velocityX = 0;

    var damage = 0.5 * weight3 * speed3 * speed3 / (thickness3 * thickness3 * thickness3);
    if(damage > 10){
      wall3.shapeColor = "red";
     }
     if (damage < 7){
       wall3.shapeColor = rgb(37, 245, 0);
     }
     if(damage>7 && damage <10){
       wall3.shapeColor = rgb(225, 245, 0)
     }
  }
  

  drawSprites();
}

function hasCollided(lbullet, lwall) {

   bulletRightEdge = lbullet.x + lbullet.width;
   wallLeftEdge = lwall.x;

   if (bulletRightEdge >= wallLeftEdge){
     return true;
   }
  return false;
}


