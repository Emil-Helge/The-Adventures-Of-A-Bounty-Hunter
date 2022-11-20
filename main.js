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
    button1.classList ="button-style";

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
    imgDiv.classList = "imgHoodedStranger";
    p.classList = "text-style";
    button1.classList ="button-style";

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
    const button2 = document.createElement("button2");

    div.classList = "container";
    imgDiv.classList = "imgHoodedStranger";
    speakerName.classList = "speaker-name"
    p.classList = "text-style";
    button1.classList ="button-style";
    button2.classList ="button-style";

    speakerName.textContent = "Hooded stranger"
    p.textContent = "Well met prisoner, I have heard about your sentencing and how you deem it to be unjust. I do not have the authority to assist you to abolish your crimes. however, I can still offer you a way out of here on the condition that you provide me with your services as a bounty hunter";
    button1.textContent = "Continue";
    button1.onclick = loadFourthScene;
    button2.textContent = "Decline his offer";
    button2.onclick = loadDeclinedOfferScene;

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(imgDiv);
    div.appendChild(speakerName);
    div.appendChild(p);
    div.appendChild(button1);
    div.appendChild(button2);   
}

function loadDeclinedOfferScene() {
    const div = document.createElement("div");
    const imgDiv = document.createElement("div");
    const speakerName = document.createElement("p");
    const p = document.createElement("p");
    const button1 = document.createElement("button1");

    div.classList = "container";
    imgDiv.classList = "imgHoodedStranger";
    speakerName.classList = "speaker-name"
    p.classList = "text-style";
    button1.classList ="button-style";

    speakerName.textContent = "Hooded stranger"
    p.textContent = "Bahh...very well then! Enjoy spending the rest of your days in this dreadful cell";
    button1.textContent = "Continue";
    button1.onclick = loadEndingScene;

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(imgDiv);
    div.appendChild(speakerName);
    div.appendChild(p);
    div.appendChild(button1);   
}

function loadEndingScene() {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const button1 = document.createElement("button1");

    div.classList = "container";
    p.classList = "text-style-end";
    button1.classList ="button-style";

    p.textContent = "GAME OVER";
    button1.textContent = "Try again";
    button1.onclick = loadFirstScene;

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(p);
    div.appendChild(button1);
}

function loadFourthScene() {
    const div = document.createElement("div");
    const imgDiv = document.createElement("div");
    const speakerName = document.createElement("p");
    const p = document.createElement("p");
    const button1 = document.createElement("button1");
    const button2 = document.createElement("button2");

    div.classList = "container";
    imgDiv.classList = "imgHoodedStranger";
    speakerName.classList = "speaker-name"
    p.classList = "text-style";
    button1.classList ="button-style";
    button2.classList ="button-style";

    speakerName.textContent = "Hooded stranger"
    p.textContent = "";
    button1.textContent = "Continue";
    button1.onclick = loadFourthScene;
    button2.textContent = "Decline his offer";

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(imgDiv);
    div.appendChild(speakerName);
    div.appendChild(p);
    div.appendChild(button1);
    div.appendChild(button2);
    
}