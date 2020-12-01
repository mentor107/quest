
let name = prompt('Как тебя зовут?');
    alert('Привет ' + (name));

let q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    sum;
q1 = confirm('20 > 10?');
if (q1 == true) {
    alert('Правильно');
    sum += 1;
}
else {
    alert('Неправильно');
}

q2 = confirm('Небо голубое?');
if (q2 == true) {
    alert('Правильно');
    sum += 1;
}
else {
    alert('Неправильно');
}

q3 = confirm('100 / 25 = 4?');
if (q3 == true) {
    alert('Правильно');
    sum += 1;
}
else {
    alert('Неправильно');
}

q4 = prompt('Сколько пальцев на руках?');
if (q4 == 10) {
    alert('Правильно');
    sum += 1;
}
else {
    alert('Неправильно');
}

q5 = prompt('Сколько часов в сутках?');
if (q5 == 24) {
    alert('Правильно');
    sum += 1;
}
else {
    alert('Неправильно');
}
q6 = prompt('Какое сегодня число?');
if (q6 == 1) {
    alert('Правильно');
    sum += 1;
}
else {
    alert('Неправильно');
}

if (sum => 5) {
    alert('Ты молодец!');
}
else {
    alert('Тоже неплохо!');
}