
var trex ,trex_running;
var ground, ground_image;

function preload() {
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  ground_image = loadImage("ground2.png")
}

function setup() {
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,170,20,90)
  
  trex.addAnimation("running",trex_running);
  trex.scale=0.5
  
  // ground sprite () -> so we need to move it backwards.
  ground = createSprite(200, 190, 400, 20)
  ground.addImage(ground_image)
  ground.x=ground.width/2
  // Ground velocities
  ground.velocityX=-3
}

function draw() {
  background("black")
  if(keyDown("space")){
    trex.velocityY=-10
  }
   trex.velocityY=trex.velocityY+0.5
   
  if (ground.x < 0) {
    ground.x=ground.width/2
  }

  trex.collide(ground)
 
  console.log(ground.x)
  drawSprites()
}
