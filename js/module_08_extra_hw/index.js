'use strict';

// task 1

/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

// const btn = document.querySelector('.button');
// btn.addEventListener('click',function(){
//   btn.textContent = Number(btn.textContent) +1;
// } )


// task 2

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/
// let inputA= document.querySelector('.inputA');
// let inputB= document.querySelector('.inputB');
// const result = document.querySelector('.result');
// const btn = document.querySelector('.btn')

// btn.addEventListener('click', 
// function summ(){
//   return result.textContent = Number(inputA.value)+Number(inputB.value);
// })

// task 3


/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/
// const num = document.querySelector('.value')
// const addOneBtn = document.querySelector('.js-addNum')
// const removeOneBtn = document.querySelector('.js-removeNum')


// class Counter{
//   constructor(num){ 
//     this.value = Number(num.textContent);
//   }
//   onChange (){
   
//     return num.textContent = this.value;
    
//   }
//   increment(){
//     this.value += 1;
//     this.onChange()
//   }
//   decrement(){
//     this.value -= 1;
//     this.onChange()
//   }
// }
// const newNum = new Counter(num);

// addOneBtn.addEventListener('click', newNum.increment.bind(newNum));
// removeOneBtn.addEventListener('click', newNum.decrement.bind(newNum));

// task 4

/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/





// const input = document.querySelectorAll('.options>label>input');
// const btn = document.querySelector('.btn');
// const result = document.querySelector('.result');

// btn.addEventListener('click', fn);
// function fn(e){
//   e.preventDefault()
  
//   for ( let i of input ){
//     if(i.checked){
//       result.textContent = `Result: ${i.value}`;
//     }
//   }
  
// }



// task 5

/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/


// const images = document.querySelector('.images');

// images.addEventListener('click', fn);

// function fn(e){
//   if (e.target.nodeName !== 'IMG'){
//     return
//   }
//   alert(e.target.src)
// }




// task 6

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

// const list = document.querySelector('.list')

// list.addEventListener('click', fn);

// function fn(e){
//   if (e.target.nodeName === 'BUTTON'){
//     list.removeChild(e.target.parentNode);
//     console.log(e.target)
//     console.log(e.currentTarget)
//   }
// }



// task 7

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

// const inputList = document.querySelector('.input-list');
// const inputs = inputList.querySelectorAll('input');

// inputList.addEventListener('change', fn);

// function fn(e){
//   if(Number(e.target.getAttribute('data-length')) <e.target.value.length ){
//     e.target.classList.add('input-valid')
//   }else{
//     e.target.classList.add('input-invalid')
//   }}
 




// task 8

/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

// const input = document.querySelector('.input');
// const pStatus = document.querySelector('.message');
// const p = document.querySelector('.input-value');

// input.addEventListener('focus', focus);
// input.addEventListener('blur', unFocus);
// input.addEventListener('input', txt);

// function focus(e){
//   pStatus.textContent = `Input is in focus!`;
// }
// function unFocus(e){
//   pStatus.textContent = '';
// }
// function txt(e){
//   p.textContent += e.target.value;
// }
// task 9

/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

// document.addEventListener('DOMContentLoaded', main)
// function main(e){
// const btn = document.querySelector('.btn');
// const modal = document.querySelector('.js-modal-backdrop');
// const close = document.querySelector('.close-btn');

// btn.addEventListener('click', openModal)
// close.addEventListener('click',closeModal)
// modal.addEventListener('click', closeModal)

// function openModal(e){
//   modal.classList.remove('modal-hidden');
// }
// function closeModal(e){
//   if(this !== e.target){

//     return
//   }

//   modal.classList.add('modal-hidden');
// }
 
// }

// task 10

/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

const menu = document.querySelector('.js-menu');
const links = menu.querySelectorAll('li');

menu.addEventListener('click', showLink)

function showLink(e){
  e.preventDefault();
  for(let i of links){
    if(i.firstElementChild === e.target){
      i.firstElementChild.classList.add('active')
    }
    if(i.firstElementChild !== e.target){
      i.firstElementChild.classList.remove('active')
    }
  }
}

