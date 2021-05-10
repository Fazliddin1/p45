var pc,bed,pcImage

function preload(){
  pcImage = loadImage('boy.png')
}

function setup() {
  createCanvas(800,400);
  pc = createSprite(100,100,120,30)

  pc.addImage('boy',pcImage)
  pc.scale = 0.3
  bed = createSprite(160,350,200,70)

}



function draw() {
  background('blue'); 
  
  drawSprites();

  
}