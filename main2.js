var data = [];
for ( var i = 0; i<50; i++){
  data.push(50 + Math.random()*150);
  //Math.random : permet de donner une valeur aléartoire entre les px donnés
  //ici la valeur minimum de px sera de 50
}

for( var i=0; i<data.length; i++){
  console.log(data[i]);
  var div = document.createElement('div');
  //ici on créer un element de type div pour chacun des index

  div.style.height = '20px';
  //div.style :permet d'aller accéder à toute les propriété CSS d'un élément
  div.style.background = 'black';
  div.style.marginBottom = '2px';
  // ici on modifi l'élément
  div.style.width = data[i] +'px';
  //ici on lui demande de prendre en compte dans la width tous les index en px

  var p = document.createElement('p');
  p.style.color = 'white';
  p.innerText = data [i];
  div.appendChild(p);

  document.body.appendChild(div);
  //document est un objet et on va lui demender d'aller chercher l'element body dans le html
  //appenchild : permet d'aller ajouter des div dans body (les enfant de body)
  // les enfant de body sont les autre div créé dans body

}
