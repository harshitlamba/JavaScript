const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

let savedJobs = [];

inputEl.addEventListener("input", function() {
    this.style.backgroundColor = this.value.trim() !== "" ? "azure" : "";
})

inputBtn.addEventListener("click", function() {
    if (inputEl.value != null && inputEl.value != "") {
        savedJobs.push(inputEl.value);
        inputEl.value = null;
    }
    renderJobs();
})

function renderJobs() {
    ulEl.textContent = null;
    for (i = 0; i < savedJobs.length; i++) {
        const newListEle = document.createElement("li")
        newListEle.textContent = savedJobs[i];
        ulEl.append(newListEle);
    }
}


