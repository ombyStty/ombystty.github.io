var box = document.querySelector('#box');
//querySelector : rechercher un element qui correspond à ce selector CSS
box.style.background ='red';

var x, y, w, h;
//nouvelle variable pour les dimentions

function move(){
TweenMax.to( box, 2, {
  x: Math.floor(Math.random()*300),
  //Math.floor : quand on à des chiffre à virgule on lui demande ici de l'arrondir au nb au dessus
  y: Math.floor(Math.random()*300),
  borderRadius : '150px',
  ease: Bounce.easeOut,
  //option pour lisser/fludifier avec la vitesse la transition
  // il existe plusieur lissages : Power0.easeNone / Power0.easeIn / Power0.easeOUt / Power0.easeInOut...
  //Bounce : fait l'effet de rebondissement
  onComplete : grow
  //permet d'appelr une nouvelle fonction
} );
//TweenMax.to(box, le temps, objet écrit avec des {}--> chose que l'on veut modifier)

TweenMax.to( box, 0.5, {
  width: '250px'
});

TweenMax.to( box, 0.5, {
  height: '250px',
  delay: 2
  // la transition va se fait au bout de 5s

});
}

function grow(){
  TweenMax.to( box, 2, {
    width: window.innerWidth + 'px',
    height: window.innerHeight + 'px',

  })
}

document.body.addEventListener('click', move, grow);
//addEventListener : permet d'écouter : des qu'il entend un evenement il exectute la fonction
