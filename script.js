let color = "black"

//function to make the size of the grid changable.//
function changeGrid(size) {

    //links js to html placeholder//
    let grid = document.querySelector(".grid");

    //Board shrinks when high number is entered, this fixes that by removind the squares already there and //
    let squares = grid.querySelectorAll("div");
    squares.forEach((div) => div.remove());

    //create columns and rows//
    //backticks used because of $ placeholder//
    //used ${size} so user can pick the size later//
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;

    //sets range for grid square creation//
    //let amount: sets the equation then put amount in the i statement//
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        //creates grid squares//
        let gridSquare = document.createElement("div");
        //Event listener click to make squares change color when clicked//
        gridSquare.addEventListener("click", squareColor)

        //colors grid squares pink for visual//
        gridSquare.style.backgroundColor = "pink";
        //inserts gridSquare into grid id (from html)//
        grid.insertAdjacentElement("beforeend", gridSquare);
    }
}

changeGrid(16);

//setting function parameters so game does not crash//
function changeSize(input) {
    if (input >= 2 && input <= 100) {
        changeGrid(input);
    }
    else {
        alert("Invalid input! Choose a number between 2 and 100.");
    }
}

//this function calls a function each square to make it shuffle color or black (black = color) global let//
function squareColor() {
    console.log(this);
    if (color === "shuffle") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }

    else {
        this.style.backgroundColor = color;
    }
}

//lets user choose color based on button selection clicked//
function colorChange(choose) {
    color = choose;
}