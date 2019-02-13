'use strict';
/*
1. Модифицируйте готовую функцию createPostCard() из задания 
номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
чтобы она принимала объект post с данными для заполнения полей 
в карточке.
  
2. Создайте функцию createCards(posts), которая принимает массив
объектов-карточек, вызывает функцию createPostCard(post) столько
раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
массив DOM-элементов всех постов.

3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
{
img: "https://placeimg.com/400/150/arch",
title: "Post title 1",
text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
link: 'link-1.com'
},
{
img: "https://placeimg.com/400/150/nature",
title: "Post title 2",
text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
link: 'link-2.com'
},
{
img: "https://placeimg.com/400/150/arch",
title: "Post title 3",
text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
link: 'link-3.com'
}
];

const films = document.querySelector('.films');

function createCards(posts){
  posts.forEach(item => {
      films.appendChild(createPostCard(item.img,item.title,item.text,item.link));
  });
  
}
function createPostCard(image, title, text, link){
    const card = document.createElement('div');
    card.classList.add('movie')

    const img = document.createElement('img');
    img.classList.add('movie__image');
    img.setAttribute('src', image);
    img.setAttribute('alt', 'movie image');

    const cardTextBox = document.createElement('div');
    cardTextBox.classList.add('movie__body');

    const titleName = document.createElement('h2');
    titleName.classList.add('movie__title');
    titleName.textContent = title;

    const textMovie = document.createElement('p');
    textMovie.classList.add('movie__description');
    textMovie.textContent = text;

    const linkMovie = document.createElement('a');
    linkMovie.classList.add('movie__link');
    linkMovie.textContent = `Click link!`;
    linkMovie.setAttribute('href', link);
    
    cardTextBox.appendChild(titleName);
    cardTextBox.appendChild(textMovie);
    cardTextBox.appendChild(linkMovie);
    card.appendChild(img);
    card.appendChild(cardTextBox);

    return card;
}

createCards(posts)

