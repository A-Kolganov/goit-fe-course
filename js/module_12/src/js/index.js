'use strict';

import './../scss/index.scss';
import '../services/shortlist';
import '../services/regtest';
import './../services/modal';

const addLinkForm = document.querySelector('.js__fav-links-form');
const addLinkInput = document.querySelector('.js-fav-links-inp');

const urlExist = `Sorry! But this link is already added to youre\'s shortlist! Please type another link or check list`;
const urlFail = `Sorry! But you enter an empty link. Please, try again!`
const notUrl = `Sorry! Link is't valid! We can't add this link to shortlist! Please check link and try again!`

import {updateLocalStorage,getLinks} from '../services/ls';
import {fetchAPI, addToList} from '../services/shortlist';
import {testUrl} from '../services/regtest';

import {modal,openModal,closeModal} from '../services/modal';


addLinkForm.addEventListener('submit', addLink);


lastSession();

function lastSession (){
    // const value = JSON.parse(localStorage.getItem("links"));
    getLinks().forEach(el =>{
        // localStorageArr.push(el);
        addToList(el);
    // value.forEach(el =>{
    // localStorageArr.push(el);
    // addToList(el);
});  
}

function addLink (e){
    e.preventDefault();
    const value = addLinkInput.value;
    if(value === ''){
        openModal();
        showMsg(urlFail);
        addLinkForm.reset();
        return
    }
    if(!testUrl(value)){
        openModal();
        showMsg(notUrl);
        addLinkForm.reset();
        return
    }
    const hasLink =  getLinks().some(e=>{ 
         return Object.values(e).includes(value) || (Object.values(e).includes(value + `/`)) 
    })
    if (hasLink){
        openModal();
        showMsg(urlExist);
        return
    }
    fetchAPI(value);
    
    addLinkForm.reset();
}
function showMsg(message){
    const msg = modal.querySelector('.js-modal-msg');
    msg.textContent = message;
}


















