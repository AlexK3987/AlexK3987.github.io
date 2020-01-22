var last_min;
var ms;
var prev_ms;
function setup() {
  createCanvas(400, 400);
  last_min=minute();
  ms=second()*1000;
  prev_ms=millis()
}

function draw() {
  background(0);
  textSize(50);
  fill(180);
  //text(hour(), 10, 30);
  fill(100);
  //text(minute(), 10, 60);
  fill(0);
  //text(second(), 10, 90);
  
  ms+=(millis()-prev_ms)%60000
  prev_ms=millis()
  
  let hr = map(hour(),0,23,100,400)
  let mn = map(minute(),0,59, 50, hr)
  let sec = map(second(),0,59, 1, mn)
  let mill = map(ms,0,60000,1,mn)
  
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

  stroke(0);
  fill(190);
  ellipse(200,200,mn,mn);
  
  fill(150);
  
  while(mins_left<hr){
    noFill();
    stroke(170)
    ellipse(200,200,mins_left,mins_left);
    mins_left+=(hr-50)/4
    
  }
  stroke(0)
  //ellipse(200,200,sec,sec);
  ellipse(200,200,mill,mill);
  if(last_min!=minute()){
    print("The minute has changed from " + last_min + " to " + minute());
    last_min=minute();
    ms=0
  }
  
}

