//Benjamin Thompson 1/23/14 Conditionals Wacky

//How many boxes would you need to fill an entire apartment

var length = prompt("What is the length of your box in feet ");
var width = prompt("What is the width of your box in feet?");
var houseSize = prompt("How many square feet is your apartment");

var boxSpace = length * width;

var boxesNeeded = houseSize / boxSpace;

if(length === "" || width === "" || houseSize === ""){
    alert("You forgot to input something! Let's try again.");


    var length = prompt("What is the length of your box in feet ");
    var width = prompt("What is the width of your box in feet?");
    var houseSize = prompt("How many square feet is your apartment")

    var boxSpace = length * width;
    var boxesNeeded = houseSize / boxSpace;


    console.log("If your apartment is " + houseSize + " square feet, you will need " + boxesNeeded + " boxes to completely fill your house!");

}else{
    console.log("If your apartment is " + houseSize + " square feet, you will need " + boxesNeeded + " boxes to completely fill your house!");
}

