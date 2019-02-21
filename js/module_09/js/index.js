'use strict';
const timersList = document.querySelector('.timers-list');
// const stopwatchDiv = document.querySelector('stopwatch');
// const clockFace = document.querySelector('.js-time');
// const btnStart = document.querySelector('js-start');
// const btnLap = document.querySelector('js-lap');
// const btnReset = document.querySelector('js-reset');
// const lapsList = document.querySelector('js-laps');

class Stopwatch{
  constructor(parentNode){
    this.parentNode = parentNode;
    this.watch = this.createWatch(this.parentNode);
    this.startTime = null;
    this.deltaTime = null;
    this.isActive = false;
    this.watchID = null;
    this.arrLaps = [];
  }

  createWatch(parentNode){
    this.timerBlock = document.createElement('div');
    this.timerBlock.classList.add('stopwatch');

    this.clockFace = document.createElement('p');
    this.clockFace.classList.add('time');
    this.clockFace.textContent = '00:00.0'

    this.btnStart = document.createElement('button');
    this.btnStart.classList.add('btn','js-start');
    this.btnStart.textContent = 'Start';
    this.btnStart.addEventListener('click' , this.onStart.bind(this));

    this.btnLap = document.createElement('button');
    this.btnLap.classList.add('btn','js-lap');
    this.btnLap.textContent = 'Lap';
    this.btnLap.addEventListener('click' , this.newLap.bind(this));

    this.btnReset = document.createElement('button');
    this.btnReset.classList.add('btn','js-reset');
    this.btnReset.textContent = 'Reset';
    this.btnReset.addEventListener('click' , this.onReset.bind(this));

    this.lapList = document.createElement('ul');
    this.lapList.classList.add('laps')

    this.timerBlock.append(this.clockFace,this.btnStart,this.btnLap,this.btnReset,this.lapList);
    this.parentNode.append(this.timerBlock);

  }

  onStart(){
    this.startTime = new Date() - this.deltaTime;
    this.isActive = true;

    if (this.isActive && this.btnStart.textContent === 'Pause'){
      clearInterval(this.watchID);
      this.btnStart.textContent = "Continue";
      this.isAtive = false;
      return
    }

    this.btnStart.textContent = 'Pause';

    this.watchID = setInterval(()=>{
      this.currentTime = new Date();
      this.deltaTime = this.currentTime - this.startTime;
      this.time = new Date(this.deltaTime);
      this.minutes = this.time.getMinutes();
      this.seconds = this.time.getSeconds();
      this.milliseconds = Number.parseInt(this.time.getMilliseconds()/100);
      if (Number(this.minutes)<10){
        this.minutes = '0'+ this.minutes;
      }
      if (Number(this.seconds)<10){
        this.seconds = '0'+ this.seconds;
      }
      this.clockFace.textContent = `${this.minutes}:${this.seconds}.${this.milliseconds}`;
    }, 100);
  }

  onReset(){
    if(!this.isActive){
      return;
    }

    clearInterval(this.watchID);
    this.clockFace.textContent = `00:00.0`;
    this.startTime = null;
    this.deltaTime = null;
    this.btnStart.textContent = 'Start'; 
  }

  newLap(){
    this.lap = document.createElement('li');
    this.lap.textContent = this.clockFace.textContent;
    this.arrLaps.push(this.lap);
    this.lapList.append(...this.arrLaps);
  }

}
const stopWatchA = new Stopwatch(timersList);

const stopWatchB = new Stopwatch(timersList);

const stopWatchC = new Stopwatch(timersList);

/*
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Выполните домашнее задание используя класс с полями и методами.
  
  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
  динамически создана вся разметка для секундомера.
  
  Должна быть возможность создать сколько угодно экземпляров секундоментов 
  на странице и все они будут работать независимо.
  
  К примеру:
  
  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);
  
  Где parent* это существующий DOM-узел. 
*/