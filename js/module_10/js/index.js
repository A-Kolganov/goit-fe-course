'use strict';

// get all users section

const getUsersBtn = document.querySelector('.DB__all-users__btn');
const allUsersTable = document.querySelector('.DB__all-users__table');

getUsersBtn.addEventListener('click', getAllUsers);

function getAllUsers(e){
    e.preventDefault();
    allUsersTable.innerHTML = '';
    fetch('https://test-users-api.herokuapp.com/users/')
    .then(response =>{
        if(response.ok) return response.json();
        throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(data =>{
        allUsersTable.innerHTML += data.data.reduce((acc,i)=> acc + `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.age}</td></tr>`,'')
    }).catch(err=> console.log(err))
}

// find user by id

const inputFindUser = document.querySelector('.find-user__input');
const btnFindUser = document.querySelector('.find-user__btn');
const formFindUser = document.querySelector('.find-user')
const findUserResult = document.querySelector('.find-user__result');

formFindUser.addEventListener('submit', getUserById);

function getUserById(e){
    e.preventDefault();
    const value = inputFindUser.value;
    findUserResult.classList.remove('incorrect');
    findUserResult.classList.remove('correct');
    if(value === ''){
        findUserResult.innerHTML = `No ID`
        findUserResult.classList.add('incorrect');
        return
    }
    fetch(`https://test-users-api.herokuapp.com/users/${value}`)
    .then(response =>{
        if(response.ok) return response.json();
        throw new Error(`Error while fetching: ${response.statusText}`);
    }).then(data =>{
        findUserResult.innerHTML = `ID: ${data.data.id}  |  Name: ${data.data.name}  |  Age: ${data.data.age}`;
        findUserResult.classList.add('correct');
    }).catch(err=> {
        findUserResult.innerHTML = `No Users with this ID`
        findUserResult.classList.add('incorrect');
        console.log(err)
    })
    formFindUser.reset();
};

// add user

const inputAddUserName = document.querySelector('.add-user__input-name');
const inputAddUserAge = document.querySelector('.add-user__input-age');
const btnAddUser = document.querySelector('.add-user__btn');
const formAddUser = document.querySelector('.add-user');
const addUserResult = document.querySelector('.add-user__result');

formAddUser.addEventListener('submit', addUser);

function addUser(e){
    e.preventDefault();
    const nameValue = inputAddUserName.value;
    const ageValue = Number(inputAddUserAge.value);
    addUserResult.classList.remove('incorrect');
    addUserResult.classList.remove('correct');

    if(nameValue === '' || Number.isNaN(ageValue)){
        addUserResult.innerHTML = `Incorrect input. Check name and age!`;
        addUserResult.classList.add('incorrect');
        return
    }
    fetch('https://test-users-api.herokuapp.com/users/',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({ name: nameValue, age: ageValue})
    }).then(response =>{
        if(response.ok) return response.json();
        throw new Error(`Error while fetching: ${response.statusText}`);
    }).then(data =>{
       addUserResult.innerHTML = `NEW USER! ID: ${data.data._id}  |  Name: ${data.data.name}  |  Age: ${data.data.age}`;
       addUserResult.classList.add('correct');
    }).catch(err=> console.log(err))
    formAddUser.reset();
}

// delete user

const formDeleteUser = document.querySelector('.remove-user');
const inputDeleteUser = document.querySelector('.remove-user__input');
const btnDeleteUser = document.querySelector('.remove-user__btn');
const removeUserResult = document.querySelector('.remove-user__result')

formDeleteUser.addEventListener('submit', removeUser);

function removeUser(e){
    e.preventDefault();
    removeUserResult.classList.remove('incorrect');
    removeUserResult.classList.remove('correct');
    const id = inputDeleteUser.value;
    if(id === ''){
        removeUserResult.innerHTML = `No ID`
        removeUserResult.classList.add('incorrect');
        return
    }
    fetch(`https://test-users-api.herokuapp.com/users/${id}`,{
        method: 'DELETE',
    }).then(response =>{
        if(response.ok) return response.json();

        throw new Error(`Error while fetching: ${response.statusText}`);
    }).then(data =>{
        removeUserResult.innerHTML = `DELETED USER! ID: ${data.data.id}  |  Name: ${data.data.name}  |  Age: ${data.data.age}`;
        removeUserResult.classList.add('correct');
    }).catch(err=> {
        removeUserResult.innerHTML = `No Users with this ID`
        removeUserResult.classList.add('incorrect');
        console.log(err)
    })
    formDeleteUser.reset();
}

// update user

const formUpdateUser = document.querySelector('.update-user');
const inputeUpdateID = document.querySelector('.update-user__input-getID');
const inputUpdateName = document.querySelector('.update-user__input-newName');
const inputUpdateAge = document.querySelector('.update-user__input-newAge');
const btnUpdateUser = document.querySelector('.update-user__btn');
const updateUserResult = document.querySelector('.update-user__result');

formUpdateUser.addEventListener('submit',updateUser);

function updateUser(e){
    e.preventDefault();
    const ID = inputeUpdateID.value;
    const newName = inputUpdateName.value;
    const newAge = inputUpdateAge.value;
    const newUser = { name: newName, age: newAge};

    if(newName === '' || ID === '' || Number.isNaN(newAge) ){
       updateUserResult.innerHTML = `Incorrect input. Check ID, name and age!`;
       updateUserResult.classList.add('incorrect');
       return
    }
    fetch(`https://test-users-api.herokuapp.com/users/${ID}`,{
        method: 'PUT',
        body: JSON.stringify(newUser),
        headers: {
             Accept: "application/json", 
             "Content-Type": "application/json" 
        }
    }).then(response=>{
            if(response.ok) return response.json();

            throw new Error(`Error while fetching: ${response.statusText}`);
        }).then(data=>{
            updateUserResult.innerHTML = `CHANGE! ID: ${data.data.id}  |  Name: ${data.data.name}  |  Age: ${data.data.age}`;
            updateUserResult.classList.add('correct');
        }).catch(err=> console.log(err))
    formUpdateUser.reset();
    }
    
