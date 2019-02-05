// 'use strict';

// // task 1

// /*
//   Создать функцию-конструктор Account, которая добавляет будущему
//   объекту поля login, email и friendsCount. 
  
//   В prototype функции-конструктора добавить метод getAccountInfo(), 
//   который выводит в консоль значения полей login, email и friendsCount. 
  
//   Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
//   а использовать его смогут все экземпляры, по ссылке.
  
//   Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
// */
// function User (login, email, friendsCount){
//     this.login = login;
//     this.email = email;
//     this.friendsCount = friendsCount;
// }

// User.prototype.getAccountInfo = function (){
//     console.log(`${this.login},${this.email},${this.friendsCount}`)
// }

// const anny = new User('Anny', 'Angel@email.net' , 20 );

// const fred = new User('Fred', 'Freddy@fb.com', 35);

// const dima = new User('Dima', 'Dimon777@mail.ua', 210);

// anny.getAccountInfo();
// fred.getAccountInfo();
// dima.getAccountInfo();


// // task 2

// /*
//   Напишите ES6 класс StringBuilder.
  
//   На вход (в конструкторе) он получает один параметр string - строку,
//   которую записывает в поле value.
  
//   Добавьте классу следующие методы:
  
//     - getValue() - возвращает текущее значение поля value
  
//     - append(str) - получает парметр str - строку и добавляет 
//       ее в конец значения поля value
    
//     - prepend(str) - получает парметр str - строку и добавляет 
//       ее в начало значения поля value
  
//     - pad(str) - получает парметр str - строку и добавляет 
//       ее в начало и в конец значения поля value
// */

// class StringBuilder {
//     constructor (value){
//         this.value = value;
//     }
//     getValue(){
//         return this.value;
//     }
//     append(str){
//         return this.value =`${this.value} ${str}`
//     }
//     prepend(str){
//         return this.value =`${str} ${this.value}`
//     }
//     pad(str){
//         return this.value =`${str} ${this.value} ${str}`
//     }
// }


// const builder = new StringBuilder('.');

// builder.append('^'); 
// console.log(builder.getValue()); // '.^'

// builder.prepend('^'); 
// console.log(builder.getValue()); // '^.^'

// builder.pad('='); 
// console.log(builder.getValue()); // '=^.^='


// // task 3

// /*
//   Создайте класс Car с указанными полями и методами.
// */

// class Car {
//     constructor(maxSpeed) {
//       /*
//         Добавьте свойства:
//           - speed - для отслеживания текущей скорости, изначально 0.
          
//           - maxSpeed - для хранения максимальной скорости 
          
//           - running - для отслеживания заведен ли автомобиль, 
//             возможные значения true или false. Изначально false.
            
//           - distance - содержит общий киллометраж, изначально с 0
//       */
//      this.speed = 0;
//      this.maxSpeed = maxSpeed;
//      this.running = false;
//      this.distance = 0;
//     }
  
//     turnOn() {
//       // Добавьте код для того чтобы завести автомобиль
//       // Просто записывает в свойство running значание true
//       this.running = true;
//     }
  
//     turnOff() {
//       // Добавьте код для того чтобы заглушить автомобиль
//       // Просто записывает в свойство running значание false
//       this.running = false;
//     }
    
//     accelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed
//       this.speed = spd < this.maxSpeed ? this.speed = spd : this.speed;
//     }
    
//     decelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed и не меньше нуля
//       this.speed = spd < this.maxSpeed && spd > 0 ? this.speed = spd : this.speed
//     }
  
//     drive(hours) {
//       // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//       // но только в том случае если машина заведена!
//       if(this.running){
//       this.distance = hours * this.speed
//       }
//     }
//     static getSpecs(obj){
//         console.log(` 
//         max speed : ${obj.maxSpeed}, 
//         running : ${obj.running},
//         distance : ${obj.distance}`)
//     }
//   }

// const bmw = new Car(240);
// console.log(bmw)

// bmw.turnOn();
// console.log(bmw.running); //true

// bmw.accelerate(180)
// console.log(bmw.speed)//180

// bmw.decelerate(-30)
// console.log(bmw.speed)//180

// bmw.decelerate(120)
// console.log(bmw.speed)//120

// bmw.drive(5)
// console.log(bmw.distance)//600

// bmw.turnOff()
// console.log(bmw.running)//false

// bmw.drive(5)
// console.log(bmw.distance)//600


// // //   task 4

// // /*
// //   Добавьте к классу Car из предыдущего задания статический
// //   метод getSpecs, который получает объект-машину как аргумент
// //   и выводит в консоль значения полей maxSpeed, running и distance.
  
// //   Использование будет выглядеть следующим образом:

//   const someCar = new Car(100);
//   someCar.turnOn();
//   someCar.drive(2);
  
//   Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200

// */




// // task 5

// /*
//   Добавьте классу Car свойство value - цена автомобиля.
  
//   Добавьте классу Car использование геттеров и сеттеров для свойства value.
  
//   Геттер вернет текущее значение поля this._value
//   Сеттер запишет в поле this._value то что ему присвоят
  
//   PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
//     не this.value а this._value
    
//   Использование выглядит следующим образом:
  
//   const myCar = new Car(50, 2000);
  
//   myCar.value; // 2000
//   myCar.value = 4000;
//   myCar.value; // 4000
// */

// class Car {
//     constructor(maxSpeed, value) {
//       this.maxSpeed = maxSpeed;
//       this._value = value;
//     }
//     get value() {
//         return this._value
//     }

//     set value(nv) {
//         this._value = nv;
//     }
//   }
  

//     const myCar = new Car(50, 2000);
  
//   myCar.value; // 2000
//   console.log(myCar._value)
//   myCar.value = 4000;
//   console.log(myCar._value)
//   myCar.value; // 4000
//   console.log(myCar._value)