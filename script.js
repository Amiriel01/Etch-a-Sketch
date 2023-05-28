

//links js to html placeholder//
let grid = document.querySelector(".grid");
//create columns and rows//
grid.style.gridTemplateColumns = "repeat(16,1fr)";
grid.style.gridTemplateRows = "repeat(16,1fr)";

//sets range for grid square creation//
for (let i=0; i<256; i++) {
    //creates grid squares//
    let gridSquare = document.createElement("div");
    //colors grid squares pink for visual//
    gridSquare.style.backgroundColor = "pink";
    //inserts gridSquare into grid id (from html)//
    grid.insertAdjacentElement("beforeend", gridSquare);
}

