//Benjamin Thompson, 1/16/14 Expressions_Worksheet



//Dog Years

//Calculate how old sparky is in dog years based on his age in human years

var sparkyAge = 4;      //What is Sparky's age in human years?

var dogAge = sparkyAge * 7; // Multiples Sparky's age in human years by 7 which gives us his age is dog years.


//This is what is printed

console.log("Sparky is " + sparkyAge +  " human years which is " + dogAge + " in dog years.");




//Slice of pie part 1



//How many slices of pizza can each person at the party have if they all have the same amount


var slicePerPie = 8;        //Number of slices per pie
var attendees = 19;         //Number of attendees at party
var piesOrdered = 6;       //Number of pizzas ordered

var slicePerAttendee = slicePerPie * piesOrdered / attendees; //Multiply the number of slices per pizza pie by the number of pizzas ordered and divide that number by the number of attendees at the party

//This is what is printed

console.log("Each person ate " + slicePerAttendee + " slices of pizza at the party");


//Slice of pie part 2

//How many slices of pizza does Sparky get to eat after the party?

var sparkysDinner = attendees % piesOrdered; //The number of slices that Sparky gets to eat is the remainder pizzas ordered from the number of party attendees


//This is what is printed

console.log(sparkysDinner);




