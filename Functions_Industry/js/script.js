//Benjamin Thompson 1/30/14 Functions Industry

//Will the roller coaster have to go down for weather?

var rain = parseInt(prompt("How many centimeters of rain have you had in the last 60 minutes?"));       //user prompt to discover how much it has rained: How many centimeters of rain have you had in the last 60 minutes?
var lightning = parseInt(prompt("How many miles away was the last lightning strike?"));         //User prompt to discover how close lightning is: How many miles away was the last lightning strike?

var maxRain = 8;        //Variables needed for formula
var safeDistance = 5;    //Variables needed for formula

var answer = weather(rain, lightning)       //Variable that allows answer to print and also the argument for the function

function weather(rain, lighting){       //Start of the function and the name as well as the parameter for function
    if(     //first option
        rain <= maxRain && lighting >= safeDistance){       //If the rain is higher than the set amount or the lightning is closer then the safe distance
        var Ok = "No, the coaster does not have to go down for weather! ";      //This will be displayed
        return Ok;       //Allow the return
    }else{     //Second option
        var notOk = "Yes, the coaster has to go down for weather.";     //This will be displayed
        return notOk;        //Allow the return
    }
}

console.log(answer);         //What is printed

