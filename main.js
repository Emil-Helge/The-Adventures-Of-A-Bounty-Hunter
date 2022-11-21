window.addEventListener("DOMContentLoaded", main);

let username = "";

function main() {
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
                    " Time is running short and the guards may arrive at any minute now so put the note aside for now and come with me."+
                    "*the hooded stranger unlocks the cell and heads towards the exit*";
    button1.textContent = "Follow him";
    button1.onclick = loadCellIsUnlockedScene;
    button2.textContent = "Read the letter now";
    button2.onclick = loadNoteReadingScene;

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(imgDiv);
    div.appendChild(speakerName);
    div.appendChild(p);
    div.appendChild(button1);
    div.appendChild(button2);
}

function loadNoteReadingScene() {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const p2 = document.createElement("p2");
    const button1 = document.createElement("button1");

    div.classList = "noteContainer";
    p.classList = "text-style-note";
    p2.classList = "text-style-note"
    button1.classList ="button-style-note";

    p.textContent = "This bounty is for the ruthless murderer who goes by the name 'Romulus Evilian', he is known to lure his victims"+
                    " in by pretending to be injured in the dark alleyways of town and when he has lured his victims away from the public,"+
                    " he assaults them and brings them to his lair. The whereabouts of this lair is unknown but the townsfolk have claimed to have"+
                    " spotted a man who was acting peculiar heading towards one of the abandoned houses at the edge of town that were evacuated"+
                    " due to the the fires that struck the area a couple of months back.";
    p2.textContent = "When you have completed the bounty you are to report back to me at my hideout in the southern outskirts of town."+
                     " You will be able to identify my building by the raven figurines that are placed around the estate. Once you arrive"+
                     " you have to knock five times, wait 10 seconds and then knock an additional 5 times for me know that it is you..."+
                     "DESTROY THIS NOTE ONCE YOU HAVE READ IT";
    button1.textContent = "Stop reading";
    button1.onclick = loadAssignedBountyScene;

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(button1);

    setTimeout(guardsArrivingInCell, 4000);
}

function guardsArrivingInCell() {
    const div = document.createElement("div");
    const imgDiv = document.createElement("div");
    const p = document.createElement("p");
    const button1 = document.createElement("button1");

    div.classList = "container";
    imgDiv.classList = "imgGuardsArriving";
    p.classList = "text-style";
    button1.classList ="button-style";

    p.textContent = "You took too long and the guard apprehended the hooded stranger and threw him in the cell with you."+
                    " Maybe you should have waited with reading the letter...";
    button1.textContent = "Continue";
    button1.onclick = loadEndingScene;

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(imgDiv)
    div.appendChild(p);
    div.appendChild(button1);
}

function loadCellIsUnlockedScene() {
    const div = document.createElement("div");
    const imgDiv = document.createElement("div");
    const p = document.createElement("p");
    const button1 = document.createElement("button1");

    div.classList = "container";
    imgDiv.classList = "imgDungeon";
    p.classList = "text-style";
    button1.classList ="button-style";

    p.textContent = "The hooded stranger rushes through the prison corridor and just as he goes beyond the corner you hear a large thud...";
    button1.textContent = "Continue";
    button1.onclick = loadHoodedStrangerPassedOutScene;

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(imgDiv);
    div.appendChild(p);
    div.appendChild(button1);
}

function loadHoodedStrangerPassedOutScene() {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const button1 = document.createElement("button1");
    const button2 = document.createElement("button2");

    div.classList = "PassedOutContainer";
    p.classList = "text-style";
    button1.classList ="button-style";
    button2.classList ="button-style";

    p.textContent = "You rush around the corner to find the hooded stranger passed out on the ground. He must have slipped on something."+
                    " What do you do now?";
    button1.textContent = "Put on his cloak and continue your escape";
    button1.onclick = loadEscapingOnYourOwnScene;
    button2.textContent = "Try to wake him up";
    button2.onclick = guardsArrivingInCorridor;

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(p);
    div.appendChild(button1);
    div.appendChild(button2);
}

function guardsArrivingInCorridor() {
    const div = document.createElement("div");
    const imgDiv = document.createElement("div");
    const p = document.createElement("p");
    const button1 = document.createElement("button1");

    div.classList = "container";
    imgDiv.classList = "imgGuardsArriving";
    p.classList = "text-style";
    button1.classList ="button-style";

    p.textContent = "You fail to wake him up in time and the guards apprehend you and the hooded stranger and throw both of you in your cell."
    button1.textContent = "Continue";
    button1.onclick = loadEndingScene;

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(imgDiv)
    div.appendChild(p);
    div.appendChild(button1);
}

function loadEscapingOnYourOwnScene() {
    const div = document.createElement("div");
    const imgDiv = document.createElement("div");
    const p = document.createElement("p");
    const button1 = document.createElement("button1");

    div.classList = "container";
    imgDiv.classList = "imgHoodedMainCharacter";
    p.classList = "text-style";
    button1.classList ="button-style";

    p.textContent = "With a heavy conscience you grab the strangers cloak and put it on. Vowing to fulfill his bounty and return to free the man"+
                    " who had helped you get this far once you have the appropriate tools at your disposal to stand a chance against the guards.";
    button1.textContent = "Continue";
    button1.onclick = loadSucessfullyEscapingScene;

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(imgDiv);
    div.appendChild(p);
    div.appendChild(button1);
}

function loadSucessfullyEscapingScene() {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const button1 = document.createElement("button1");

    div.classList = "NightSkyContainer";
    p.classList = "text-style";
    button1.classList ="button-style";

    p.textContent = "Disguised as the hooded you manage to slip past the remaining guards and successfully escape the prison."+
                    " Once you are outside you look up and admire the night sky and silently swear to yourself that you will fulfill your"+
                    " task and return to free the man you just left behind. But for now it is time venture out and collect your bounty.";
    button1.textContent = "Continue";
    button1.onclick = loadToBeContinuedScene;

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(p);
    div.appendChild(button1);
}

function loadToBeContinuedScene() {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const p1 = document.createElement("p1");
    const button1 = document.createElement("button1");

    div.classList = "NightSkyContainer";
    p.classList = "text-style-end";
    p1.classList = "text-style";
    button1.classList ="button-style";

    p.textContent = "TO BE CONTINUED";
    p1.textContent = "This is the end of the first chapter 'Prison Break'. Stay tuned for chapter two where "  + username + " "+
                    "will continue their journey to collect the bounty for Romulus Evilian and liberate the hooded stranger...";
    button1.textContent = "Play again?";
    button1.onclick = loadIntroductionScene;

    document.body.innerHTML = "";
    document.body.append(div);
    div.appendChild(p);
    div.appendChild(p1);
    div.appendChild(button1);
}