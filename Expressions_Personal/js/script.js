//Benjamin Thompson 1/16/14 Expressions





var numberOfRooms = 5;
var numberOfRoomsPacked = 4;
var rooms = [6, 4, 6, 7];

var roomTotal = rooms[0] +rooms[1] + rooms[2] + rooms[3];

var roomAver = roomTotal / numberOfRooms;


console.log("It took you about " + roomAver + " hours to pack the last " + numberOfRoomsPacked +
    " rooms of your house. You will need to set aside " + roomAver + " hours to pack the last room");
//It took you about x hours to pack the last x rooms of your house. You will need to set aside x hours to pack the last room