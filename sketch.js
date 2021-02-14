var pickle, pickleJar, groundback, coin, obstacle, invisGround
var pickleImg, pickleJarImg, backgroundImg, coinImg, obstacleImg

function preload(){
pickleImg = loadImage("pickle.png")
pickleJarImg = loadImage("picklejar.png")
backgroundImg = loadImage("background.jpg")
coinImg = loadImage("coin.png")
obstacleImg = loadImage("obstacle.jpg")


}

function setup(){
createCanvas(displayWidth, displayHeight)
groundback = createSprite(200,0,1500,700)
groundback.addImage(backgroundImg)
groundback.scale=2
groundback.velocityX=-4
pickle = createSprite(50,450,50,50)
pickle.addImage(pickleImg)
pickle.scale=0.1
pickleJar = createSprite(200,200,10,10)
pickleJar.addImage(pickleJarImg)
pickleJar.scale=0.25
invisGround = createSprite(0,457,3000,20)
invisGround.visible = true
groundback.x=groundback.width/2
console.log(displayWidth)
console.log(displayHeight)

}

function draw(){
background("green")
if(groundback.x<600){
    groundback.x=800
}
pickle.collide(invisGround)
spawnObstacles()
spawnCoins()
drawSprites()


}

function spawnObstacles(){
    if (frameCount % 100 === 0){
        var obstacle = createSprite(1300,450,10,10)
        obstacle.addImage(obstacleImg)
        obstacle.velocityX = -2
        obstacle.scale = 0.2
    }
}

function spawnCoins(){
    if (frameCount % 150 === 0){
        var coin = createSprite(1300,300,10,10)
        coin.addImage(coinImg)
        coin.velocityX = -3
        coin.scale = 0.2
    }
}