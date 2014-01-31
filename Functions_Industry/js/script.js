//Benjamin Thompson 1/30/14 Functions Industry

//Will the roller coaster have to go down for weather?

var rain = parseInt(prompt("How many centimeters of rain have you had in the last 60 minutes?"));
var lightning = parseInt(prompt("How many miles away was the last lightning strike?"));


function weather(rain, lighting){
    if(rain <= 8 && lighting >= 5){
        var Ok = "No, the coaster does not have to go down for weather! ";
        return Ok;
    }else{
        var notOk = "Yes, the coaster has to go down for weather ";
        return notOk;
    }
}