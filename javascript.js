let squaresNumber = 16;
let color = "#303841";
let isDrawing = true;

function addBox() {
    const container = document.querySelector(".container");
    const box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mouseenter", (event) => {
        if (isDrawing) {
            event.target.style.backgroundColor = color;
        }
    })
    box.setAttribute("style", `flex: 0 0 ${100/squaresNumber}%;`)

    container.appendChild(box);
}


function createGridBox() {
    // Creates a grid of 16 boxes
    for (let i = 0; i < squaresNumber * squaresNumber; i++) {
        addBox();
    }
}


function deleteGridBox() {
    const container = document.querySelector(".container");
    container.replaceChildren();
}


function resetButton() {
    const resetBtn = document.querySelector("#reset");
    resetBtn.addEventListener("click", (event) => {
        deleteGridBox();
        createGridBox();
    });
}


function newGridButton() {
    const btn = document.querySelector('#newGrid');
    btn.addEventListener("click", (event) => {
        squaresNumber = +prompt("Number of sqares per side?");
        if (squaresNumber < 1 || squaresNumber > 100) {
            alert("You can choose from 1 up to 100 squares per side");
        }
        else {
            deleteGridBox()
            createGridBox();
        }
    });
}


function colorButtons() {
    const colorsDiv = document.querySelector(".colors");
    colorsDiv.addEventListener("click", (event) => {
        if (event.target.id == "gray") {
            color = "#303841";
        }
        else if (event.target.id == "white") {
            color = "#ffffff";
        }
        else if (event.target.id == "red") {
            color = "#FF0052";
        }
        else if (event.target.id == "green") {
            color = "#00C68D";
        }
        else if (event.target.id == "blue") {
            color = "#0055DA";
        }
    });
}


function main() {
    createGridBox(16);
    newGridButton();
    resetButton();
    colorButtons();
}


main();