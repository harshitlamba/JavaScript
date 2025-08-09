const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

let savedJobs = [];

inputEl.addEventListener("input", function() {
    this.style.backgroundColor = this.value.trim() !== "" ? "azure" : "";
})

inputBtn.addEventListener("click", function() {
    savedJobs.push(inputEl.value);
    ulEl.textContent = null;
    for (i = 0; i < savedJobs.length; i++) {
        ulEl.innerHTML += "<li>" + savedJobs[i] + "</li>";
    }
})


