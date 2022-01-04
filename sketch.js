
var min;
var sec;
var scAngle, minAngle, hAngle;
var evening, morning, night;
var bg, img;

function preload(){
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //createSprite(400, 200, 50, 50);

  
  angleMode(DEGREES);

  //bg = createSprite(500, 500, windowWidth, windowHeight);
}

function draw() {
  //background(img);  
  if (img){
    background(img);
}

  //creating and writing the hours minutes seconds. 
  textSize(25);
  strokeWeight(10);
  stroke(255,200,200);
  fill("white");
  var h = hour();
  text('Current hour:\n' + h, 10, 50);

  var min = minute();
  text("Current minute:\n"+ min, 210, 50);

  var sec = second();
  text("Current second:\n" + sec, 410, 50);

  translate(300,300)
rotate (-90);

fill("red")
var test = createSprite(windowWidth/2, windowHeight/2, 20, 20);

secAngle = map(sec, 0, 60, 0, 360);
stroke(255,255,255);
strokeWeight(7);
line(0,0,100,0);

minAngle = map(min, 0, 60, 0, 360);
stroke(255,255,255);
strokeWeight(7);
line(0,0,100,0);

hAngle = map(h, 0, 12, 0, 360);
stroke(255,255,255);
strokeWeight(7);
line(0,0,100,0); 

strokeWeight(8);
stroke(255,175,175);
noFill();
var end = map(sec,0,60,0,360);
arc(0,0,300,300,0,end);

stroke(255,200,255);
var end2 = map(min,0,60,0,360);
arc(0,0,280,280,0,end2);

stroke(150, 150, 255);
var end3 = map(h%12,0,12,-0,360);
arc(0,0,260,260,0,end3); 

drawSprites();

h =  19;

if(h>=06 && h<=18){
  //bg.addImage("image", morning);
  //morning = 
  img = loadImage("morning.jpeg");;
} else if(h>=19 && h<=21){
  //bg.addImage("image", evening);
  img = loadImage("evening.jpeg");;
  //evening = 

} else {
  //bg.addImage("image", night);
  img = loadImage("night.jpeg");;
}


}


