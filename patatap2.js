var colors =[
  '#1F2041',
  '#4B3F72',
  '#893168',
  '#417B5A',
];

var params = {
  diam: 150,
  diamFinal: 0,
  x:200,
  y:500
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();
  color = random(colors);
}

function draw(){
  background('#F2E9DC');
  fill(color);
  ellipse(params.x,params.y, params.diam);
}

function windowResized(){
  resizeCanvas(windiwWidth, windowHeight)
};

function mousePressed(){
  TweenMax.fromTo(params, 0.5, {
    x: random(700),
    y: -300,
  },{
    y: height/2,
    onComplete : reduce,
  });
}

function reduce(){
  TweenMax.to(params, 0.2, {
    diam : random(300),
    x : random(700),
		width: 0
  });
}
