'use strict';

// // task 1
// /*
//   Есть список категорий с классом categories (на вкладке HTML).
  
//   Напишите код, который для каждого элемента li (первая вложенность) 
//   в списке categories выведет в консоль:
//   - Текст непосредственно в нём (название категории)
//   - Количество всех вложенных в него элементов li
  
//   К примеру:
//     Категория: Животные
//     Количество вложенных li: 4
// */
// const nameCategories = document.querySelectorAll('.categories > li');

// nameCategories.forEach(item=>{
//   console.log(item.firstChild)
//   console.log(item.firstElementChild.children.length)
// })
// console.log(nameCategories)


// // task 2

// /*
//   Дан список с классом .list
// 	- Найдите первого потомка списка и сделайте его текст красного цвета
// 	- Найдите последнего потомка списка и сделайте его текст синего цвета
// */


// const list = document.querySelector('.list');

// const first = list.firstElementChild.classList.add('red');

// const last = list.lastElementChild.classList.add('blue');


// // task 3

// /*
//   Дан ul склассом .list и массив строк. 
  
//   Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
// */

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.querySelector('.list');
// const element = document.createElement('li');
// elements.forEach(item =>{
//   const element = document.createElement('li');
//   list.appendChild(element).textContent = item;
// } )

// // task 4

// /*
//   Напишите скрипт для создания галлереи изображений. 
  
//   - На вкладке HTML уже есть ul.gallery.
//   - Используйте массив объектов для создания тегов img вложенных в li
//   - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
//     изображение было 300px по ширине
//   - Добавьте все элементы галлереи в ul.gallery
// */

// const galleryItems = [
//     {
//       url:
//         "http://jobs.designengine.com/wp-content/uploads/2011/07/300px-LEGO_logo.svg_.png",
//       alt: "White and Black Long Fur Cat"
//     },
//     {
//       url:
//         "https://comotion.uw.edu/wp-content/uploads/2018/10/Rocket-purple-300px-2.png",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Two Brown Hen and One Red Rooster"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Macaw Birds"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "2 Lion on Grass Field during Daytime"
//     }
//   ];

//   const imageList = document.querySelector('.gallery');

//   galleryItems.forEach(item=>{
//     const box = document.createElement('li');
//     const image = document.createElement('img');
//     image.setAttribute ('width', '300px');
//     image.setAttribute ('height', 'auto');
//     image.setAttribute ('url', item.url);
//     image.setAttribute ('alt', item.alt);
//     box.appendChild(image);
//     imageList.appendChild(box);

//   })

// //   task 5

// /*
//   Есть список с классом .size-filter из произвольного 
//   количества чекбоксов, каждый из которых содержит 
//   размер одежды в фильтре.
  
//   Напишите функцию collectInputData(inputs), которая
//   принимает 1 параметр inputs - массив тех инпутов
//   у которых состояние checked.
  
//   Возвращает массив значений атрибута value.
// */

// const inputs = document.querySelectorAll('.size-filter >li> label> input[type=checkbox]')
// let choice = [];
// function collectInputData(inputs){
//   inputs.forEach(element => {
//     const hasChecked = element.hasAttribute('checked');
//     if (hasChecked){
//       choice.push(element.value);
//     }
//   });
// }
// collectInputData(inputs)
// console.log(choice)


// // task 6

// /*
//   Создайте функцию createMovieCard(), которая 
//   создает и возвращает DOM-узел карточки кинофильма.
  
//   Разметка с классами есть на вкладке HTML.
//   Стили на вкладке CSS.
  
//   Используйте createElement для создания узлов.
//   Добавьте классы и атрибуты.
// */

function createMovieCard ( name, text, release , rate){
  const box = document.createElement('div');
  box.classList.add('movie');
  const image = document.createElement('img');
  image.classList.add('movie__image');
  image.setAttribute('src','https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg' );
  image.setAttribute('alt','foto movie' );
  const textBox = document.createElement('div');
  textBox.classList.add('movie__body');
  const title = document.createElement('h2');
  title.classList.add('movie__title');
  title.textContent = name;
  const words = document.createElement('p');
  words.classList.add('movie__description');
  words.textContent = text;
  const data = document.createElement('p');
  data.classList.add('movie__date');
  data.textContent =`Released: ${release}`;
  const rating = document.createElement('p');
  rating.classList.add('movie__rating');
  rating.textContent =`Rating: ${rate}`;

  textBox.appendChild(words);
  textBox.appendChild(data);
  textBox.appendChild(rating);
  box.appendChild(image);
  box.appendChild(textBox);
  const body = document.querySelector('body')
  body.appendChild(box);
  return body.appendChild(box)
}
const film = createMovieCard(
'Alone in the dark',
'Good movie. Very good movie',
'1990-15-23',
'5.8'
);