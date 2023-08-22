// let showPromptButton = document.getElementById('showPrompt');
// let resultSpan = document.getElementById('result');
//
// showPromptButton.addEventListener('click', () => {
//     let userInput = prompt('Введите текст:');
//     if (userInput !== null) {
//         resultSpan.textContent = userInput;
//     }
// });




// let num1Input = document.getElementById('num1');
// let num2Input = document.getElementById('num2');
// let addButton = document.getElementById('add');
// let subtractButton = document.getElementById('subtract');
// let multiplyButton = document.getElementById('multiply');
// let divideButton = document.getElementById('divide');
// let calculateButton = document.getElementById('calculate');
// let result = document.getElementById('result');
//
// addButton.addEventListener('click', () => performOperation('+'));
// subtractButton.addEventListener('click', () => performOperation('-'));
// multiplyButton.addEventListener('click', () => performOperation('*'));
// divideButton.addEventListener('click', () => performOperation('/'));
//
// function performOperation(operator) {
//     let num1 = parseFloat(num1Input.value);
//     let num2 = parseFloat(num2Input.value);
//
//     if (isNaN(num1) || isNaN(num2)) {
//         resultSpan.textContent = 'Ошибка: Введите числа';
//         return;
//     }
//
//     switch (operator) {
//         case '+':
//             resultSpan.textContent = num1 + num2;
//             break;
//         case '-':
//             resultSpan.textContent = num1 - num2;
//             break;
//         case '*':
//             resultSpan.textContent = num1 * num2;
//             break;
//         case '/':
//             if (num2 === 0) {
//                 resultSpan.textContent = 'Ошибка: Деление на ноль';
//             } else {
//                 resultSpan.textContent = num1 / num2;
//             }
//             break;
//         case '=':
//             resultSpan.textContent = 'Выберите операцию';
//             break;
//         default:
//             resultSpan.textContent = 'Ошибка: Неизвестная операция';
//             break;
//     }
// }




const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');
const resetButton = document.getElementById('resetButton');

let count = 0;

incrementButton.onclick = () => {
    count++;
    counterElement.textContent = count;
};

decrementButton.onclick = () => {
    count--;
    counterElement.textContent = count;
};

resetButton.onclick = () => {
    count = 0;
    counterElement.textContent = count;
};