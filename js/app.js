
// console.log('hello world');  

var p = document.getElementById("addText");
p.innerHTML = "Hello World";

// var divParent = document.getElementById("addText");
// var divEnfant = document.getElementById("remove");

document.getElementById("addText").parentNode.removeChild(document.getElementById("remove"));

