window.addEventListener("DOMContentLoaded", main);

function main() {
    loadFirstScene();
}

function loadFirstScene() {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const button = document.createElement("button");

    div.classList = "container"
    button.classList ="button-style"

    div.textContent = " "
    p.textContent = "You are a young aspiring bounty hunter in the land of Varhelle struggling to makes ends meet because of your lack of experience...";
    button.textContent = "Continue";

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(p);
    div.appendChild(button);
    
}