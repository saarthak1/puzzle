var fb1,fb2,fb3,fb4,fb5,fb6,fb7,fb8,fb9;
function setup() {
  createCanvas(1200,1200);
 fb1= createSprite(450, 200, 100, 100);
 fb1.shapeColor="red";
 fb2= createSprite(555, 200, 100, 100);
 fb2.shapeColor="orange";
 fb3= createSprite(660, 200, 100, 100);
 fb3.shapeColor="grey";
 fb4= createSprite(450, 305, 100, 100);
 fb4.shapeColor="yellow";
 fb5= createSprite(555, 305, 100, 100);
 fb5.shapeColor="green";
 fb6= createSprite(660, 305, 100, 100);
 fb6.shapeColor="blue";
 fb7= createSprite(450, 410, 100, 100);
 fb7.shapeColor="purple";
 fb8= createSprite(555, 410, 100, 100);
 fb8.shapeColor="pink";
 fb9= createSprite(660, 410, 100, 100);
 fb9.shapeColor="brown";
 mp= createSprite(700,100, 20, 20);
}
function draw() {
  background(255,255,255);  
  mp.x=mouseX;
  mp.y=mouseY;

  drawSprites();
}
if(fb1.isTouching(mp)){
  fb1.shapeColor="white";

}
  // fb2.shapeColor="white";
  // fb3.shapeColor="white";
  // fb4.shapeColor="white";
  // fb5.shapeColor="white";
  // fb6.shapeColor="white";
  // fb7.shapeColor="white";
  // fb8.shapeColor="white";
  // fb9.shapeColor="white";
