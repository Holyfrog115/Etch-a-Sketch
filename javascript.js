let squaresNumber = 16;

function addBox() {
    const container = document.querySelector(".container");
    const box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "#303841";
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


function main() {
    createGridBox(16);
    newGridButton();
    resetButton();
}


main();