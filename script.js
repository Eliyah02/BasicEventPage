const pageContainer = document.querySelector("#pageContainer");
const mainHeading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");
const greetingButton = document.querySelector("#greetingButton");
const backgroundButton = document.querySelector("#backgroundButton");
const resetButton = document.querySelector("#resetButton");
const messageArea = document.querySelector("#messageArea");

function displayGreeting() {
  const name = nameInput.value.trim();
  if (name) {
    mainHeading.textContent = `Hello, ${name}!`;
    messageArea.textContent = "Greeting displayed successfully.";
  } else {
    messageArea.textContent = "Please enter your name first.";
  }
}

function changeBackground() {
  pageContainer.style.backgroundColor = "#f0e68c"; 
  messageArea.textContent = "Background color changed!";
}

function resetPage() {
  mainHeading.textContent = "Welcome to My Event Page";
  nameInput.value = "";
  pageContainer.style.backgroundColor = "white";
  messageArea.textContent = "";
}

function showTyping() {
  messageArea.textContent = `You are typing: ${nameInput.value}`;
}

function logMouseOver(event) {
  console.log(`The mouse is over the ${event.target.id}.`);
}

greetingButton.addEventListener("click", displayGreeting);
backgroundButton.addEventListener("click", changeBackground);
resetButton.addEventListener("click", resetPage);
nameInput.addEventListener("input", showTyping);
greetingButton.addEventListener("mouseover", logMouseOver);
backgroundButton.addEventListener("mouseover", logMouseOver);
resetButton.addEventListener("mouseover", logMouseOver);