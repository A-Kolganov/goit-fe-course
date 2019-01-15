'use strict';

// let sharm = 15;
// let hurgada = 25;
// let taba = 6;

// const buyTickets = Number.parseInt(prompt('Здраствуйте! Сколько мест Вы желаете забронировать?'));
// if ( buyTickets === Number){
//     alert("Ошибка ввода dgadgadf");
// } else if ( buyTickets === 0){
//     alert("Ошибка ввода");
// } else {
//     if ( buyTickets <= taba) {
//             const yes = confirm ("Подходит ли Вам тур Таба?");
//             if ( yes === true) {
//                 alert("Приятного путешествия в группе Таба");
//             } else { 
//                 alert("Нам очень жаль, приходите еще!");
//             }
//     } else if (buyTickets > taba && buyTickets <= sharm) {
//         const yes = confirm ("Подходит ли Вам тур Шарм?");
//             if ( yes === true) {
//                 alert("Приятного путешествия в группе Шарм");
//             } else { 
//                 alert("Нам очень жаль, приходите еще!");
//             }
//     } else if ( buyTickets > sharm && buyTickets <= hurgada) {
//         const yes = confirm ("Подходит ли Вам тур Хургада?");
//             if ( yes === true) {
//                 alert("Приятного путешествия в группе Хургада");
//             } else { 
//                 alert("Нам очень жаль, приходите еще!");
//             }
//     } else {
//         alert("Извините, столько мест нет ни в одной группе!");
//     }
// }
// console.log(typeof buyTickets);

// task 1

/*
  - Объявите две переменные: guest и name
  - В переменную name запишите строку 'Mango'
  - Скопируйте значение из name в guest
  - Выведите в консоли значение переменной guest (должно вывести 'Mango')
*/

// const name = 'Mango';
// const guest = name;
// console.log(guest);

// task 2

/*
  Есть три переменные содержащие день, месяц, и год. 
  Необходимо получить строку день\месяц\год
  в формате xx\xx\xxxx
  
  Найдите ошибку в записи значания для переменной date, 
  результат будет выведен в консоль и равен комментарию 
  напротив console.log()
*/

// const day = 2;
// const month = 10;
// const year = 2017;

// const date = day + "\\" + month + "\\" + year ;

// console.log(date); // 02\10\2017

// task 3

/* 
  Напишите скрипт который:
  - при загрузке страницы спрашивает имя пользователя (используйте prompt)
  - после того как было введено имя показывает alert с тем что ввели в prompt
*/

// const name = prompt('Who are you?');
// alert(`Hello ${name}`);

//task 4

/*
  Есть три переменные name, date и roomType, содержащие 
  имя гостя, дату его прибытия на отдых и тип комнаты отеля.
  
  Используя шаблонные строки необходимо записать 
  в перменную message сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
  
  Найти ошибки в коде и исправить их, при верном решении 
  в консоль будет выведена строка идентичная той что 
  напротив console.log
*/

// const name = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';

// const message = `${name} прибывает на отдых ${date} в ${roomType}.`;

// console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.

//task 5

/*
  Есть 3 переменные в которых хранится  размер составляющих 
  блочной модели в формате Npx, где N это целое число.
  
  Используя эти переменные, запишите в переменную totalWidth 
  общую ширину блока в формате Npx.
  
  К примеру "сумма" '20px' и '30px' будет равна '50px'.
  
  Если все верно, то в консоли будет выведена строка '125px'
*/

// const padding = "20px";
// const border = "5px";
// const contentWidth = "100px";

// let totalWidth = parseInt(padding) + parseInt(border) + parseInt(contentWidth) + 'px';

// console.log(totalWidth); // '125px'

//task 6

/*
  Напишите скрипт который: 
  
  - Через prompt cпрашивает 'Какой сейчас год?'
  - Если посетитель вводит 2018 - показывать alert со строкой 'Все верно!'
  - Если что-то другое — показывать alert 'Но ведь на вдоре 2018!'
  
  PS: используйте конструкцию if..else.
*/ 

// const correct = "Все верно!" ;
// const inCorrect = "Но ведь на вдоре 2018!" ;

// const askDate = prompt('Какой сейчас год?');
// if ( +askDate === 2018) {
//     alert(correct);
// }
// else{
//     alert(inCorrect);
// }

//task 7

/*
  Напишите скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
  
  PS: используйте конструкцию if..else.
*/ 

// const thanks = 'Спасибо!' ;
// const incorrect = 'Необходимо было ввести целое число!';

// const sayIt = prompt('Введите произвольное целое число');

// if ( sayIt !== null) {
//     if (Number(sayIt) === NaN) {
//         alert(incorrect)
//     } else {alert(thanks)}
// } else {alert('Приходите еще!')}

//task 8

/* 
  В переменную num записывается случайное число.
  
  Используя ветвления запишите в переменную type строку:  
    - "even" если num четное
    - "odd" если num не четное

  PS: попробуйте использовать тернарный оператор
*/

const num = Number.parseInt(Math.random() * 100);

let type;

console.log(`${num} is ${type}`);
