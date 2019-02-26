'use strict'

// task 1

/*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");
const API_URL = "https://restcountries.eu/rest/v2/name/";

form.addEventListener("submit", fetchCountryData);

/*
  @param {FormEvent} evt
*/
function fetchCountryData(evt) {
    evt.preventDefault();
   fetch(`https://restcountries.eu/rest/v2/name/${input.value}`)
  .then(response => {
    if(response.ok) return response.json(); 

    throw new Error(`Error while fetching: ${response.statusText}`);
  })
  .then(data => console.log(data)).catch(err => console.log(err) )
}


// task 2

// /*
//   Написать функцию fetchUserData, которая использует
//   API_URL + текущее значение input для составления запроса.
  
//   Формат полного url таков:
//     https://api.github.com/users/имя-пользователя
    
//   Документация по Git API:
//     https://developer.github.com/v3/
    
//   С помощью fetch сделать запрос по составленому адресу. 
//   Обязательно обработать вариант с ошибкой запроса используя catch. 
  
//   Результат запроса вывести в поле result в формате:
//     Avatar: аватартка 
//     Username: логин
//     Bio: описание профиля
//     Public repos: кол-во открытых репозиториев
  
//   Все необходимые данные есть в ответе от API.
// */

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");
// const API_URL = "";

// form.addEventListener("submit", fetchUserData);

// /*
//   @param {FormEvent} evt
// */
// function fetchUserData(evt) {}


// task 3

// /*
//   Документация API: https://jsonplaceholder.typicode.com/

//   Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/ 

//   Написать функцию fetchUsers, которая посылает get запрос.
//   Результатом fetch будет массив объектов.
  
//   В таблицу .user-table добавить строки для каждого пользователя.
//   Каждая строка состоит из 5-ти столбцов указанного формата.
//   Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
//     Имя | Почта | Город | Вебсайт | Компания
//     Имя | Почта | Город | Вебсайт | Компания
//     и так далее для каждого пользователя...
// */

// const form = document.querySelector(".search-form");
// const userTable = document.querySelector(".users-table");

// form.addEventListener("submit", fetchUsers);

// /*
//   @param {FormEvent} evt
// */
// function fetchUsers(evt) {
//   // ...
// }

// task 4

// /*
//   Документация API: https://jsonplaceholder.typicode.com/

//   Написать функцию getUserById, которая посылает запрос 
//   на получение информации о пользоватеьте с id (число) введенным в input. 
//   Не забывайте что значение input это строка.
 
//   Объект что придет в ответе используйте для вывода информации
//   о пользователе в элементе .result
  
//   Если пользователя с таким идентификатором в базе данных нет,
//   в элемент .result вывести строку "Ошибка! Пользователя с таким id не существует"
// */

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");

// form.addEventListener("submit", getUserById);

// function getUserById(evt) {
//   // ...
// }
