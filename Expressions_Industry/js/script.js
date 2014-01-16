//Benjamin Thompson 1/16/14 Expressions


//How many people were in the Theme park  at 2pm?

var totalAt1 = 2398;    //How many people were in the park at 1pm?
var entered = 367;      //How many people came into the park between 1pm and 2pm?
var exits = 126;        //How many people left the park between 1pm and 2pm?

inPark = totalAt1 + entered - exits; //The number of people in the park was the previous total plus the entries minus the exits.


console.log("At 2pm we had " + inPark + " customers in the park!");