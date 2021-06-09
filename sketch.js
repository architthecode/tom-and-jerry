var canvas,bg
var together
var tom,tomIMG1,tomIMG2,tomIMG3
var jerry,jerryIMG1,jerryIMG2,jerryIMG3
function preload() {
    bg = loadImage("images/garden.png")
    tomIMG1 = loadImage("images/cat1.png")
    tomIMG2 = loadImage("images/cat2.png")
    tomIMG3 = loadImage("images/cat3.png")
    jerryIMG1 = loadImage("images/mouse1.png")
    jerryIMG2 = loadImage("images/mouse2.png")
    jerryIMG3 = loadImage("images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
   tom = createSprite(870,600)
   tom.addAnimation("tomsleeping",tomIMG1)
   tom.scale = 0.2

   jerry = createSprite(200,600)
   jerry.addAnimation("jerryStanding",jerryIMG1)
   jerry.scale = 0.15

}

function draw() {

    background(bg);
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0
        tom.addAnimation("tomlastIMG",tomIMG3)
        tom.x = 300
        tom.scale = 0.2
        tom.changeAnimation("tomlastIMG")
        jerry.addAnimation("jerrylastIMG",jerryIMG3)
        jerry.scale = 0.15
        jeryy.changeAnimation("jerrylastIMG")
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      tom.velocityX = -5
      tom.addAnimation("tomrunning",tomIMG2)
      tom.changeAnimation("tomrunning")
      jerry.addAnimation("jerryteasing",jerryIMG2)
      jerry.frameDelay = 25
      jerry.changeAnimation("jerryteasing")
  }


}
