window.addEventListener("DOMContentLoaded", main);

function main() {
    loadFirstScene();
}

function loadFirstScene() {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const button1 = document.createElement("button1");

    div.classList = "container";
    p.classList = "text-style";
    button1.classList ="button1-style";

    p.textContent = "You are a young bounty hunter who has been falsely sentenced to spend the rest of your life in prison for a crime that you did not commit. One night you are awakened in your cell by a strange voice calling out from the other side of the prison bars.";
    button1.textContent = "Continue";
    button1.onclick = loadSecondScene;

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(p);
    div.appendChild(button1);
    
}

function loadSecondScene() {
    const div = document.createElement("div");
    const imgDiv = document.createElement("div");
    const p = document.createElement("p");
    const button1 = document.createElement("button1");

    div.classList = "container";
    imgDiv.classList = "imageSecondScene";
    p.classList = "text-style";
    button1.classList ="button1-style";

    p.textContent = "As you get closer you spot a mysterious hooded man gesturing for you to come closer...";
    button1.textContent = "Continue";
    button1.onclick = loadThirdScene;

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(imgDiv);
    div.appendChild(p);
    div.appendChild(button1);
    
}

function loadThirdScene() {
    const div = document.createElement("div");
    const imgDiv = document.createElement("div");
    const speakerName = document.createElement("p");
    const p = document.createElement("p");
    const button1 = document.createElement("button1");

    div.classList = "container";
    imgDiv.classList = "imageSecondScene";
    speakerName.classList = "speaker-name"
    p.classList = "text-style";
    button1.classList ="button1-style";

    speakerName.textContent = "Hooded stranger"
    p.textContent = "Well met prisoner, I have heard about your sentencing and how you deem it to be unjust. I do not have the authority to assist you to abolish you for your crimes. however, I can still offer you a way out of here on the condition that you provide me with your services as a bounty hunter";
    button1.textContent = "Continue";
    button1.onclick = loadFourthScene;

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(imgDiv);
    div.appendChild(speakerName);
    div.appendChild(p);
    div.appendChild(button1);
    
}

function loadFourthScene() {
    const div = document.createElement("div");
    const imgDiv = document.createElement("div");
    const speakerName = document.createElement("p");
    const p = document.createElement("p");
    const button1 = document.createElement("button1");

    div.classList = "container";
    imgDiv.classList = "imageSecondScene";
    speakerName.classList = "speaker-name"
    p.classList = "text-style";
    button1.classList ="button1-style";

    speakerName.textContent = "Hooded stranger"
    p.textContent = "";
    button1.textContent = "Continue";
    button1.onclick = loadFourthScene;

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(imgDiv);
    div.appendChild(speakerName);
    div.appendChild(p);
    div.appendChild(button1);
    
}