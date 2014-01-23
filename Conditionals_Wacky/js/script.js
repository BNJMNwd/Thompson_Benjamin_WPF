//Benjamin Thompson 1/23/14 Conditionals Wacky

//How many boxes would you need to fill an entire apartment

var length = prompt("What is the length of your box in feet ");     //The length of the box
var width = prompt("What is the width of your box in feet?");       //The width of the box
var houseSize = prompt("How many square feet is your apartment");   //How many square feet is the apartment

var boxSpace = length * width;      //The length of the box multiplied by the width of the box

var boxesNeeded = houseSize / boxSpace;     //The size of the house divided by the total space of the box

if(length === "" || width === "" || houseSize === ""){      //If any of the prompts are blank do this
    alert("You forgot to input something! Let's try again.");

    //The remainder/repeat of the program
    var length = prompt("What is the length of your box in feet ");
    var width = prompt("What is the width of your box in feet?");
    var houseSize = prompt("How many square feet is your apartment")

    var boxSpace = length * width;
    var boxesNeeded = houseSize / boxSpace;


    // What will be printed
    console.log("If your apartment is " + houseSize + " square feet, you will need " + boxesNeeded + " boxes to completely fill your house!");

}else{      //If not do this

    // What will be printed 
    console.log("If your apartment is " + houseSize + " square feet, you will need " + boxesNeeded + " boxes to completely fill your house!");
}

