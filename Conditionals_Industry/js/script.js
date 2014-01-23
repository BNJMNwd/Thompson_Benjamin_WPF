//Benjamin Thompson 1/23/14 Conditionals Industry


//Is it time to get a new computer?

var ageOfComputer = prompt("How many years have you had your computer?");   //The user enters how many years they have had a computer
var computerVirus = prompt("How many minutes does it take for your computer take to start up?");    //The user enters how many minutes it takes to start up its computer


var endOfLease = 2;
var tooSlow = 7;
if(ageOfComputer === ""){   //Check to make sure user entered data into the age of computer prompt

    alert("You forgot to input something!");    //Alert that they are missing some info
    var ageOfComputer = prompt("How many years have you had your computer?");   //The user has a chance to renter this information

    computerMessage = (ageOfComputer > endOfLease || computerVirus > tooSlow ) ? "You get a new computer!!" : "You do not need a new computer yet.";       //If the computer is less then the designated years old and it takes less time than designated the user does not get a new computer. Otherwise they do get a new computer

    console.log(computerMessage);       //Displayed Message
}else if(computerVirus === ""){                //Check to make sure user entered data into the virus/computer speed prompt

    alert("You forgot to input something!");    //Alert that they are missing some info
    var computerVirus = prompt("How many minutes does it take for your computer take to start up?") //The user has a chance to renter this information

    computerMessage = (ageOfComputer > endOfLease || computerVirus > tooSlow ) ? "You get a new computer!!" : "You do not need a new computer yet.";       //If the computer is less then the designated years old and it takes less time than designated the user does not get a new computer. Otherwise they do get a new computer

    console.log(computerMessage);       //Displayed Message
}else{
    computerMessage = (ageOfComputer > endOfLease || computerVirus > tooSlow ) ? "You get a new computer!!" : "You do not need a new computer yet.";       //If the computer is less then the designated years old and it takes less time than designated the user does not get a new computer. Otherwise they do get a new computer

    console.log(computerMessage);       //Displayed Message
}