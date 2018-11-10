'use strict';

const numbers = [ ];
let userInput;
let total = +0 ;

do{
    userInput = parseInt(prompt ("Введите числа"));
    if (isNaN (userInput)) {        
    break;
    } numbers.push (userInput);
} while( !isNaN (userInput) );

for ( let a of numbers){
    total = +total + +a;
}

alert (`Общая сумма чисел равна ${total}`);


console.log(numbers);
