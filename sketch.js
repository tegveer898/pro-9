 var ball;
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,20,20);
}

function draw(){
  if(keyIsDown(DOWN_ARROW))
{
  background('blue');
}
if(keyIsDown(UP_ARROW))
{
  background('red')
}
  
  drawSprites();
}






