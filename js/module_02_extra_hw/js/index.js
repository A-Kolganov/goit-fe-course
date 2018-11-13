'use strict';

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let inputPass;
do {
    let inputPass = prompt("Enter password");
    for (const signIn of passwords) {
        if (signIn === inputPass){
            alert("Добро пожаловать!");
            break;
        }
            attempts = -1;
            alert("Неверный пароль, у вас осталось"+ attempts + "попыток");
    } while (inputPass === passwords || attempts >= +0 || signIn === null);
alert(" ");
console.log(attempts);