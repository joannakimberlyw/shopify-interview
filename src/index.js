//Create a map of the grid
//function to move to the new coordinate
//function for turning - determines if you will move by row or column
const cursor = "👆🏻";

window.onload = function() {
    var gridMap = document.getElementById("buildMap");
    for(var i = 0; i < 10; i++) {
        var columnElement = document.createElement("div");
        for(var x=0; x< 10; x++) {
            var cellElement = document.createElement("div");
            cellElement.id = i + ":" + x;
            cellElement.classList.add("Cell");
            columnElement.appendChild(cellElement);
        }
        columnElement.id = i;
        columnElement.classList.add("Column");
        gridMap.appendChild(columnElement);
    }

    var cursorCarrier = document.createElement("div");
    cursorCarrier.classList.add("up");
    cursorCarrier.id = "cursor";
    cursorCarrier.innerHTML = cursor;
    document.getElementById("0:0").appendChild(cursorCarrier);
}

function turnRight() {
    var directionMap = ["up", "right", "down", "left"];
    var cursorBox = document.getElementById("cursor");
    var currentDirection = cursorBox.classList;
    var currentIndex = directionMap.indexOf(currentDirection[0]);
    var nextIndex = (currentIndex == 3) ? 0 : currentIndex + 1;
    cursorBox.classList = [];
    cursorBox.classList.add(directionMap[nextIndex]);
}

function moveForward() {
    //get current position and direction
    var cursorBox = document.getElementById("cursor");
    var currentPosition = cursorBox.parentElement.id;
    var currentDirection = cursorBox.classList[0];

    //split coordinates into x and y
    var coordinates = currentPosition.split(":");
    var xCoordinate = coordinates[0];
    var yCoordinate = coordinates[1];

    //based on position increment each coordinate within the boundaries
    switch (currentDirection){
        case "up":
            if (yCoordinate > 0) {yCoordinate--}
            break;
        case "right":
            if (xCoordinate < 9) {xCoordinate++}
            break;
        case "down":
            if (yCoordinate < 9) {yCoordinate++}
            break;
        case "left":
            if(xCoordinate > 0) {xCoordinate--}
            break;
    }

    //assign new coordinate position
    var newCoordinate = xCoordinate + ":" + yCoordinate;
    var newPosition = document.getElementById(newCoordinate);
    newPosition.appendChild(cursorBox);
}