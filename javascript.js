function addBox() {
    const container = document.querySelector(".container");
    const box = document.createElement("div");
    box.classList.add("box");

    container.appendChild(box);
}


function createGridBox() {
    // Creates a grid of 16 boxes

    for (let i = 0; i < 16; i++) {
        addBox();
    }
}