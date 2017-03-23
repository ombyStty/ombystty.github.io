var box = document.getElementById("greenBox"),
    count = 0,
    tween;

tween = TweenMax.to(box, 2, {left:"700px", repeat:10, yoyo:true, onRepeat:onRepeat, repeatDelay:0.5, ease:Linear.easeNone});
//tweenMax.to : permet la transition de la box : le fait qu'elle se déplance
//repeat : la transition se repète 10 fois
//yoyo : permet l'aller retour entre 0 et 700 px
//onReapeat :
//repeateDelay : permet de mettre un temps entre chaque repetition de transition
//ease: linear.easeNone :permet que la vitesse de transition soit linéaire
function onRepeat() {
  count++;
  box.innerHTML = count;
  TweenLite.set(box, {backgroundColor:"hsl(" + Math.random() * 255 + ", 90%, 60%)"});
}
