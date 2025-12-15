console.log("online");
let arrayForExtraction = [];

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
  arrayForExtraction = [];
  for (let i = 0; i < num; i++) {
    arrayForExtraction.push(i);
  }
};

boxesGenerator(n);

const arrayExtracted = [];

// console.log(arrayForExtraction);

const randomNumber = (arr) => {
  const numberExtracted = Math.floor(Math.random() * arr.length);
  let result = arr[numberExtracted];
  arr.splice(numberExtracted, 1);
  //   console.log(arr);
  return result;
};

const drawing = () => {
  const random = randomNumber(arrayForExtraction) + 1;
  arrayExtracted.push(random);
  const div = document.getElementById(random);
  div.classList.add("selected");
};

const button = document.getElementById("estrai");
button.addEventListener("click", function () {
  drawing();
  //   console.log(arrayExtracted);
});
