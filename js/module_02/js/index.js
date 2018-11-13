'use strict';

const numbers = [ ];
let userInput;
let total = 0 ;

do {
    userInput = prompt('Введите число');
    
    if (!Number.isNaN(+userInput) && userInput !== null) {
      numbers.push(+userInput);
    } else if (userInput !== null) {
      alert('Не число');
    }
  } while (userInput !== null);
  
  if(numbers.length > 0) {
    for(const value of numbers) {
      total += value;
    }
    alert(`Общая сумма чисел ${total}`);
  }