function addBox() {
    const container = document.querySelector(".container");
    const box = document.createElement("div");
    box.classList.add("box");

    container.appendChild(box);
}