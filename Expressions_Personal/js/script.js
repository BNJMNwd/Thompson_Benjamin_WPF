//Benjamin Thompson 1/16/14 Expressions



//How long will it take to pack the last room of my house?

var numberOfRoomsPacked = 4;        //How many of these rooms have you packed?
var rooms = [6, 4, 6, 7];           //How many hours did it take you to pack these rooms?

var roomTotal = rooms[0] +rooms[1] + rooms[2] + rooms[3]; //Calculation to get the total number of hours packed

var roomAver = roomTotal / numberOfRoomsPacked;   //Calculation to find the average amount of time to pack a room


//This is what will be displayed


console.log("It took you about " + roomAver + " hours to pack the last " + numberOfRoomsPacked +
    " rooms of your house. You will need to set aside " + roomAver + " hours to pack the next room");
