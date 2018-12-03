'use strict';

//  TASK 1

//   
//   Напишите скрипт, который, для объекта user, последовательно: 
  
//     - добавляет поле mood со значением 'happy'
    
//     - заменяет значение hobby на 'javascript'
    
//     - удаляет свойство premium
    
//     - выводит содержимое объекта user в формате ключ:значение 
//       используя цикл for...in
    
//     - выводит содержимое объекта user в формате ключ:значение 
//       используя Object.keys и for...of
    
//     - выводит содержимое объекта user в формате ключ:значение 
//       используя Object.entries и for...of
// 

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };

// function scriptForUser (user) {
//   const key = 'mood';
//   user[key] = 'happy';
//   user.hobby = 'javascript';
//   delete user.premium;
//   for (const key in user){
//     console.log(key, user[key]); 
//   }
//   const keys = Object.keys(user) 
//   for (const key of keys) {
//     console.log(key, user[key])
//   }
//   const entries = Object.entries(user)
//   for (const entry of entries){
//     const key = entry[0];
//     const value = entry[1];
//     console.log(`${key}: ${value}`);
//   }

// }

// scriptForUser(user);

  
// //   TASK 2

// 
//   Напиште скрипт который определит и выведет в консоль 
//   имя сотрудника который выполнил больше всех задач.

//   Сотрудники и кол-во выполненых задач содержатся 
//   как свойства объекта в формате "имя":"кол-во задач"
// 

const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  };

function findBestWorker () {
  const values = Object.values(tasksCompleted)
    console.log(Math.max([values1,[values2,[ ...,]]]))
  
  
}
findBestWorker(tasksCompleted)


// //   task 3

// /*  
//   Напишите функцию countProps(obj),
//   считающую кол-во свойств в объекте.
//   Функция возвращает количество свойств.
// */

// // Вызовы функции для проверки
// console.log(
//     countProps({})
//   ); // 0
  
//   console.log(
//     countProps({a: 1, b: 3, c: 'hello'})
//   ); // 3

// // task 4

// /*  
//   Создайте функцию isObjectEmpty(obj), которая получает 
//   один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
//   Возвращает true если объект пустой, false если не пустой.
// */

// // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
//   ); // true
  
//   console.log(
//     isObjectEmpty({a: 1})
//   ); // false
  
//   console.log(
//     isObjectEmpty({a: 1, b: 2})
//   ); // false

  
// //   task 5

// /*  
//   Напишите функцию countTotalSalary(salaries),
//   получающую объект и считающую общую сумму запрплаты работников.
  
//   Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
//   Функция возвращает общую сумму зарплаты.
// */

// // Вызовы функции для проверки
// console.log(
//     countTotalSalary({})
//   ); // 0
  
//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80
//     })
//   ); // 330
  

// //   task 6

// /*  
//   Напишите функцию getAllPropValues(arr, prop), 
//   которая получает массив объектов и имя ключа, 
//   возвращает массив значений определенного поля prop
//   из каждого объекта в массиве
// */

// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
//   ];
  
//   // Вызовы функции для проверки
//   console.log(
//     getAllPropValues(users, 'name')
//   ); // ['Poly', 'Mango', 'Ajax']
  
//   console.log(
//     getAllPropValues(users, 'mood')
//   ); // ['happy', 'blissful', 'tired']
  
//   console.log(
//     getAllPropValues(users, 'active')
//   ); // []

// //   task 7

// /*  
//   Напишите код, который бы  с помощью 
//   функции-конструкора User, позволял создавать 
//   объекты пользователя со следующим свойствами:
//     - name - строка (имя)
//     - isActive - буль (активен)
//     - age - число (возраст)
//     - friends - число (кол-во друзей)

//   Имя, активность, возраст и друзей, необходимо передать 
//   как аргументы при вызове конструктора.
  
//   Добавить метод getUserInfo(), которая, выводит строку:
//   `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

//   Создать несколько объектов пользователя User и с помощью 
//   функции getUserInfo вывести строку в консоль.
// */

// // task 8

// /*  
//   Расставьте отсутствующие this в методах объекта store
// */

// const store = {
//     products: ['bread', 'cheese', 'milk', 'apples'],
//     managers: ['poly', 'mango', 'ajax'],
//     addManager(manager) {
//       managers.push(manager);
      
//       console.log(managers);
//     },
//     removeManager(manager) {
//       const idx = managers.indexOf(manager);
      
//       managers.splice(idx, 1);
      
//       console.log(managers);
//     },
//     getProducts() {
//       console.log(products);
      
//       return products;
//     }
//   }
  
//   store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']
  
//   store.removeManager('mango'); // ['poly', ajax', 'chelsey']
  
//   store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']

  
// //   task 9

// /*  
//   Расставьте отсутствующие this в конструкторе объектов Account
// */

// function Account(login, password, type = "regular") {
//     login = login;
//     password = password;
//     type = type;
  
//     changePassword = function(newPassword) {
//       password = newPassword;
  
//       console.log(password);
//     };
  
//     getAccountInfo = function() {
//       console.log(`
//         Login: ${login}, 
//         Pass: ${password}, 
//         Type: ${type}
//       `);
//     };
//   }
  
//   const account = new Account("Mango", "qwe123", "premium");
  
//   console.log(account.login); // 'Mango'
//   console.log(account.password); // 'qwe123'
//   console.log(account.type); // 'premium'
  
//   console.log(account.changePassword("asdzxc")); // 'asdzxc'
  
//   console.log(account.getAccountInfo()); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
  