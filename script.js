let color = "black"
let click = false

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
        gridSquare.addEventListener("mouseover", squareColor)

        //colors grid squares pink for visual//
        gridSquare.style.backgroundColor = "white";
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
//added if (click) to make it where it didn't mouseover nonstop//
function squareColor() {
    console.log(this);
    if (click) {
        if (color === "shuffle") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }

        else {
            this.style.backgroundColor = color;
        }
    }
}

//lets user choose color based on button selection clicked//
function colorChange(choose) {
    color = choose;
}

//reset grid using the remove squares info from above but instead of removing change the background color to white//
function resetGrid() {
    let grid = document.querySelector(".grid");
    let squares = grid.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}

//event listener for the entire page for click events that does not target buttons//
document.querySelector('.grid').addEventListener('click', (e) => {
    if (e.target.tagName != "BUTTON") {
        //set click event to opposite to turn it off and on//
        click = !click;
        //sets if button is clicked you see "Drawing" in coloring mode//
        if (click) {
            document.querySelector('#drawing').textContent = "Drawing Mode: Drawing";
        }
        else {
            document.querySelector('#drawing').textContent = "Drawing Mode: Not Drawing";
        }
    }
});
//grabs all btn class buttons//
let btnList = document.querySelectorAll('.btn');
//applies color to each on click//
btnList.forEach(btn => {
    btn.addEventListener('click', () => {
        //removes on new click. ? tells that it isn't active and to disregard the error and push through//
        document.querySelector('.special')?.classList.remove('special');
        //adds effect to next button clicked//
        btn.classList.add('special');
    })
})