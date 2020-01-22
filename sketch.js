var last_min;
function setup() {
  createCanvas(400, 400);
  last_min=minute();
}

function draw() {
  background(225);
  textSize(50);
  fill(180);
  //text(hour(), 10, 30);
  fill(100);
  //text(minute(), 10, 60);
  fill(0);
  //text(second(), 10, 90);
  
  let hr = map(hour(),0,23,100,400)
  let mn = map(minute(),0,59, 50, hr)
  let sec = map(second(),0,59, 1, mn)
  fill(0)
  ellipse(200,200,400,400)
  let hrs_left=100;
  
  while(hrs_left<400){
    noFill();
    stroke(170);
    ellipse(200,200,hrs_left,hrs_left);
    hrs_left+=300/23;
  }
  
  
  
  stroke(0);
  fill(220);
  ellipse(200,200,hr,hr);
  let mins_left=50;
  while(mins_left<hr){
    noFill();
    stroke(250)
    ellipse(200,200,mins_left,mins_left);
    mins_left+=(hr-50)/4
    
  }
  stroke(0);
  fill(190);
  ellipse(200,200,mn,mn);
  fill(150);
  ellipse(200,200,sec,sec);
  if(last_min!=minute()){
    print("The minute has changed from " + last_min + " to " + minute());
    last_min=minute();
  }
  
}
