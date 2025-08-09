const container = document.getElementById("container");

function getConfirmation() {
    // container.innerHTML += "<p>Thank you for buying!</p>"
    const existing = container.querySelector("p");
    if (existing) existing.remove();
    
    const message = document.createElement("p");
    message.textContent = "Thank you for buying!";
    container.appendChild(message);
}

container.innerHTML = "<button onclick=\"getConfirmation()\">Buy!</button>";