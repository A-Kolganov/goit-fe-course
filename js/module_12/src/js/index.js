'use strict';
import './../scss/index.scss';
import linkTpl from "../templates/templates.hbs";
import './../services/api';
import './../services/add_link';

const addLinkForm = document.querySelector('.js__fav-links-form');
const addLinkInput = document.querySelector('.js-fav-links-inp');
const addLinkBtn = document.querySelector('.js-fav-links-btn');
const favLinksList = document.querySelector('.js-fav-links-list');


addLinkForm.addEventListener('submit', addLink);


function addLink(e){
    e.preventDefault();
    const value = addLinkInput.value;
    fetchAPI(value);
    addLinkForm.reset();
}
function addToList(data){
    const urlData = {
        title : data.title,
        descr : data.description,
        img : data.image,
        url: data.url
    }
    favLinksList.insertAdjacentHTML("afterbegin", linkTpl(urlData));
    const deleteLinkBtn = document.querySelector('.js-delete-link-btn');
    deleteLinkBtn.addEventListener('click', removeFromList)
}
function removeFromList(e){
    e.preventDefault();
    e.target.removeEventListener('click', removeFromList)
    this.parentNode.remove(".js-fav-link-item");
}
function fetchAPI (url){
    const keyAPI = '5c8a795154b726205b11554ae09686d1186cd15744a02';
    return fetch(`http://api.linkpreview.net/?key=${keyAPI}&q=${url}`).then(response=>{
        if (response.ok) return response.json();
        throw new Error(`Error while fetching: ${response.statusText}`);
}).then(data=> {addToList(data)}
).catch(err=>console.log(err));
}
