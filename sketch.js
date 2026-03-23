let speed; //assigning speed of mouse as float numb
let mirrorMode = false; //because i put in mirror button i need to assign it
let eraserMode = false; //for eraser mode (new feature)
let bgColor = 255; //to store current background color

function setup(){
  createCanvas(800,600);
  background(bgColor); // i like white color
  textAlign(CENTER,CENTER); //so numbers work correctly 
}

function drawUI(){

  fill(30);
  rect(0,0,width,50);

  fill(200);
  rect(80,10,100,30);   // ERASER button
  rect(200,10,100,30);  // GRAY button
  rect(320,10,100,30);  // BLACK button
  rect(440,10,100,30);  // WHITE button
  rect(560,10,100,30);  // MIRROR button
  rect(680,10,100,30);  // CLEAR button

  fill(255);
  textSize(14);
  text("ERASER",130,30);
  text("GRAY",250,30);
  text("BLACK",370,30);
  text("WHITE",490,30);
  text("MIRROR",610,30);
  text("CLEAR",730,30);

} // by this draw ui code i made an interface 

function draw(){

  drawUI(); //so it will have the interface

  if(mouseIsPressed && mouseY > 50){
//this code checks if mouse pressed

    speed = dist(mouseX,mouseY,pmouseX,pmouseY);
//this checks mouse distance between current and past positions, so calculates speed

    let number;
//assigning variable to store which number will be drawn

    // now its part for number based on speed
    if(speed < 2){
      number = 1;
    }
    else if(speed < 5){
      number = 3;
    }
    else if(speed < 10){
      number = 5;
    }
    else if(speed < 15){
      number = 7;
    }
    else{
      number = 9;
    }

    let size = map(speed,0,20,6,14); //making the speed affect the size
    textSize(size);

    if(eraserMode){
      fill(bgColor);
      noStroke();
      rect(mouseX, mouseY, 10, 10); //eraser is 10x10 square
    } else {

      //this is part for color based on speed
      if(speed < 2){
        fill(57,255,20,180); //green color and number 1 if speed is not fast
      }
      else if(speed < 5){
        fill(0,255,255,180); //and so on
      }
      else if(speed < 10){
        fill(0,200,255,180); 
      }
      else if(speed < 15){
        fill(255,80,80,180); 
      }
      else{
        fill(255,40,40,180); 
      }

      text(number,mouseX,mouseY); //drawing with numbers 
    }

    //making a mirror mode
    if(mirrorMode){

      let mirror_x = width - mouseX;

      if(eraserMode){
        rect(mirror_x, mouseY, 10, 10);
      } else {
        text(number,mirror_x,mouseY);
      }
    }

  }

}

function mousePressed(){

  if(mouseY < 50){

    // ERASER button
    if(mouseX > 80 && mouseX < 180){
      eraserMode = !eraserMode; //turn on/off eraser
    }

    // GRAY background
    if(mouseX > 200 && mouseX < 300){
      bgColor = 180;
      background(bgColor);
    }

    // BLACK background
    if(mouseX > 320 && mouseX < 420){
      bgColor = 0;
      background(bgColor);
    }

    // WHITE background
    if(mouseX > 440 && mouseX < 540){
      bgColor = 255;
      background(bgColor);
    }

    // MIRROR button
    if(mouseX > 560 && mouseX < 660){
      mirrorMode = !mirrorMode;
    } //making the mirror button work

    // CLEAR button
    if(mouseX > 680 && mouseX < 780){
      background(bgColor); //clear but keep current color
    }

  }

}