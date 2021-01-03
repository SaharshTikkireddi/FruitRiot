var PLAY=1;
var END=0;
var gameState=1;
var swordImage;
var fruit1,fruit2,fruit3,fruit4;
var fruit1Image,fruit2Image,fruit3Image,fruitImage
var monster
var World
var fruitGroup
function preload(){

  swordImage= loadImage("sword.png");
  monsterImage= loadImage("alien1.png");
   monsterImage= loadImage("alien2.png")
  fruit1Image=loadImage("fruit1.png");
  fruit2Image=loadImage("fruit2.png");
  fruit3Image=loadImage("fruit3.png");
  fruit4Image=loadImage("fruit4.png");
}

function draw(){

  background("lightblue");
  
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
sword.scale=0.7;
   
  
  
  if(gameState === PLAY){
    sword.y=World.mouseY;
    sword.x=World.mouseX;
  }
  
  drawSprites();
}
 function fruits(){
if(World.frameCount%80===0){ 
  fruit1=createSprite(40,200,20,20);
   sword.addImage(fruit1==Image);
   fruit1.y=Math.round(random(50,340));
  fruit1.velocityX=-7;
  fruit1.setLifetime=100;
  
  
   fruit2.y=Math.round(random(50,340));
  
  fruit2.velocityX=-7;
  fruit2.setLifetime=100;
  
  
   fruit3.y=Math.round(random(50,340));
  
  fruit3.velocityX=-7;
  fruit3.setLifetime=100;
  
   fruit4.y=Math.round(random(50,340));
  
  fruit4.velocityX=-7;
  fruit4.setLifetime=100;
  
  
}
 }