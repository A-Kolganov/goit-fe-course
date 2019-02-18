'use strict';

/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
    { preview: './img/bfly400.jpeg', fullview: './img/bfly1200.jpg', alt: "alt text 1" },
    { preview: './img/dolphin400.jpg', fullview: './img/dolphin1200.jpg', alt: "alt text 2" },
    { preview: './img/elephant400.jpeg', fullview: './img/elephant1200.jpeg', alt: "alt text 3" },
    { preview: './img/lizard400.jpeg', fullview: './img/lizard1200.jpeg', alt: "alt text 4" },
    { preview: './img/scorpio400.jpeg', fullview: './img/scorpio1200.jpg', alt: "alt text 5" },
    { preview: './img/wolf400.jpeg', fullview: './img/wolf1200.jpeg', alt: "alt text 6" },
  ];

const imageGallery = document.querySelector('.js-image-gallery');
const fullViewBox = document.createElement('div');
fullViewBox.classList.add('fullview');
const fullViewIMg = document.createElement('img');
fullViewIMg.classList.add('fullview__image');
const list = document.createElement('ul')
list.classList.add('preview');

const listItems = galleryItems.map( i => createImg(i));

function createImg(i){
    const item = document.createElement('li');
    const img = document.createElement('img');
    item.classList.add('list');
    img.classList.add('list__img');
    img.setAttribute('src', i.preview );
    img.setAttribute('data-fullview', i.fullview );
    img.setAttribute('alt', i.alt );
    item.appendChild(img);
    list.appendChild(item);
}
function defaultImg(i = galleryItems[0]){
    fullViewIMg.setAttribute('src', i.fullview );
    fullViewIMg.setAttribute('alt', i.alt );
}
function setImg(e){
    if(e.target.tagName !== 'IMG'){
      return
    }
      const i = e.target;
    fullViewIMg.setAttribute('src', i.dataset.fullview)
    fullViewIMg.setAttribute('alt', i.alt );
}



list.addEventListener('click', setImg)

imageGallery.appendChild(fullViewIMg);
imageGallery.appendChild(list);
defaultImg();

