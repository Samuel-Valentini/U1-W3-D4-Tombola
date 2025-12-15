console.log("online");

let n = 90;

const radio90 = document.getElementById("90tab");
const radio76 = document.getElementById("76tab");

function onNumChange() {
  n = 90;
  if (radio90.checked) {
    n = 90;
  } else if (radio76.checked) {
    n = 76;
  }
  const tabellone = document.getElementById("tabellone");
  tabellone.innerHTML = "";
  boxesGenerator(n);
}

radio90.addEventListener("change", onNumChange);
radio76.addEventListener("change", onNumChange);

const boxesGenerator = (num) => {
  const tabellone = document.getElementById("tabellone");
  for (let i = 0; i < num; i++) {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.innerText = i + 1;
    div.appendChild(h3);
    div.classList.add("num");
    div.id = i + 1;
    tabellone.appendChild(div);
  }
};

boxesGenerator(n);

const drawing = () => {
  const randomNumber = Math.floor(Math.random() * (n + 1));
  const div = document.getElementById(randomNumber);
  div.classList.add("selected");
};

const button = document.getElementById("estrai");
button.addEventListener("click", function () {
  drawing();
});
