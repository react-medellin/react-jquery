'use strict';

// Create a new <a> element
var anchor = document.createElement("A");

// Create a text node
var textNode = document.createTextNode("JS Button");

// Append the text node to the <a> element
anchor.appendChild(textNode);

// Add some classes
anchor.className = 'btn btn-default';

// Add event listener
anchor.addEventListener('click', function() {
	handlerClick('JS')
})

// Append <a> to <div> with id="js-container"
document.getElementById("js-container").appendChild(anchor);
