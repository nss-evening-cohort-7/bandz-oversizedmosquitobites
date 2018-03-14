console.log("hello world!");

function writeToDom(domString, domId){
  var myDiv = document.getElementById(domId);
  myDiv.innerHTML = domString;
}