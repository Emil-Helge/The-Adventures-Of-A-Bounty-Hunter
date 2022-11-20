window.addEventListener("DOMContentLoaded", main);

let username = "";
let bountyLetter = false;

function main() {
    inventory = {}
    loadIntroductionScene();
}

function loadIntroductionScene() {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const button1 = document.createElement("button1");

    div.classList = "container";
    p.classList = "text-style";
    button1.classList ="button-style";

    p.textContent = "You are a young bounty hunter who has been falsely sentenced to spend the rest of your life in prison for a crime"+
                    " that you did not commit. One night you are awakened in your cell by a strange voice calling out from"+
                    " the other side of the prison bars.";
    button1.textContent = "Continue";
    button1.onclick = loadSecondIntroductionScene;
    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(p);
    div.appendChild(button1);
}

function loadSecondIntroductionScene() {
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
    button1.onclick = loadHoodedStrangerEntranceScene;

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(imgDiv);
    div.appendChild(p);
    div.appendChild(button1);
}

function loadHoodedStrangerEntranceScene() {
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
    p.textContent = "Well met prisoner, I have heard about your sentencing and how you deem it to be unjust."+ 
                    " I do not have the authority to assist you with abolishing your crimes. however, I can still offer you a way"+
                    " out of here on the condition that you provide me with your services as a bounty hunter";
    button1.textContent = "Accept his offer";
    button1.onclick = loadAcceptedOfferScene;
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
    button1.onclick = loadIntroductionScene;

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(p);
    div.appendChild(button1);
}

function loadAcceptedOfferScene() {
    const div = document.createElement("div");
    const imgDiv = document.createElement("div");
    const speakerName = document.createElement("p");
    const p = document.createElement("p");
    const button1 = document.createElement("button1");
    const usernameInput = document.createElement("input");

    div.classList = "container";
    imgDiv.classList = "imgHoodedStranger";
    speakerName.classList = "speaker-name"
    p.classList = "text-style";
    button1.classList = "button-style";

    speakerName.textContent = "Hooded stranger"
    p.textContent = "Splendid! Even though I have heard about your alledged crimes and of your history as a bounty hunter I am still"+ 
                    " not aware of your name. What shall I call you?";

    button1.textContent = "Continue";
    button1.onclick = loadAssignedBountyScene;

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(imgDiv);
    div.appendChild(speakerName);
    div.appendChild(p);
    div.appendChild(usernameInput);
    usernameInput.oninput = function() {
        username = usernameInput.value;
    }
    div.appendChild(button1);
}

function loadAssignedBountyScene() {
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
    p.textContent = "Good to meet you" + " " + username + ". " + "Now that I know what to call you we can proceed with what I require of you."+
                    " Once I get you out of here, you are to immedately begin tracking your assigned bounty and return to me with proof of kill."+
                    " Take this note, in it you will find further information about your bounty and the location of my hideout just outside of town."+
                    " Time is running short and the guards may arrive at any minute now so put the note aside for now and come with me.";
    bountyLetter = true;
    console.log(bountyLetter);
    button1.textContent = "Continue";
    button1.onclick = loadAcceptedOfferScene;
    button2.textContent = "Read the letter now";
    button2.onclick = loadAcceptedOfferScene;

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(imgDiv);
    div.appendChild(speakerName);
    div.appendChild(p);
    div.appendChild(button1);
    div.appendChild(button2);
}

function loadWeaponChoiceScene() {
    const div = document.createElement("div");
    const imgDiv = document.createElement("div");
    const speakerName = document.createElement("p");
    const p = document.createElement("p");
    const button1 = document.createElement("button1");
    const button2 = document.createElement("button2");
    const button3 = document.createElement("button3");
    const button4 = document.createElement("button4");

    div.classList = "container";
    imgDiv.classList = "imgHoodedStranger";
    speakerName.classList = "speaker-name"
    p.classList = "text-style";
    button1.classList ="button-style";
    button2.classList ="button-style";
    button3.classList ="button-style";
    button4.classList ="button-style";

    speakerName.textContent = "Hooded stranger"
    p.textContent = "";
    button1.textContent = "Continue";
    button1.onclick = loadAcceptedOfferScene;
    button2.textContent = "Decline his offer";
    button2.onclick = loadAcceptedOfferScene;
    button3.textContent = "Continue";
    button3.onclick = loadAcceptedOfferScene;
    button4.textContent = "Decline his offer";
    button4.onclick = loadAcceptedOfferScene;

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(imgDiv);
    div.appendChild(speakerName);
    div.appendChild(p);
    div.appendChild(button1);
    div.appendChild(button2);
    div.appendChild(button3);
    div.appendChild(button4);
}