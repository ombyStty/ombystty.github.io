var colors = [
  '#595959',
  '#91C499',
  '#F2E9DC',
  '#CFD11A'

];

var color;

var params = {
  width: 0,
  x: 100
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();
  color = random(colors);
}

function draw(){
  background('#808F85');
  fill(color);
  rect(params.x, height/2-100, params.width, 200);

}

function windowResized(){
  resizeCanvas(windiwWidth, windowHeight);
}
//fonction qui permet d'adapter notre fénêtre à la bonne taille

function mousePressed(){
  color = random(colors);
  TweenMax.fromTo(params, 0.09, {
    x: 100,
    width: 0
//permet de donner des premeier parametres pour le rectangle
  },
  {
    width: width-200,
    onComplete: reduce
//Parametres que l'on veut apres le clic
  } );
}

function reduce(){
  TweenMax.to(params, 0.09, {
    x: width-100,
    width: 0
  })
}
