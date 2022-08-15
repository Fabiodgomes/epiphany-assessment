const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const option5 = document.querySelector(".option5");

const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");
const q5 = document.querySelector(".q5");

const next1 = document.querySelector(".next1");
const next2 = document.querySelector(".next2");
const next3 = document.querySelector(".next3");
const next4 = document.querySelector(".next4");
const next5 = document.querySelector(".next5");

const survey = document.querySelector(".survey");

const yes = document.querySelector(".yes");
const no = document.querySelector(".no");

option1 &&
    option1.addEventListener("click", function(e) {
        q1.style.display = "none";
        q2.style.display = "block";
    });

option2 &&
    option2.addEventListener("click", function(e) {
        q2.style.display = "none";
        q3.style.display = "block";
    });

option3 &&
    option3.addEventListener("click", function(e) {
        q3.style.display = "none";
        q4.style.display = "block";
    });

option4 &&
    option4.addEventListener("click", function(e) {
        q4.style.display = "none";
        q5.style.display = "block";
    });

option5 &&
    option5.addEventListener("click", function(e) {
        q5.style.display = "none";
        q1.style.display = "block";
    });

next1.addEventListener("click", function(e) {
    // using same function for all buttons, but the display is not working for the first one ?
    console.log("Q2 STYLE", q2.style);
    q1.style.display = "none";
    q2.style.display = "block";
});

next2.addEventListener("click", function(e) {
    q2.style.display = "none";
    q3.style.display = "block";
});

next3.addEventListener("click", function(e) {
    q3.style.display = "none";
    q4.style.display = "block";
});

next4.addEventListener("click", function(e) {
    q4.style.display = "none";
    q5.style.display = "block";
});

next5.addEventListener("click", function(e) {
    q5.style.display = "none";
    q1.style.display = "block";
});

//dataTransfer.setData() method sets the data type and the value of the dragged data
// the data type is "text" and the value is the id of the draggable element

function onDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    console.log("DRAGGED");
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event.dataTransfer.getData("text/plain");
    const draggableElement = document.getElementById(id);
    console.log("ID", id);
    const dropzone = event.target;
    console.log("DROPZONE", dropzone);
    dropzone.appendChild(draggableElement);
    event.dataTransfer.clearData();
}