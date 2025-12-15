console.log("online");

// nel caso di 90 numeri generiamo 15 numeri di cui massimo 3 numeri per decina
// (la scheda sarà da 15 posizioni su righe) e minimo 1 numero, il 90 verrà
// considerato parte della decina dell'80.

// GENERATORE DI 15 NUMERI LEGITTIMI PER PARTITE DA 90

const randomNumberfor90 = () => {
  // prima di tutto generiamo un numero per decina in modo da raggiungere il minimo di 1.

  const arrayRandomNumberfor90 = [];

  arrayRandomNumberfor90[0] = Math.floor(Math.random() * 9) + 1;
  for (let i = 1; i < 8; i++) {
    arrayRandomNumberfor90[i] = Math.floor(Math.random() * 10) + 10 * i;
  }
  arrayRandomNumberfor90[8] = Math.floor(Math.random() * 11) + 80;

  let tempArrayForSecondRun = [];

  let arrayForInternalExtraction = [];

  for (let i = 0; i < 90; i++) {
    arrayForInternalExtraction.push(i + 1);
  }

  {
    for (let i = 0; i < 9; i++) {
      arrayForInternalExtraction = arrayForInternalExtraction.filter((value) => value !== arrayRandomNumberfor90[i]);
    }
  }

  let arrayOfArray090 = [];

  arrayOfArray090[0] = arrayForInternalExtraction.slice(0, 8);
  arrayOfArray090[1] = arrayForInternalExtraction.slice(8, 17);
  arrayOfArray090[2] = arrayForInternalExtraction.slice(17, 26);
  arrayOfArray090[3] = arrayForInternalExtraction.slice(26, 35);
  arrayOfArray090[4] = arrayForInternalExtraction.slice(35, 44);
  arrayOfArray090[5] = arrayForInternalExtraction.slice(44, 53);
  arrayOfArray090[6] = arrayForInternalExtraction.slice(53, 62);
  arrayOfArray090[7] = arrayForInternalExtraction.slice(62, 71);
  arrayOfArray090[8] = arrayForInternalExtraction.slice(71, 81);

  for (let i = 0; i < 9; i++) {
    for (let l = 0; l < 2; l++) {
      let extraction = Math.floor(Math.random() * arrayOfArray090[i].length);
      extraction = arrayOfArray090[i][extraction];
      tempArrayForSecondRun.push(extraction);
      arrayOfArray090[i] = arrayOfArray090[i].filter((number) => number !== extraction);
    }
  }

  for (let i = 0; i < 6; i++) {
    let extraction = Math.floor(Math.random() * tempArrayForSecondRun.length);
    extraction = tempArrayForSecondRun[extraction];
    arrayRandomNumberfor90.push(extraction);
    tempArrayForSecondRun = tempArrayForSecondRun.filter((number) => number !== extraction);
  }

  arrayRandomNumberfor90.sort((a, b) => a - b);
  let arrayToReorder = [...arrayRandomNumberfor90];

  // procediamo ora a riordinare le schedine come si trovano solitamente

  arrayRandomNumberfor90[1 - 1] = arrayToReorder[1 - 1];
  arrayRandomNumberfor90[2 - 1] = arrayToReorder[4 - 1];
  arrayRandomNumberfor90[3 - 1] = arrayToReorder[7 - 1];
  arrayRandomNumberfor90[4 - 1] = arrayToReorder[10 - 1];
  arrayRandomNumberfor90[5 - 1] = arrayToReorder[13 - 1];
  arrayRandomNumberfor90[6 - 1] = arrayToReorder[2 - 1];
  arrayRandomNumberfor90[7 - 1] = arrayToReorder[5 - 1];
  arrayRandomNumberfor90[8 - 1] = arrayToReorder[8 - 1];
  arrayRandomNumberfor90[9 - 1] = arrayToReorder[11 - 1];
  arrayRandomNumberfor90[10 - 1] = arrayToReorder[14 - 1];
  arrayRandomNumberfor90[11 - 1] = arrayToReorder[3 - 1];
  arrayRandomNumberfor90[12 - 1] = arrayToReorder[6 - 1];
  arrayRandomNumberfor90[13 - 1] = arrayToReorder[9 - 1];
  arrayRandomNumberfor90[14 - 1] = arrayToReorder[12 - 1];
  arrayRandomNumberfor90[15 - 1] = arrayToReorder[15 - 1];

  return arrayRandomNumberfor90;
};

// GENERATORE DI 24 NUMERI LEGITTIMI PER PARTITE DA 76

const randomNumberfor76 = () => {
  let arrayForInternalExtraction = [];
  for (let i = 0; i < 76; i++) {
    arrayForInternalExtraction[i] = i + 1;
  }

  let arrayOfResultfor24 = [];
  for (let i = 0; i < 24; i++) {
    let extraction = Math.floor(Math.random() * arrayForInternalExtraction.length);
    extraction = arrayForInternalExtraction[extraction];
    arrayOfResultfor24.push(extraction);
    arrayForInternalExtraction = arrayForInternalExtraction.filter((number) => number !== extraction);
  }
  arrayOfResultfor24.sort((a, b) => a - b);
  return arrayOfResultfor24;
};

randomNumberfor76();

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
  const tabelline = document.querySelector("#tabelline");
  tabelline.innerHTML = "";
  const slipNumber = document.querySelector("#slipNumber");
  slipNumber.valueAsNumber = 0;
  boxesGenerator(n);
}

radio90.addEventListener("change", onNumChange);
radio76.addEventListener("change", onNumChange);

const slipNumber = document.querySelector("#slipNumber");
let number = 0;

function update() {
  number = slipNumber.valueAsNumber;
  const tabelline = document.querySelector("#tabelline");
  tabelline.innerHTML = "";
  console.log(number);
  if (n === 90) {
    for (let i = 0; i < number; i++) {
      let array = randomNumberfor90();
      const tabelline = document.querySelector("#tabelline");
      const div = document.createElement("div");
      div.classList.add("container2");
      div.id = "sl" + i + 1;
      tabelline.appendChild(div);
      for (let l = 0; l < 15; l++) {
        const div2 = document.createElement("div");
        const h3 = document.createElement("h3");
        h3.innerText = array[l];
        div2.appendChild(h3);
        div2.classList.add("num2");
        div2.classList.add("n" + array[l] + "n");
        div.appendChild(div2);
      }
    }
  } else if (n === 76) {
    for (let i = 0; i < number; i++) {
      let array = randomNumberfor76();
      console.log(array);
      const tabelline = document.querySelector("#tabelline");
      const div = document.createElement("div");
      div.classList.add("container2");
      div.id = "sl" + i + 1;
      tabelline.appendChild(div);
      for (let l = 0; l < 24; l++) {
        const div2 = document.createElement("div");
        const h3 = document.createElement("h3");
        h3.innerText = array[l];
        div2.appendChild(h3);
        div2.classList.add("num2");
        div2.classList.add("n" + array[l] + "n");
        div.appendChild(div2);
      }
    }
  }
}

slipNumber.addEventListener("input", update);
update();

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

  const div2 = document.querySelectorAll(".n" + random + "n");
  div2.forEach((el) => {
    el.classList.add("selected");
  });
};

const button = document.getElementById("estrai");
button.addEventListener("click", function () {
  drawing();
  // console.log(arrayExtracted);
});
