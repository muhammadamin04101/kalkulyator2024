let display = document.getElementById('display');
function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = 'clear';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = '';
    }
}