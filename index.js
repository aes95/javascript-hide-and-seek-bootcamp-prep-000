
function getFirstSelector(selector){
 return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('#nested.target');
}
function increaseRankBy(n){
  const lis = document.querySelectorAll(".ranked-lists");
  for (let i=0; i< lis.length; i++){
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) +1).toString();
  }
}
function deepestChild() {
  var inception = document.getElementById('grand-node');
  var nolan = inception.children[0];
  while (nolan) {
    inception = nolan;
    nolan = inception.children[0];
  }
  return inception;
} 