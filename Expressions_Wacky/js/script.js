//Benjamin Thompson 1/16/14 Expressions

//How many display cases will I need to display my soon to be purchased comic book collection?


var daily = 7; //Number of comics purchased per day?
var weeks = 5;//Number of week I will be purchasing them?
var canDisplay = 4;//Number of comics that can fit in your display case?

var totalPurchases = daily * weeks * 7; //Calculation to get the total number purchased. The number purchased dailly times the number of weeks times the number of days in the week

var displaysNeeded = totalPurchases / canDisplay; //Calculation to discover the needed amount of cases needed. The total purchased divided by the number that can fit in each case


//What will be displayed

console.log("You will need a total of " + displaysNeeded + " display cases to showcase your wicked crazy collection of " +totalPurchases + " comic books!");

