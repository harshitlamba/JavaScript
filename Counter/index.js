// document.getElementById("count").innerText = 5

/* 
1. initialize count to 0
2. listen for the increment button click action
3. increment the count by 1 on button click
4. display the updated count on html
*/

let cnt = 0;
// the variables can store the entire html elements which enable us to use these in JS
// this technique is called DOM - Document Object Model
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")
;
function increment() {
    cnt++;
    countEl.innerText = cnt;
}

function save() {
    saveEl.innerText += " " + cnt + " -";
    cnt = 0;
    countEl.innerText = cnt;
}