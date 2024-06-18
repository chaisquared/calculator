let display = document.getElementById('display')
let clear = document.getElementById('clear')


function onNumberClick(event) {
    let targetElem = event.target
    display.textContent += targetElem.textContent
}


function clearDisplay() {
    display.textContent = ""
}
clear.addEventListener("click", clearDisplay)

let allNumberButtons = document.querySelectorAll('.number-btn')

for (let i = 0; i < allNumberButtons.length; i++) {
    allNumberButtons[i].addEventListener("click", onNumberClick)
}


let operators = document.querySelectorAll('.operation-btn')
let equals = document.getElementById('equals')
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", operate)
}

for (let i = 0; i < 1; i++) {
    equals.addEventListener("click", math)
}


let firstValue
let operator

function operate(ev) {
    firstValue = Number(display.textContent)
    operator = ev.target.textContent
    clearDisplay()
}



function math() {
    let secondValue = Number(display.textContent)
    let solution
    debugger
    if (operator == "+") {
        solution = (firstValue + secondValue)
    } else if (operator == "-") {
        solution = (firstValue - secondValue)
    } else if (operator == "x") {
        solution = (firstValue * secondValue)
    } else if (operator == "/") {
        solution = (firstValue / secondValue)
    }
    clearDisplay()
    display.textContent = solution
}




