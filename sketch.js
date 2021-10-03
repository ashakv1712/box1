var box;
var box2;
function setup() {
  createCanvas(400, 400);
  
  box = createSprite(200,200,50,50);
  box2 = createSprite(300,300,10,10)
}

function draw() {
  background("black");

  if(keyDown(LEFT_ARROW)){
    box.x = box.x-5;
  }


  drawSprites();

}


