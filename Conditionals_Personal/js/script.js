//Benjamin Thompson 1/23/14 Conditionals Personal


//Am I ready to move to my new place?

var rooms = 8;
var gasNeeded = 12;



//Are all of my rooms packed? AND is the moving truck fueled up and ready to go?

var howManyRooms = prompt("How many rooms have been packed?");
var howMuchGas = prompt("How many gallons of gas our in the truck?")




if(howManyRooms === "" || howMuchGas === ""){
    alert("You forgot to input something! Let's try again.");

}else if(howManyRooms >= rooms && howMuchGas >= gasNeeded) {

    console.log("Good job! You are ready for the big move!")
}else{

    console.log("Some more prep is needed before the big move!")
}