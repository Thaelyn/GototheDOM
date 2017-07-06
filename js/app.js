
// console.log('hello world'); 

// Step 2 

// Méthode 1
var paragraph = document.getElementById("addText");
paragraph.textContent = "Hello World";

// Méthode 2
// addText.textContent = "Hello World";

// Méthode 3
var paragraph = document.getElementById("addText");
paragraph.innerHTML = "Hello World"; 

// Step 3

// Méthode 1
// var removeId = document.getElementById("remove");
// removeId.parentNode.removeChild(removeId);

// Méthode 2
var removeId = document.getElementById("remove"); 
removeId.remove();

// Méthode 3
// document.getElementById("addText").parentNode.removeChild(document.getElementById("remove"));


// Step 4 

// Méthode 1
var changeColor = document.getElementById("changeColor");
changeColor.style.backgroundColor = "Red";

// Méthode 2 
// var changeColor = document.getElementById("changeColor");
// changeColor.classList.add("backgroundRed");

// Step 5 

// Méthode 1
var addChildren = document.getElementById("addChildren");
var child;

for (var i = 0; i < 4; i++) {
	child = document.createElement("p");
	addChildren.appendChild(child);
}
