//Set global variables//
let grid=document.getElementById("grid");

function createDivs (numDivs) {
    for (let d=0; d<numDivs, d++) {
        let cells=document.createElement("div");
        grid.appendChild(cells);
    }
}
createDivs(256);