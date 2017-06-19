"use strict";

var counterElement = document.getElementById("counter");

const handlerClick = (from) => {
	counterElement.innerHTML = 
		counterElement.innerHTML === 'Counter' ? 
			1 :  
			parseInt(counterElement.innerHTML) + 1;
	
	console.log(`Click from: ${from}`)
}
