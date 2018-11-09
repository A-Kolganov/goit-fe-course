'use strict';

const inputNumbers = [ ];
let writeNum ;
let total = 0 ;

do{
    writeNum = Number.parseInt(prompt ("Введите числа"));
    if (Number.isNaN (writeNum)) {
    break;
    } inputNumbers.push (writeNum);
} while( !Number.isNaN (writeNum) );

for ( let inputNumber of inputNumbers){
    total = total + inputNumber;
}

alert (`Общая сумма чисел равна ${total}`);


console.log(inputNumbers);