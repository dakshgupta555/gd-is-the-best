var PLAY=1;
var END=0;
var gameState=PLAY;
var sword,monster;
var fruit,fruit3,fruit1,fruit2,fruit4,fruitGroup;
var score;

function preload(){
swordimage=loadImage('sword.png');

monsterImage=loadAnimation('alien1.png','alien2.png');

fruit1=loadImage("fruit1.png");
fruit2=loadImage("fruit2.png");
fruit3=loadImage("fruit3.png");
fruit4=loadImage("fruit4.png");

knifeSwooshSound=loadSound("knifeSwooshSound.mp3")
}
function setup(){
sword=createSprite(40,200,20,20);
sword.addImage(swordimage);
sword.scale=0.7;

fruitGroup=createGroup();
monsterGroup=createGroup();

score=0;
}

function draw(){
background("white");

if (gameState===PLAY){
sword.x=World.mouseX;
sword.y=World.mouseY;   

if(monsterGroup.isTouching(sword)){
gameState=END;
}

if(fruitGroup.isTouching(sword)){
fruitGroup.destroyEach();
knifeSwooshSound.play();
score=score+1;
}

}
if(gameState===END){
fruitGroup.destroyEach();
monsterGroup.destroyEach();
sword.destroy();
text.Size=20;
text("game is ended",200,200);
}



  
  
  fruits();
monsters();


  
drawSprites();

}

function fruits(){
if(World.frameCount%80===0){
  fruit=createSprite(400,200,20,20);
  fruit.scale=0.2;
  r=Math.round(random(1,4));
  if(r===1){
  fruit.addImage(fruit1);
}else if(r===2){
  fruit.addImage(fruit2);
}else if(r===3){
  fruit.addImage(fruit3);
}else{
  fruit.addImage(fruit4)
}
fruit.y=Math.round(random(50,340));
  
fruit.velocityX=-7;
fruit.setLifetime=100;

fruitGroup.add(fruit);
}
}

function monsters(){

if(World.frameCount%100===0){
monster=createSprite(400,200,20,20);
monster.addAnimation("moving",monsterImage);
monster.scale=0.5;
monster.velocityX=-7;
monster.setLifetime=100;
monsterGroup.add(monster);
}
}