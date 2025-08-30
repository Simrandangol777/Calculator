const display = document.getElementById('display');
const clickSound = document.getElementById('clickSound');

function palySound() {
    clickSound.currentTime = 0;
    clickSound.play();
}

function append(value) {
    palySound();
    if (display.textContent === '0') display.textContent = '';
    display.textContent += value;
}

function clearDisplay() {
    palySound();
    display.textContent = '0';
}

function deleteLast() {
    palySound();
    if(display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else{
        clearDisplay();
    }
}

function calculate() {
    palySound();
    try{
        display.textContent = eval(display.textContent);
    } catch{
        display.textContent = 'Error';
    }
}

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if ((/\d|[+\-*/%.]/).test(key)){
        append(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key.toLocaleLowerCase() === 'c') {
        clearDisplay();
    }
});