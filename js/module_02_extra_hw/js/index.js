'use strict';

// const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
// let attempts = 3;
// let inputPass;
// do {
//     let inputPass = prompt("Enter password");
//     for (const signIn of passwords) {
//         if (signIn === inputPass){
//             alert("Добро пожаловать!");
//             break;
//         }
//             attempts = -1;
//             alert("Неверный пароль, у вас осталось"+ attempts + "попыток");
//     } while (inputPass === passwords || attempts >= +0 || signIn === null);
// alert(" ");
// console.log(attempts);

//task 1

/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.
  
  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях 
  элементы массива.
*/

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// console.log(users.length); // 4

// console.log(users[1]); // Poly
// console.log(users[4]); // Chelsey
// console.log(users[0]); // Mango
// console.log(users[3]); // Ajax

//task 2

/* Есть массив имен пользователей */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// /* Используя методы массива, последовательно выполнить следующие операции */

// // Удалить из начала массива нулевой элемент

// console.log(users.shift()); // ["Poly", "Ajax", "Chelsey"]

// // Удалить из конца массив последний элемент
// console.log(users.pop()); // ["Poly", "Ajax"]

// // Добавить в начало массива любое имя
// console.log(users.unshift('Name')); // ["добавленое имя", "Poly", "Ajax"]

// // Добавить в конец массива два любых имени за одну операцию
// console.log(users.push('Tifany','Smile')); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]

// console.log(users);

//task 3

/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/

// let arr = [];

// let string = prompt('Введите текст с нескольких слов')
// // Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
// console.log(arr.push(string.split(' ')));

// // Вывести в консоли общую длину массива arr
// console.log(arr.length);

// // Используя цикл, вывести в консоль все индексы массива arr
// let i = 0;
// while ( i <= arr.length) {
//   console.log(arr[i])
//   i += 1;
// }


// // Используя цикл, вывести в консоль все элементы массива arr
// let i = 0;
// while ( i <= arr.length) {
//   console.log(arr[i])
//   i += 1;
// }


// // Используя цикл, bывести в консоли все пары индекс:значение массива arr
// console.log();

// console.log(string);
// console.log(arr);


//task 4

/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
   Если посетитель ввёл другое число или нажал Cancel – попросить ввести ещё раз, 
   и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/
// let inputNumber;

// do {
//   inputNumber = Number( prompt('Введите число больше 100') );
// } while(inputNumber <= 100 && inputNumber != NaN);
// console.log (inputNumber)
//task 5

/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

// const min = 1;
// const maxNum = 100;

// for(let i = 0; i > min, i < maxNum; i += 1 ){
//   if (i % 3 == 0) {
//     console.log(`Fizz`);
//   }
//   if (i % 5 == 0) {
//     console.log(`Buzz`);
//   } 
//   if (i % 3 != 0 && i % 5 != 0)  {console.log (i)}
  
// }


//task 6 

/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];

// for(const value of numbers) {
//   if ( value > num){
//     newArray.push(value);
//   }
// }
// console.log (newArray)

//task 7 

/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const string = "May the force be with you";
// var longestWord ="" ;

// let arr = string.split(" ")

// for ( const value of arr) {
//   if (value.length > longestWord.length) {
//     var longestWord = value;
//   } 
// }
// console.log(arr)
// console.log(longestWord); // 'force'

//task 8 

/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/

// const numbers = [ ];
// let userInput;
// let total = 0 ;

// do {
//     userInput = prompt('Введите число');
    
//     if (!Number.isNaN(+userInput) && userInput !== null) {
//       numbers.push(+userInput);
//     } else if (userInput !== null) {
//       alert('Не число');
//     }
//   } while (userInput !== null);
  
//   if(numbers.length > 0) {
//     for(const value of numbers) {
//       total += value;
//     }
//     alert(`Общая сумма чисел ${total}`);
//   }
//task 9 

/*
  ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ***
  
  Создайте игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Но пользователь может ввести что угодно, необходимо проверить 
  что было введено. Преобразовать input в числовой тип и проверить 
  число ли это.
  
    - Если не число - выводим alert с сообщением о том, что было 
      введено не число.
    - Если число - проверить содержит ли в себе массив numbers это число.
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

const numbers = [12, 15, 25, 37, 41];

let min = 100;

for ( const value of numbers) {
    if (value < min ) {
      min = value;
    } 
  }

let max = 0;

for ( const value of numbers) {
  if (value > max ) {
    max = value;
  } 
}

console.log(min)
console.log(max)

const input = prompt(`Введите число между ${min} и ${max}`);

if (input !== null){
  if (!Number.isNaN(+input)) {
    for ( const value of numbers) {
      if (value === +input){
        alert(`congratulations`)
      } 
      
    }
  } else {
    alert(`это не число ёпт !!`)
  }
} else {
  alert(`Отменено пользователем`)
}
console.log(input)

