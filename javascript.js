function addBox() {
    const container = document.querySelector(".container");
    const box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "#303841";
    })

    container.appendChild(box);
}


function createGridBox(sideNumber) {
    // Creates a grid of 16 boxes

    for (let i = 0; i < sideNumber * sideNumber; i++) {
        addBox();
    }
}


function newGridButton() {
    const btn = document.querySelector('#newGrid');
    let squaresNumber = 0;
    btn.addEventListener("click", (event) => {
        squaresNumber = +prompt("Number of sqares per side?");
        if (squaresNumber < 1 || squaresNumber > 100) {
            alert("You can choose from 1 up to 100 squares per side");
        }
    });
}


function main() {
    createGridBox(16);
    newGridButton();
}


main();