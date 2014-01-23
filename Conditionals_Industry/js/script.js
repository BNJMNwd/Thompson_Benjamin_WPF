//Benjamin Thompson 1/23/14 Conditionals Industry


var ageOfComputer = prompt("How many years have you had your computer?");   //The user enters how many years they have had a computer
var computerVirus = prompt("How many minutes does it take for your computer take to start up?");    //The user enters how many minutes it takes to start up its computer

if(ageOfComputer === ""){

    alert("You forgot to input something!");
    var ageOfComputer = prompt("How many years have you had your computer?");


    computerMessage = (ageOfComputer > 2 || computerVirus > 7 ) ? "You get a new computer!!" : "You do not get a new computer yet.";


    console.log(computerMessage);
}else if(computerVirus === ""){

    alert("You forgot to input something!");
    var computerVirus = prompt("How many minutes does it take for your computer take to start up?")


    computerMessage = (ageOfComputer > 2 || computerVirus > 7 ) ? "You get a new computer!!" : "You do not get a new computer yet.";


    console.log(computerMessage);
}else{
computerMessage = (ageOfComputer > 2 || computerVirus > 7 ) ? "You get a new computer!!" : "You do not get a new computer yet.";


console.log(computerMessage);
}