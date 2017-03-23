//var p = document.creatElement('p');
  //ici on créer un élémént de type p//


//var a = 10;
//console.log(a);
  //console.log : permet de reccupérer la veleur de la variable a

var a = [1,2,5,45,75];
// [] : permet de mettre dans a toutes les valeurs dans un tableau
console.log(a);
//la on reccupère tous les éléments du table

console.log(a.lenght);
// a.lenght : permet d'avoir le nb d'élément dans le tableau

console.log(a[ 0 ]);
//reccupère le premier éléments dans le tableau

console.log(a[1]);
//reccupère le deuxiement élément du tableau et ainsi de suite...

console.log(a[a.length - 1])
//reccupère toujours la dernière valeur du tableau quoi qu'il arrive: en se basant sur la longeur du tableau

for(var index =0; index< a.lendth; index++)
//pour index 0 jusqu'a la dernière colone (tant qu'index est inferieur a la longeur du tableau) on demande d'affiché les valeur 1 par 1 grave au index++
{
  console.log( index, a[ index]);
  //tant que index est inferieur a la longeur du tableau on affiche a, a[index]: permet d'afficher la bonne case (index) du tableau
}

a.push(100);
//permet d'ajouter une case à mon tableau ici à 100
console.log(a);

// {} : identifi un objet
var b = {
  prop1 : 10,
  prop2 : 150,
  prop3 : "test"
  //ici on ajoute des propriétés à un JSONObject
  // la prop permet d'aller chercher plus facilement un objet
}

console.log(b);
// on affiche l'objet

console.log (b.prop2);
//ici on va cherche l'objet b avec la prop2

b.test = true;
console.log (b.test);
//ici console.log va nous chercher true
// on peut donner n'importe quel type de valeur à nos prop

b.test = [1,2,3]
console.log (b.test[0]);
//reccupère la 1ère valeur du tableau

b.test2 = {
  a :1
  b :2
  c :3
}

console.log(b.test2.a);
//un objet permet d'organiser toute nos valeur/donnée en fct de "a" de "test" (qui sont de clés)

//Ex pour organiser un rectangle :
var rect= [10, 50, 100, 150];
//[x,y,largeur, longeur]
var largeur = rect[2];
//permet de reccupérer la largeur du rectangle

var rect2 = {
  x : 10,
  y : 50,
  width : 100,
  height : 150,
};

var largeur2 = rect2.width
//ici on réccupère la largeur plus facilement qu'au dessus

var b = {
  prop1 : 10,
  prop2 : 150,
  prop3 : "test"
};

function sayHello(name){
  console.log("hello" + name);

  //name devient un peramètre de la fonction
};

sayHello("john");
//ic on appel la fonction
//name va donc ici prendre la valeur "john"

var sayHello = function(){
  //la fonction devient une variable
};

var b = {
  prop1 : 10,
  prop2 : 150,
  prop3 : "test"
  
  sayHello(name){
    console.log("hello" + name);
  //ici mon objet b a une fonction

};

b.sayHello("john");
// ici on demande à l'objet d'utiliser la fonction sayHello : ce qui nous donnera : hello John
