'use scrict';

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];



const isLoginValid = function(login) {
    return newLogin.length >= 4 && newLogin.length <= 16
};

const isLoginUnique = function(allLogins, login) {
    for ( a of logins) {
        if ( a === newLogin) {
            return a === newLogin;
        }
    }
};

const addLogin = function(login) {
       logins.push (newLogin);  
       alert('Логин успешно добавлен!');
};

const newLogin = prompt('Введите новый логин (от 4 до 16-ти символов)');
if  (newLogin === null) {
    alert('Отменено пользователем!');
} else if (isLoginValid (newLogin) === true) { 
    if (isLoginUnique (newLogin) === true) {
        alert ('Такой логин уже используется!');
    } else {
        addLogin(newLogin);
    }
} else {
    alert ('Ошибка! Логин должен быть от 4 до 16 символов');
}
