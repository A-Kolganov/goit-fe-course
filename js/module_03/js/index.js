"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const addLoginSucces = "Логин успешно добавлен!";
const enabledLogin = "Такой логин уже используется!";
const incorrectLogin = "Ошибка! Логин должен быть от 4 до 16 символов";
const canceledByUser = "Отменено пользователем!";

const isLoginValid = login => {
  return login.length >= 4 && login.length <= 16;
};
const isLoginUnique = (logins, login) => {
  return logins.includes(login);
};

const addLogin = (logins, login) => {
  if (login !== null) {
    if (isLoginValid(login)) {
      if (!isLoginUnique(logins, login)) {
        logins.push(login);
        return addLoginSucces;
      }
      {
        return enabledLogin;
      }
    }
    {
      return incorrectLogin;
    }
  }
  {
    return canceledByUser;
  }
};

console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
