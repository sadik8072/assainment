const allBtnSet = document.getElementsByClassName("complete-btn");

let count = 23;
let countSet = 6;
for (const btn of allBtnSet) {
  btn.addEventListener("click", function (e) {
    if (allBtnSet === 1) {
    } else {
      alert("success full");
    }
    count = count + 1;
    document.getElementById("sit").innerText = count;
    countSet = countSet - 1;
    document.getElementById("sit-let").innerText = countSet;

    const container = document.getElementById("transaction-container");
    const div = document.createElement("div");
    div.innerHTML = `
    <p class="bg-[#F4F7FF] font-bold mt-4 px-1">You have Complete The Task Add Dark Mode at 12:48:15 PM</p>
    `;
    container.appendChild(div);
  });
}

function addBtn1() {
  document.getElementById("test1").setAttribute("disabled", true);
}
function addBtn2() {
  document.getElementById("test2").setAttribute("disabled", true);
}
function addBtn3() {
  document.getElementById("test3").setAttribute("disabled", true);
}
function addBtn4() {
  document.getElementById("test4").setAttribute("disabled", true);
}
function addBtn5() {
  document.getElementById("test5").setAttribute("disabled", true);
}
function addBtn6() {
  document.getElementById("test6").setAttribute("disabled", true);
}

function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}

document.getElementById("cashout-box").addEventListener("click", function () {
  handleToggle("cashout-box", "block");
  handleToggle("transaction-container", "none");
});

function btnBg() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b}) `;
}

function changeRgb() {
  document.body.style.background = btnBg();
}