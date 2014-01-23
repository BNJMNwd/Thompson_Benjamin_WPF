//Conditionals Screencast


/*if(condition){
    actions

}else{

}


if(sunny){
    goToTheBeach
}else{
    goToTheMovies
}
 */


/*
var kidHeight = 50;
var minHeight = 48;
var wParenetHeight = 45; //The height of the kid with a parent

//If the child is old enough, print to the console "you can ride!"
//If the kid is over 48 inches in height
if(kidHeight > minHeight){
    //You can ride
    console.log("You can ride the coaster!");
}else if(kidHeight > wParenetHeight){
    //You can ride with a parent present
    console.log("You can ride, but only with a parent present");
    }else{
    //Sorry you have growing to do
    console.log("Sorry kid you've got some growing to do first")
}
*/


/*
var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of phone is less then our budget AND our paycheck is over 300

if(iPhonePrice < budget || wonLottery === true){
   console.log("We can but the phone!")
}else{
    console.log("No phone for you!")

}*/

/*
var gpa = 48;

//If the GPA is over the min 2.0 score the student can graduate

/*if(gpa > 2.0){
    console.log("You can graduate!");
}else{
    console.log("GPA is too low!");
}

(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA is too low!");

 */



//If the child is under 10 they get Green Eggs and Ham, otherwise they get The Time Machine
/* if(age < 10){
    book = "Green Eggs and Ham";
}else{
    book = "The Time Machine";
}*/


var age = 6;
var book;

book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";


console.log(book);
