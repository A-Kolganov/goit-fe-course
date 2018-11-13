'use scrict';

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
    if (login.length >= 4 && login.length <= 16){
        return true;
    } else {
        alert ('Ошибка! Логин должен быть от 4 до 16 символов');
    }
};

const isLoginUnique = function(logins, login) {
    for ( a of logins) {
        if ( a === login) {
            return true
        } 
    }
};

const addLogin = function(login) {
    if (isLoginValid (login) === true && isLoginUnique (logins, login) !== true){
       logins.push (login);  
       alert('Логин успешно добавлен!');
    } else {
        alert ('Такой логин уже используется!');
    }

};

const login = prompt('Введите новый логин (от 4 до 16-ти символов)');
addLogin(login);

