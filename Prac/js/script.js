//Practice




var daily = parseInt(prompt("How many times a day do you walk?"));
var weekly = parseInt(prompt("How many days a week do you walk?"));
var distance = parseInt(prompt("How many miles do you walk each time you take your dog out?"));


var timeNeeded = howLong(daily, weekly, distance);

function howLong(daily, weekly , distance){
    var test = 100 /(distance * daily * weekly) ;
    return test;
}

console.log("It would take you " + timeNeeded + " weeks to walk your dog 100 miles.");


var rain = parseInt(prompt("How many centimeters of rain have you had in the last 60 minutes?"));
var lightning = parseInt(prompt("How many miles away was the last lightning strike?"));




var answer = weather(rain, lightning)



function weather(rain, lighting){
    if(rain <= 8 && lighting >= 5){
        var Ok = "No, the coaster does not have to go down for weather! ";
        return Ok;
            }else{
            var notOk = "Yes, the coaster has to go down for weather ";
            return notOk;
    }
}

console.log(answer);





function handWarmers (){
    var people = 1000;
    var perPerson = 2;
    var box = 100;
    var totalNeeded = people * perPerson / box;
    console.log(totalNeeded);
}


handWarmers();