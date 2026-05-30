let squaresNumber = 0;

function addBox(sideNumber) {
    const container = document.querySelector(".container");
    const box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "#303841";
    })
    box.setAttribute("style", `flex: 0 0 ${100/sideNumber}%;`)

    container.appendChild(box);
}


function createGridBox(sideNumber) {
    // Creates a grid of 16 boxes
    for (let i = 0; i < sideNumber * sideNumber; i++) {
        addBox(sideNumber);
    }
}


function deleteGridBox() {
    const container = document.querySelector(".container");
    container.replaceChildren();
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
            createGridBox(squaresNumber);
        }
    });
}


function main() {
    createGridBox(16);
    newGridButton();
}


main();