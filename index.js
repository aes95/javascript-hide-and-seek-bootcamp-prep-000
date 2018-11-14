
function getFirstSelector(selector){
 return document.querySelector(selector);
}
function nestedTarget(){
<<<<<<< HEAD
  return document.querySelector('#nested.target');
=======
  return document.querySelector('#nested .target');
>>>>>>> 3066bdb615fd473f4643a887d05cd8fb36b82a45
}
function increaseRankBy(n){
  const lis = document.querySelectorAll(".ranked-lists");
  for (let i=0; i< lis.length; i++){
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) +1).toString();
  }
}
<<<<<<< HEAD
function deepestChild() {
  var inception = document.getElementById('grand-node');
  var nolan = inception.children[0];
  while (nolan) {
    inception = nolan;
    nolan = inception.children[0];
  }
  return inception;
} 
=======
function deepestChild(){
  
}
>>>>>>> 3066bdb615fd473f4643a887d05cd8fb36b82a45
