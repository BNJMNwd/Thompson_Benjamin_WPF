//Conditionals Worksheet


//Last Chance for Gas!

var mpg = 32;
var gaugeReading = 50;
var tank = 14;

var distance = 200;

var testTest = mpg * tank;



if(mpg * tank >= distance  ){
    //You do not need to stop for gas!
    console.log("Yes, you can make it without stopping for gas!");
}else{
    //You do need to stop for gas
    console.log("You only have " + gaugeReading/tank + ' ' + "gallons of gas in your tank, better get gas now while you can!");
}



