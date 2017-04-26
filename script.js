var submit = document.getElementById('submit'); 
var results = document.getElementById('results');
var resultsArray = [];

submit.addEventListener("click", function() { 
	var start = parseInt(document.getElementById('start').value);
	var numEvens = parseInt(document.getElementById('numEvens').value);
	var evensCounter = 0;
	var current = start;

	while(evensCounter < numEvens){
		current += 1		
		if (current % 2 === 0){
			resultsArray.push(current)
			evensCounter += 1
		}
	}

	var resultsString = "";
	for (var i = 0; i < resultsArray.length; i++){
		resultsString += " " + resultsArray[i]
	}

	results.innerHTML = "Starting with " + start + " the next " + numEvens + " are" + resultsString
});

// INPUTS
// start
// numEvens

// until counter = numEvens
// add 1 to start
// if that number is even
// store it
// increment counter

// var start = 5;
// var numEvens = 3;
// var counter = 0;
// var results = [];

// while(counter < numEvens){
// 	start += 1
// 	if (start % 2 === 0){
// 		results.push(start);
// 		counter += 1
// 	}
// }