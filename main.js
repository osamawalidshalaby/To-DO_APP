const inputText = document.getElementById("input-text");

const listContainer = document.getElementById("list-container");
function addTask() {
  if (inputText.value === "") {
    alert("You Must Write Task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputText.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);
  }
  inputText.value === "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if ((e.target.tagName = "SPAN")) {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

const box = document.getElementById("to");
const div = document.getElementById("change");
const right = document.getElementById("right");

document.addEventListener("click" , function(e){
  if(e.target.className === "change"){
    box.classList.toggle("black")
    right.classList.toggle("left")
  }
})