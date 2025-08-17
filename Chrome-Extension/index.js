const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const saveTabBtn = document.getElementById("save-tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
let savedJobs = [];

const jobsFromStorage = JSON.parse(localStorage.getItem("savedJobs"));

if (jobsFromStorage) {
    savedJobs = jobsFromStorage;
    render(savedJobs);
}

function createLink(linkStr) {
    const link = document.createElement("a");
    link.textContent = linkStr;

    if (!/^http:\/\//.test(linkStr)) {
        linkStr = 'https://' + linkStr;
    }
    link.href = linkStr;
    link.target = "_blank";

    return link;
}

function render(jobs) {
    ulEl.textContent = null;
    if (jobs.length!=0) {
        jobs.forEach(job => {
        let joblink = createLink(job);
        const newListEle = document.createElement("li");
        newListEle.appendChild(joblink);
        ulEl.append(newListEle);
        });
    }
}

inputEl.addEventListener("input", function() {
    this.style.backgroundColor = this.value.trim() !== "" ? "azure" : "";
})

saveBtn.addEventListener("click", function() {
    if (inputEl.value.trim() != "") {
        let linkStr = inputEl.value.trim();
        savedJobs.push(linkStr);
        localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
        inputEl.value = "";
    }
    render(savedJobs);
})

saveTabBtn.addEventListener("click", function() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
        savedJobs.push(tabs[0].url);
        localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
        render(savedJobs);
    });
})

deleteBtn.addEventListener("click", function() {
    localStorage.clear();
    savedJobs = [];
    render(savedJobs);
})


