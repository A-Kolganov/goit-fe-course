'use strict';

// task 1

/*
  Дан массив цветов и кнопки "Start" и "Stop". Сделайте так, чтобы после
  нажатия кнопки "Start", каждую секунду body менял цвет фона на случайное 
  значение из массива. 

  При нажатии на кнопку "Stop", изменении цвета фона должно останавливаться.
  
  Учтите что на кнопку Start могно нажать бесконечное количество раз,
  сделайте так чтобы пока изменение темы запушено, нажатие на кнопку
  Start не имело эффекта.
*/

// const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
// console.log(colors[2])
// const startBtn = document.querySelector('.js-start');
// const stopBtn = document.querySelector('.js-stop');
// let timerID = null;
// let turnTimer = false;
// startBtn.addEventListener('click', onStart);
// stopBtn.addEventListener('click', onStop);


// function onStop(){
//   clearInterval(timerID);
//   turnTimer = false;
// }


// function onStart(){
//   if(turnTimer){
//     return
//   }
//   turnTimer = true;
//   timerID = setInterval(go,1000);
// }

 

// function go(){
//     let colorIdx = 0;
//     do { 
//     colorIdx = Number.parseInt(Math.random()*10);
//     }while(colorIdx >= colors.length);
//    document.body.setAttribute('bgcolor', colors[colorIdx])
//     console.log(colors[colorIdx])
// }
// task 2

/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

// function getFormattedTime(time) {
//   let date = new Date(time);
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   let milliseconds = Number.parseInt(date.getMilliseconds()/100);
//   console.log(date)
//   console.log(time)
//     return `${minutes}:${seconds}.${milliseconds}`;
  
//   }
  
//   console.log(
//     getFormattedTime(1523621052858)
//   ); // 04:12.8
  
//   console.log(
//     getFormattedTime(1523621161159)
//   ); // 06:01.1
  
//   console.log(
//     getFormattedTime(1523621244239)
//   ); // 07:24.2
   
  
//  task 3  

/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Используйте возможности объекта Date для работы со временем.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 3.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

// const clockface = document.querySelector(".js-clockface");
// const startBtn = document.querySelector(".js-timer-start");
// const stopBtn = document.querySelector(".js-timer-stop");

// startBtn.addEventListener('click', startTime);
// stopBtn.addEventListener('click', stopTimer);


// const timer = {
//   startTime: null,
//   deltaTime: null,
//   id: null,
//   turnTimer: false
// };

// function startTime(){
//   if(timer.turnTimer === true){
//         return
//       }
//   timer.turnTimer = true;    
//   timer.startTime = Date.now();
//   timer.id = setInterval(() => {
//     timer.deltaTime = Date.now() - timer.startTime;
//     updateClockface(clockface, timer.deltaTime );
//   }, 100);
// };
// function stopTimer(){
//   clearInterval(timer.id);
//   timer.turnTimer = false;  
// };
// function getFormattedTime(deltaTime){
//   const time= new Date(deltaTime);
//   let minutes = time.getMinutes();
//   let seconds = time.getSeconds();
//   let milliseconds = Number.parseInt(time.getMilliseconds()/100);
//   let resultM = 0;
//   let resultS = 0;
//   if (Number(minutes)<10){
//     minutes = '0' + minutes;
//   }
//   if (Number(seconds)<10){
//     seconds = '0' + seconds;
//   }
  // if(minutes.length < 2){
  //   return resultM ='0 + minutes';
  // } else{
  //   resultM = minutes
  // }
  // if(seconds.length < 2){
  //   return resultS ='0 + seconds';
  // } else {
  //   result = seconds
  // }
//   return `${minutes}:${seconds}.${milliseconds}`

// };
/*
* Вспомогательные функции
*/

/*
* Обновляет поле счетчика новым значением при вызове
* аргумент time это кол-во миллисекунд
*/
// function updateClockface(elem, time) {
//   const getTime = getFormattedTime(time)
//   // Используйте функцию getFormattedTime из задания #1
//   // elem.textContent = getFormattedTime(time);
//   elem.textContent = getTime; 
// }

/*
* Подсветка активной кнопки
*/
// function setActiveBtn(target) {
//   if(target.classList.contains('active')) {
//     return;
//   }
  
//   startBtn.classList.remove('active');
//   stopBtn.classList.remove('active');
  
//   target.classList.add('active');
// }

// task 4

/*
  Напишите скрипт работы магазина со складом товаров.
  
  Есть переменная goodsAmount хранящиая в себе
  текущее количество единиц какого-то товара на складе.
  
  Напишите функцию processOrder(amount), получающую
  кол-во товаров заказанных покупателем, и возвращающую промис.
  
  Для имитации проверки достаточного количества товаров
  на складе используйте setTimeout с delay 500мс.
  
  Если на складе товаров больше либо равно заказанному
  количеству, "верните" строку - "Ваш заказ готов!".
  
  В противном случае - "К сожалению на складе не достаточно товаров!".
  
  Если же пользователь ввел не число, то выдайте ошибку throw new Error("Некорректный ввод!")  
*/

const DELAY = 500;

let goodsAmount = 100;

function processOrder(amount){
  if(typeof(amount) !== 'number'){
    console.log('облом')
  }
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(typeof(amount) !== 'number'){
        throw new Error("Некорректный ввод!");
      }
      if(amount <= DELAY){
        resolve("Ваш заказ готов!");
      }
      resolve("сожалению на складе не достаточно товаров!");
    }
  ), DELAY})
}
// Вызовы функции для проверки
processOrder(50)
  .then(result => console.log(result)) // Ваш заказ готов!
  .catch(err => console.log(err));

processOrder(500)
  .then(result => console.log(result)) // Ваш заказ готов!
  .catch(err => console.log(err));

processOrder(1000)
  .then(result => console.log(result)) // К сожалению на складе недостаточно товаров!
  .catch(err => console.log(err))

  processOrder('sdfs')
  .then(result => console.log(result)) // К сожалению на складе недостаточно товаров!
  .catch(err => console.log(err))