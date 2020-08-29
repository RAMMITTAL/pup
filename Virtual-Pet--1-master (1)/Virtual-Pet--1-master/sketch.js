//Create variables here
var dog1,dog2,database,foodstok
function preload()

{
  dog1 = loadImage("images/dogImg.png")
  dog2 = loadImage("images/dogImg1.png")


	//load images here
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
  dog =createSprite(250,250)
  dog.addImage(dog1)
  dog.scale = 0.7
  updatefood(20)
}


function draw() {  
background(46,139,87)
  drawSprites();
  getfood()
  text(foodstok,50,50)
  //add styles here
keyf()
}
function getfood(){
  database.ref("food").on("value",(data)=>{
    foodstok = data.val()
  })
}
function updatefood(foodst){
  database.ref ('/').update({
    food:foodst
  })
}
function keyf(){
  if(keyDown(UP_ARROW)&&foodstok>0){
    console.log("high")
    foodstok = foodstok-1
    updatefood ( foodstok)
    dog.addImage(dog2)
  }
}

