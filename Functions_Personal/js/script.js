// Benjamin Thompson 10/30/14 Functions Personal

//How many weeks will it take me to walk my dog 100 miles in my new community

var daily = parseInt(prompt("How many times a day do you walk?"));
var weekly = parseInt(prompt("How many days a week do you walk?"));
var distance = parseInt(prompt("How many miles do you walk each time you take your dog out?"));

var timeNeeded = howLong(daily, weekly, distance);

function howLong(daily, weekly , distance){
    var time = 100 /(distance * daily * weekly) ;
    return time;
}

console.log("It would take you " + timeNeeded + " weeks to walk your dog 100 miles.");
