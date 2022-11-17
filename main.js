window.addEventListener("DOMContentLoaded", main);

function main() {
    loadFirstScene();
}

function loadFirstScene() {
    const div = document.createElement("div");
    const imgDiv = document.createElement("div");
    const p = document.createElement("p");
    const button = document.createElement("button");

    div.classList = "container";
    imgDiv.classList = "image";
    p.classList = "text-style";
    button.classList ="button-style";

    div.textContent = " "
    p.textContent = "You are a young aspiring bounty hunter in the land of Varhelle struggling to makes ends meet because of your lack of experience. Despite being adviced not to, you desperately accept a bounty to slay a deranged murderer who has been ravaging the nearby village";
    button.textContent = "Continue";

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(imgDiv);
    div.appendChild(p);
    div.appendChild(button);
    
}