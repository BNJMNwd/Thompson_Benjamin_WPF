//Benjamin Thompson 1/30/14 Functions Worksheet



//Question 1: Circumference

//Calculate the circumference of a circle




var answer = circOfCircle(100);  //Variable that allows answer to print and also the argument for the function

function circOfCircle(radius){          //Start of the function and the name as well as the parameter for function
    var pi = 3.14;
    var circumference = radius * pi;   //The calculation to get the circumference of the circle
   return circumference;                //Allow the return
}

console.log("The circumference of the circle is " + answer);        //What is printed



//Question 2: Stung!

//How many bees does it take to kill an animal

var beeStings = howMany(145);       //Variable that allows answer to print and also the argument for the function

function howMany(vicWeight){        //Start of the function and the name as well as the parameter for function
    var total = vicWeight * 8.666666667;    //The calculation of how many stings it takes per pound
    return total;                   //Allow the return
}

console.log("It takes " + beeStings +  " bee stings to kill this animal.");     //What is printed