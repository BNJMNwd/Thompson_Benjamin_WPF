//Conditionals Worksheet


//Last Chance for Gas!

var mpg = 32;       //MPG of the vehicle
var gaugeReading = 50;      //The percentage of gas left in the tank
var tank = 14;      //The amount of gas the tank can hold in gallons

var distance = 200;     //The distance you need to travel

var testTest = mpg * tank;



if(mpg * tank >= distance  ){
    //You do not need to stop for gas!
    console.log("Yes, you can make it without stopping for gas!");
}else{
    //You do need to stop for gas
    console.log("You only have " + gaugeReading/tank + ' ' + "gallons of gas in your tank, better get gas now while you can!");
}



//Check the Login


var enterUserName = prompt("Enter Your Username");      //User entered Username
var enterPassword = prompt("Enter Your Password");      //User Entered Password



 var userName = "bapt1988";                             //The stored user name
 var password = "12345";                                //The stored password



if(userName === enterUserName && password === enterPassword){       //If the stored user name and password match the stored user name and password
    //Welcome
    console.log("Welcome, " + userName + "!");

}else if(password === enterPassword){                               //If the password entered the stored password match but the user name does not
    //User name not found try again
    console.log("User not found. Try again");
}else{
    //Password does not match try again
    console.log("Password does not match our records.");            //If the entered user name matches the stored user name but the passwords do not match
}





//Tire Pressure

var tire1 = 21;     //Tire pressure in tire 1
var tire2 = 21;     //Tire pressure in tire 2
var tire3 = 23;     //Tire pressure in tire 3
var tire4 = 23;     //Tire pressure in tire 4

if(tire1 === tire2 && tire3 === tire4){ // if the pressure in tire 1 and 2 match AND the pressure in 3 and 4 match
    //You are good!
    console.log("The tires pass spec!")
}else{                                  //If they do not match
    //You need to get your tires checked out
    console.log("Get your tires checked out!")
}