"use strict";

const adminLogin = "admin";
const adminPassword = "m4ngo1zh4ackz0r";
const err = "Access denied!!!"; 
const enter = "Welcome home!!!";
const cancel = "Cancelled by user!!!";
const login = prompt("Enter login");

if (login === adminLogin) {
    const password = prompt("Enter password");
    if (adminPassword === password) {
        alert(enter);
    } else if (password === null) {
       alert(cancel);
    } else {
        alert(err);  
    }
} else if (login === null) {
    alert(cancel);
} else {
    alert(err) ;
}
