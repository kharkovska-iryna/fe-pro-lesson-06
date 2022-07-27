// 1, Напишите функции, которая находит количество дней в заданном месяце года. Нужно также учитывать високосные года.


// function findDaysInMonth(year, month) {
//     let date = new Date(year, month + 1, 0); // (month + 1) - месяц, следующий за искомым; 0 - день перед 1-м числом следующего месяца
//     return date.getDate();
// }
// console.log("The Month has" + " " + `${findDaysInMonth(1825, 1)}`  + " " + "days");


function findDaysInMonth(month, year) {
        if((((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) && (month === 'February')) {
            return 'The Month has 29 days';
        } else if (month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December') { 
           return 'The Month has 31 days';
        } else if (month === 'February') {
            return 'The Month has 28 days';
        } else if (month === 'April' || month === 'June' || month === 'September' || month === 'November') {
            return 'The Month has 30 days';
        } else {
            return 'incorrect value'
        };
    };

console.log(findDaysInMonth('February', 2017));
console.log(findDaysInMonth('February', 2016));
console.log(findDaysInMonth('January', 2017));
console.log(findDaysInMonth('September', 2017));
console.log(findDaysInMonth('February', 2020));
console.log(findDaysInMonth('May', 1987));
console.log(findDaysInMonth('ololo', 1987));





// 2. Написать простой калькулятор.

// Запросить оператор (+, -, *, /). Если введено что-то другое, запрашивать до тех пор, пока не введут валидное значение.
// Запросить первый операнд. Обязательно проверка на число и если введено что-то другое, то запрашивать до тех пор, пока не введут валидное значение.
// Запросить второй операнд. Обязательно проверка на число и если введено что-то другое, то запрашивать до тех пор, пока не введут валидное значение.
// Вывести результат в консоль


// let operator, operand1, operand2;

// do {
//     operator = prompt('Enter one of the operators (+, -, *, /)', '');
//     console.log('Enter operator:' + ' ' + `${operator}`);
// } while (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/'
//     );
// switch (operator) {
//     case '+':
//         do {
//             operand1 = +prompt('Enter first number', '');
//             console.log('Enter first number:' + ' ' + operand1);
//         } while (isNaN(operand1));
//         do {
//             operand2 = +prompt('Enter second number', '');
//             console.log('Enter second number:' + ' ' + operand2);
//         } while (isNaN(operand2));
//             console.log(`${operand1}`+ '+' + `${operand2}` + '=' + (operand1 + operand2));
//     break;
//     case '-':
//         do {
//             operand1 = +prompt('Enter first number', '');
//             console.log('Enter first number:' + ' ' + operand1);
//         } while (isNaN(operand1));
//         do {
//             operand2 = +prompt('Enter second number', '');
//             console.log('Enter second number:' + ' ' + operand2);
//         } while (isNaN(operand2));
//             console.log(`${operand1}`+ '-' + `${operand2}` + '=' + (operand1 - operand2));
//     break;
//     case '*':
//         do {
//             operand1 = +prompt('Enter first number', '');
//             console.log('Enter first number:' + ' ' + operand1);
//         } while (isNaN(operand1));
//         do {
//             operand2 = +prompt('Enter second number', '');
//             console.log('Enter second number:' + ' ' + operand2);
//         } while (isNaN(operand2));
//             console.log(`${operand1}`+ '*' + `${operand2}` + '=' + (operand1 * operand2));
//     break;
//     case '/':
//         do {
//             operand1 = +prompt('Enter first number', '');
//             console.log('Enter first number:' + ' ' + operand1);
//         } while (isNaN(operand1));
//         do {
//             operand2 = +prompt('Enter second number', '');
//             console.log('Enter second number:' + ' ' + operand2);
//         } while (isNaN(operand2));
//             console.log(`${operand1}`+ '/' + `${operand2}` + '=' + (operand1 / operand2));
// };



// // 3. Напишите функцию, которая проверяет, являются ли две предоставленные строки анаграммами друг друга. 
// // Одна строка является анаграммой другой, если она использует те же символы в том же количестве.
// //  Обратите внимание, что строка может быть написана в разном регистре.


// function checkAnagram(str1, str2) {
//     if ((str1.length = 0) || (str2.length = 0)) {
//         return false
//     } else if (str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')) {
//         return true
//     } else {
//         return false   
// }};
// console.log(checkAnagram('skeep', 'SPeeK'));
// console.log(checkAnagram('tomato', 'Apple'));