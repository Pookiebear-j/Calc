let display = document.getElementById('display');
let currentInput = '';
let isResultDisplayed = false;

function appendCharacter(character) {
    if (isResultDisplayed) {
        currentInput = '';
        isResultDisplayed = false;
    }
    currentInput += character;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
        isResultDisplayed = true;
    } catch (error) {
        display.innerText = 'Error';
        currentInput = '';
    }
}
