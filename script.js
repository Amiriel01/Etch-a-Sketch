//function makes the size of the grid changable.//
function changeGrid(size) {
    //links js to html placeholder//
    let grid = document.querySelector(".grid");
    //Board shrinks when high value is entered, this fixes that//
    
    //create columns and rows//
    //backticks used because of $ placeholder//
    //used ${size} so user can pick the size later//
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;

    //sets range for grid square creation//
    for (let i = 0; i < 256; i++) {
        //creates grid squares//
        let gridSquare = document.createElement("div");
        //colors grid squares pink for visual//
        gridSquare.style.backgroundColor = "pink";
        //inserts gridSquare into grid id (from html)//
        grid.insertAdjacentElement("beforeend", gridSquare);
    }
}

changeGrid(16);

//creating function so user can change size//
function changeSize (input) {
    changeGrid(input);
}