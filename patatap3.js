var colors =[
  '#40434E',
  '#C297B8',
  '#FDCFF3',
  '#DE89BE'
];

var color;

var params={
  nbCotes : 0,
  rayon : 500
}


function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();
  color = random(colors);
}

function draw(){
  background('#070707')
  fill(color);
  polygon( width/2, height/2, params.nbCotes, params.rayon, 0 );
  noFill();
  stroke(0);
  polygon( width/2, height/2, params.nbCotes, params.rayon/1.2, 0, -1);
  noFill();
  stroke(0);
  polygon( width/2, height/2, params.nbCotes, params.rayon/1.3, 0);
  noFill();
  stroke(0);
  polygon( width/2, height/2, params.nbCotes, params.rayon/1.5, 0, -1);
  noFill(0);
  stroke(0);
  polygon( width/2, height/2, params.nbCotes, params.rayon/2, 0);
  noFill(0);
  stroke(0);
  polygon( width/2, height/2, params.nbCotes, params.rayon/3, 0, -1);
  noFill();
  stroke(0);
  polygon( width/2, height/2, params.nbCotes, params.rayon/4, 0);
  noFill();
  stroke(0);
  polygon( width/2, height/2, params.nbCotes, params.rayon/5.5, 0, -1);
}

function mousePressed(){
  color = random(colors);
  TweenMax.fromTo(params, 1.7, {
    nbCotes: 0,
    rayon : 0
  },
  {
    nbCotes : 8,
    rayon : 200
  });
}

function polygon(cx, cy, nbCotes, rayon, angleDep, reverse ){
  var rev = reverse || 1;
  stroke(0);
  beginShape();
  for( var i=0; i<nbCotes; i++){
    var angle = -PI/2 + radians(angleDep) + (rev * TWO_PI / nbCotes * i);
    var x = cx + cos(angle)*rayon;
    var y = cy + sin(angle)*rayon;
    vertex(x,y);
  }
  endShape(CLOSE);
}
