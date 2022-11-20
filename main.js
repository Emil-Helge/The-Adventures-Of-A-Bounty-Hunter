window.addEventListener("DOMContentLoaded", main);

function main() {
    loadFirstScene();
}

function loadFirstScene() {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const button = document.createElement("button");

    div.classList = "container";
    p.classList = "text-style";
    button.classList ="button-style";

    p.textContent = "You are a young bounty hunter who has been falsely sentenced to spend the rest of your life in prison for a crime that you did not commit. One night you are awakened in your cell by a strange voice calling out from the other side of the prison bars.";
    button.textContent = "Continue";
    button.addEventListener("click", loadSecondScene);

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(p);
    div.appendChild(button);
    
}

function loadSecondScene() {
    const div = document.createElement("div");
    const imgDiv = document.createElement("div");
    const p = document.createElement("p");
    const button = document.createElement("button");

    div.classList = "container";
    imgDiv.classList = "imageSecondScene";
    p.classList = "text-style";
    button.classList ="button-style";

    p.textContent = "As you get closer you spot a mysterious hooded man gesturing for you to come closer...";
    button.textContent = "Continue";
    button.addEventListener("click", loadThirdScene);

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(imgDiv);
    div.appendChild(p);
    div.appendChild(button);
    
}

function loadThirdScene() {
    const div = document.createElement("div");
    const imgDiv = document.createElement("div");
    const p = document.createElement("p");
    const button = document.createElement("button");

    div.classList = "container";
    imgDiv.classList = "imageSecondScene";
    p.classList = "text-style";
    button.classList ="button-style";

    p.textContent = "Hooded man: Well met prisoner, I have heard about your sentencing and how you deem it to be unjust. I do not have the authority to assist you to abolish you for your crimes. however, I can still offer you a way out of here on the condition that you provide me with your services as a bounty hunter";
    button.textContent = "Continue";
    button.addEventListener("click", loadFourthScene);

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(imgDiv);
    div.appendChild(p);
    div.appendChild(button);
    
}

function loadFourthScene() {
    const div = document.createElement("div");
    const imgDiv = document.createElement("div");
    const p = document.createElement("p");
    const button = document.createElement("button");

    div.classList = "container";
    imgDiv.classList = "imageSecondScene";
    p.classList = "text-style";
    button.classList ="button-style";

    p.textContent = "Hooded man: Well met prisoner, I have heard about your sentencing and how you deem it to be unjust. I do not have the authority to assist you to abolish you for your crimes. however, I can still offer you a way out of here on the condition that you provide me with your services as a bounty hunter";
    button.textContent = "Continue";
    button.addEventListener("click", loadFourthScene);

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(imgDiv);
    div.appendChild(p);
    div.appendChild(button);
    
}