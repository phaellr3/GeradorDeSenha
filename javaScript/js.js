const pwEl = document.getElementById("pw");
const lengthEl = document.getElementById("length");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%¨&*()_+=^~}{[]|";

// Funções para obter caracteres aleatórios
function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}


function generatePassword() {
    const len = lengthEl.value;  
    let password = "";
    const typesArray = [];

    
    if (upperEl.checked) typesArray.push(getUpperCase);
    if (lowerEl.checked) typesArray.push(getLowerCase);
    if (numberEl.checked) typesArray.push(getNumber);
    if (symbolsEl.checked) typesArray.push(getSymbol);

    if (typesArray.length === 0) {
        alert("Por favor, selecione pelo menos uma opção!");
        return;
    }

    for (let i = 0; i < len; i++) {
        const randomFunc = typesArray[Math.floor(Math.random() * typesArray.length)];
        password += randomFunc();
    }

    // Mostra a senha gerada no elemento HTML
    pwEl.innerText = password;
}

// Evento para gerar a senha ao clicar no botão
generateEl.addEventListener("click", generatePassword);