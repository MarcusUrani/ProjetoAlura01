const periodsInput = document.querySelector("#period__input");
const formSubmitButton = document.querySelector("#submit__button");
const form = document.querySelector(".main__form");
const result = document.querySelector(".main__result");
const resultContainer = document.querySelector(".main__result__container");
const nameInput = document.querySelector("#name__input");
const averageInput = document.querySelector("#average__input");

formSubmitButton.addEventListener("click", function (event) {
  event.preventDefault();
  form.innerHTML = "";
  const periods = periodsInput.value;
  const averageValue = averageInput.value;
  if (periods && periods < 5 && periods > 1) {
    formSubmitButton.disabled = true;
    loopInputs(periods);
    form.innerHTML += `<button class="main__button" id="calc__button" type="submit" onclick="calcAverage(${periods}, event, ${averageValue})">Calcular</button>`;
  } else {
    form.innerHTML = `<p class="main__error">Preencha os campos corretamente</p>`;
  }
});

const calcAverage = (periods, event, averageValue) => {
  event.preventDefault();
  const nameValue = nameInput.value;
  let gradeValues = [];
  for (let i = periods; i > 0; i--) {
    const input = document.querySelector(`#period__${i}`);
    gradeValues.push(input.value);
  }
  const average =
    gradeValues.reduce((acc, cur) => Number(acc) + Number(cur), 0) / periods;
  insertResult(average, averageValue, nameValue);
};

const insertResult = (average, averageValue, nameValue) => {
  if (average >= averageValue) {
    result.classList.remove("disabled");
    result.classList.add("green");
    resultContainer.innerHTML = `<p class="main__result-text">Parabéns ${nameValue}, você foi aprovado!</p>
  <p class="main__result-text">Sua média final é ${average.toFixed(1)}</p>
  <button class="main__button close__button" onclick="closeModal()">Fechar</button>
  `;
  } else {
    result.classList.remove("disabled");
    result.classList.add("red");
    resultContainer.innerHTML = `<p class="main__result-text">Infelizmente você foi reprovado, ${nameValue}!</p>
  <p class="main__result-text">Sua média final é ${average.toFixed(1)}</p>
  <button class="main__button close__button" onclick="closeModal()">Fechar</button>`;
  }
};

const loopInputs = (periods) => {
  for (let i = periods; i > 0; i--) {
    const newLabel = document.createElement("label");
    const newInput = document.createElement("input");
    newLabel.textContent = `${i}º Período`;
    newLabel.htmlFor = `period__${i}`;
    newLabel.classList.add("main__label");
    newInput.id = `period__${i}`;
    newInput.classList.add("main__input");
    newInput.placeholder = "Digite a nota do período";
    newInput.required = true;
    newInput.type = "number";
    form.appendChild(newLabel);
    form.appendChild(newInput);
  }
};

const closeModal = () => {
  result.classList.add("disabled");
};
