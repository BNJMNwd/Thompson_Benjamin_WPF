//Benjamin Thompson 1/16/14 Expressions

//How many display cases will I need?


var daily = 7; //Number of comics purchased per day?
var weeks = 5;//Number of week I will be purchasing them?
var canDisplay = 4;//Number of comics that can fit in your display case?

var totalPurchases = daily * weeks * 7;

var displaysNeeded = totalPurchases / canDisplay;


console.log("You will need a total of " + displaysNeeded + " display cases to showcase your wicked crazy collection of " +totalPurchases + " comic books!");

