'use strict';
import './../scss/index.scss';
import linkTpl from "../templates/templates.hbs";
import './../services/api';
import './../services/add_link';

const addLinkForm = document.querySelector('.js__fav-links-form');
const addLinkInput = document.querySelector('.js-fav-links-inp');
const addLinkBtn = document.querySelector('.js-fav-links-btn');
const favLinksList = document.querySelector('.js-fav-links-list');

console.log(linkTpl)
addLinkForm.addEventListener('submit', addLink);

function addLink(e){
    e.preventDefault();
    const value = addLinkInput.value;
    console.log(value)
    const io = fetchAPI(value);
    console.log(io)

}
function addToList(data){
    const urlData = {
        title : data.title,
        descr : data.description,
        img : data.image,
        url: data.url
    }
 
    favLinksList.insertAdjacentHTML("afterbegin", linkTpl(urlData));
}
function addToLocalStorage(){

}
function fetchAPI (url){
    const keyAPI = '5c8a795154b726205b11554ae09686d1186cd15744a02';
    return fetch(`http://api.linkpreview.net/?key=${keyAPI}&q=${url}`).then(response=>{
        if (response.ok) return response.json();
        throw new Error(`Error while fetching: ${response.statusText}`);
}).then(data=> {  
    console.log(data)
    addToList(data);
  }
).catch(err=>console.log(err));
}
