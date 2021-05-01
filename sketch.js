var hypnoticBall, database,dogImg;
var position;

function preload(){
  dogImg=loadImage("index.jpeg")

}
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  hypnoticBall = createSprite(200,200,10,10);
  //hypnoticBall.shapeColor = "red";
  hypnoticBall.addImage(dogImg)
  

  var hypnoticBallPosition = database.ref('food');
  hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
  background("white");
  
    
     if(keyDown(UP_ARROW)){
      writePosition(-1);
    }
    text("food remaining "+position,100,50)
    drawSprites();
  
}

function writePosition(x){
  database.ref('/').set({
    'food': position + x ,
    
  })
}

function readPosition(data){
  position = data.val();
  
  
}

function showError(){
  console.log("Error in writing to the database");
}
