const modal = document.querySelector('.js-modal');

function openModal(e){
    modal.classList.toggle('modal-toggle');
    const close = modal.querySelector('.js-close-modal');
    modal.addEventListener('click', closeModal);
}

function closeModal(e){
    if ( e.target === e.currentTarget|| e.target.tagName === 'BUTTON' ){
    modal.classList.toggle('modal-toggle');
    const close = modal.querySelector('.js-close-modal');
    close.removeEventListener('click', closeModal);
    }
}

export {modal,openModal,closeModal};