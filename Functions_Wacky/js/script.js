//Benjamin Thompson 1/30/14 Functions Wacky

function handWarmers (){        //Start of function
    var people = 1000;          //Number of people in the group
    var perPerson = 2;          //Number of hand warmers each person will get
    var box = 100;              //Number of hand warmers in each box
    var totalNeeded = people * perPerson / box;     //Formula for the total needed
    console.log(totalNeeded);   //What will be printed
}


handWarmers();          //To invoke the function