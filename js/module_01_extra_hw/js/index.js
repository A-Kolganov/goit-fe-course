'use strict';

let sharm = 15;
let hurgada = 25;
let taba = 6;

const buyTickets = Number.parseInt(prompt('Здраствуйте! Сколько мест Вы желаете забронировать?'));
if ( buyTickets === Number){
    alert("Ошибка ввода dgadgadf");
} else if ( buyTickets === 0){
    alert("Ошибка ввода");
} else {
    if ( buyTickets <= taba) {
            const yes = confirm ("Подходит ли Вам тур Таба?");
            if ( yes === true) {
                alert("Приятного путешествия в группе Таба");
            } else { 
                alert("Нам очень жаль, приходите еще!");
            }
    } else if (buyTickets > taba && buyTickets <= sharm) {
        const yes = confirm ("Подходит ли Вам тур Шарм?");
            if ( yes === true) {
                alert("Приятного путешествия в группе Шарм");
            } else { 
                alert("Нам очень жаль, приходите еще!");
            }
    } else if ( buyTickets > sharm && buyTickets <= hurgada) {
        const yes = confirm ("Подходит ли Вам тур Хургада?");
            if ( yes === true) {
                alert("Приятного путешествия в группе Хургада");
            } else { 
                alert("Нам очень жаль, приходите еще!");
            }
    } else {
        alert("Извините, столько мест нет ни в одной группе!");
    }
}
console.log(typeof buyTickets);

