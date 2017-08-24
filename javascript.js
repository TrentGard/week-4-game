$(document).ready(function () {

//establish variables

var crystalArray = [1,2,3,4,5,6,7,8,9,10,11,12];

var min = 19

var max = 120

var score = 0;

var button1 = 0;

var button2 = 0;

var button3 = 0;

var button4 = 0;

//set a variable to fix how each number for each button will increase as it's clicked

var randomSetIncrement = crystalArray[Math.floor(Math.random()*crystalArray.length)];

//establish a variable/function to generate a random number between 19 and 120

var targetNumber = function randomIntFromInterval(min,max) {

    return Math.floor(Math.random()*(max-min+1)+min);

};

//got this code from https://www.kirupa.com/html5/picking_random_item_from_array.htm

var score = $("#button").on("click", function() {

	$(".score").html(randomSetIncrement + button1);

});

$("#button2").on("click", function() {

//need to set score to add each button

//need to set if function for possibilities of either achieving score or going over

//sorry work + tutor cancelling (not his fault) = falling short on time;

//know I didn't complete assignment/know I'm behind; however, am confident I am catching up however slowly

})

});