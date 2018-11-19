'use scrict';

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = (login) => {
    return login.length >= 4 && login.length <= 16
}
const isLoginUnique = (logins, login) => {
    if (logins.includes(login)){
        return false;
    } {
        return true;
    }
}

const addLogin = (logins,login) => {
    if (login !== null) {
        if (isLoginValid (login)){
            if (isLoginUnique (logins, login)){
                logins.push (login);  
                alert('Логин успешно добавлен!');
            } else {
                alert ('Такой логин уже используется!');
            }
        } else {
            alert ('Ошибка! Логин должен быть от 4 до 16 символов')
        }
    } else {
        alert('Отменено пользователем!');
    }
}

const login = prompt('Введите новый логин (от 4 до 16-ти символов)');
addLogin(logins,login);




// const isLoginValid = function(login) {
//     if (login.length >= 4 && login.length <= 16){
//         return true;
//     } else {
//         alert ('Ошибка! Логин должен быть от 4 до 16 символов');
//     }
// };

// const isLoginUnique = function(logins, login) {
//     return logins.includes(login);
// };

// const addLogin = function(login) {
//     if (isLoginValid (login) === true && isLoginUnique (logins, login) !== true){
//        logins.push (login);  
//        alert('Логин успешно добавлен!');
//     } else if (isLoginUnique (logins, login) === true){
//         alert ('Такой логин уже используется!');
//     }

// };

// const login = prompt('Введите новый логин (от 4 до 16-ти символов)');
// if (login === null) {
//     alert('Отменено пользователем!');
// } else {
// addLogin(login);
// }
