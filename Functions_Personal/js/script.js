// Benjamin Thompson 10/30/14 Functions Personal

//How many weeks will it take me to walk my dog 100 miles in my new community

var daily = parseInt(prompt("How many times a day do you walk?"));          //User prompt: How many times a day do you walk?
var weekly = parseInt(prompt("How many days a week do you walk?"));         //User Prompt: How many days a week do you walk?
var distance = parseInt(prompt("How many miles do you walk each time you take your dog out?"));//User Prompt: How many miles do you walk each time you take your dog out?

var timeNeeded = howLong(daily, weekly, distance);  //Variable that allows answer to print and also the argument for the function

function howLong(daily, weekly , distance){         //Start of the function and the name as well as the parameter for function
    var time = 100 /(distance * daily * weekly) ;   //The formula to get the amount of time it would take to reach 100 miles.
    return time;            //Allows function to be displayed
}

console.log("It would take you " + timeNeeded + " weeks to walk your dog 100 miles.");  //The message that will be printed
