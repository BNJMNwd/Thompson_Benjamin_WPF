//Benjamin Thompson 1/23/14 Conditionals Personal


//Am I ready to move to my new place?

var rooms = 8;      //The number of rooms that need to be packed
var gasNeeded = 12;     //The amount of gas needed in the moving truck in gallons



//Are all of my rooms packed? AND is the moving truck fueled up and ready to go?

var howManyRooms = prompt("How many rooms have been packed?");      //How many rooms the user has packed
var howMuchGas = prompt("How many gallons of gas our in the truck?")        //The amount of gas currently in the moving truck




if(howManyRooms === "" || howMuchGas === ""){       //If either of the user prompts are blanked
    alert("You forgot to input something! Let's try again.");       //This message will display

}else if(howManyRooms >= rooms && howMuchGas >= gasNeeded) {        //If the number of rooms packed are equal to or greater then amount of rooms needing to be packed AND the amount of gas in the truck is equal to or greater than the amount needed

    console.log("Good job! You are ready for the big move!")        //This is displayed
}else{                                                              //If not

    console.log("Some more prep is needed before the big move!")       //This is displayed
}