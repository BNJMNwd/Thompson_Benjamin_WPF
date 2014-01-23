//Benjamin Thompson 1/23/14 Conditionals Industry


var ageOfComputer = prompt("How many years have you had your computer?");
var computerVirus = prompt("How many minutes does it take for your computer take to start up?");

computerMessage = (ageOfComputer > 2 || computerVirus > 7 ) ? "You get a new computer!!" : "You do not get a new computer yet.";


console.log(computerMessage);
