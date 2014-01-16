//Benjamin Thompson 1/16/14 Expressions


//How many people were in the Theme park  at 2pm?

var previousHour = 14056;    //How many people were in the park at 1pm?
var entered = 1230;      //How many people came into the park between 1pm and 2pm?
var exits = 367;        //How many people left the park between 1pm and 2pm?

var inPark = previousHour + entered - exits; //The number of people in the park was the previous total plus the entries minus the exits.

var increase = inPark - previousHour; //A calculation to tell the difference between the number of customers since last hour. The total currently in minus the total from the previous hour

//What will be displayed

console.log("At 2pm we had " + inPark + " customers in the park! This means we had an increase of " + increase +  " customers since 1pm!");
