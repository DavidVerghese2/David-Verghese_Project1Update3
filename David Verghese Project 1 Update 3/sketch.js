// adjective is: "methodical"

//This code is supposed to represent the steps of the scientific method

function setup() {
  createCanvas(900, 600);

  textAlign(CENTER);

  stroke(102);
  frameRate(8);
  angleMode();

}

function draw() {
  background(0);
  question();
  drop();
  eureka();
  dissapointment();
  quits();
  youwin();

}

function eureka() {

  if (key === 'a' || key === 'f') { //   this works better than using the acii system. Is it because of the delay in converting?
    background(200, 100, 50); 

    fill(200, 200, 110);
    ellipse(90, 80, 250, 95);
    triangle(80, 120, mouseX, mouseY, 100, 120);
    fill(100, 100, 50);
    textSize(40);
    text("Eureka!", 90, 80);
    textSize(100);

    textSize(40);
    text("You have an idea!", 600, 80);
    text("Is the solution:", 600, 120);
    text("a) duct tape (press g)", 600, 160);
    text("b) evolution (press h)", 600, 200);


    eurekaguy();

  }
}


function eurekaguy() {
  fill(255);
  ellipse(mouseX, mouseY, 100, 100); // head 
  //  if (a === 1) { // try to make it blink
  if (mouseY % 5 === 0) {

    line(mouseX - 20, mouseY - 20, mouseX - 18, mouseY - 20);
    line(mouseX + 20, mouseY - 20, mouseX + 22, mouseY - 20);


  } else {
    ellipse(mouseX - 20, mouseY - 20, 5, 5);
    ellipse(mouseX + 20, mouseY - 20, 5, 5);


  }

  if (mouseY % 5 === 0) {
    ellipse(mouseX, mouseY + 30, 10, 2);
  } else {
    ellipse(mouseX, mouseY + 30, 10, 10);
  }

  rect(mouseX, mouseY + 6, 2, 5);

  rect(mouseX - 5, mouseY + 50, 12, 15); // neck

  ellipse(mouseX, mouseY + 150, 100, 170);
}




function dissapointment() {
  if (key === 's') {
    background(50, 50, 50);
    textSize(40);
    text("Sigh", 90, 80);
    textSize(100);
    ellipse(200, 100, 5, 5);
    ellipse(250, 100, 5, 5);
    curve(205, 126, 215, 126, 273, 124, 273, 171);
    noFill();
    ellipse(225, 100, 120, 120);

    textSize(30);
    text("Your prediction was wrong.", 200, 200);
    text("Do you want to continue?", 200, 250);
    text("If so, press f", 200, 300);
    text("If not, press g", 200, 350);
    /* if (key === 'g'){      
       quits();}
     } */


  }
}

function quits() {
  if (key === 'g') {
    background(0, 0, 200);
    textSize(30); 
    text("Better luck next time", 450, 300);
  }
}

function youwin(){
  if (key === 'h') {
    background(200, 200, 200);
    fill(200, 0, 100);
    textSize(20 + random(10));
    text("Congratulations! You win", 450, 300);
  }
}


function question() {
  fill(30, 30, 100);
  textSize(30);
  text("What is the meaning of all this?", 450, 300);
  fill(100, 100, 20, 30);
  rect(220, 250, 500, 100);
  for (y = 20; y <= height - 20; y += 40) {
    for (x = 20; x <= width; x += 40) {
      fill(200, 200, 200);
      textSize(18 + random(5));
      text("?", x, random(y));
    }
  }
}

function drop() {
  for (var y = 570; y <= height - 20; y += 5) {
    for (var x = 20; x <= width; x += 10) {
      ellipse(x, y + random(10), 2, 2);

    }
  }
}