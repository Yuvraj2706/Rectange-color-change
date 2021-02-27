var canvas;
var music;
var rect1,rect2,rect3,rect4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,400);

    //create 4 different surfaces
    rect1=createSprite(30,350,100,20);
    rect1.shapeColor="red";
    rect2=createSprite(180,350,100,20);
    rect2.shapeColor="blue";
    rect3=createSprite(330,350,100,20);
    rect3.shapeColor="green";
    rect4=createSprite(480,350,100,20);
    rect4.shapeColor="yellow";




    //create box sprite and give velocity
    ball=createSprite(300,200,20,20);
    ball.shapeColor="purple";
    ball.x=World.MouseX;
    ball.y=World.MouseY;
   
    
   

}

function draw() {
    background(rgb(169,169,169));

  
    //create edgeSprite



    //add condition to check if box touching surface and make it box

drawSprites();
}
