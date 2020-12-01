let mark = 0,
    name = 0;
let qw1 = confirm("5Х5=700?");
console.log(qw1);
if(qw1==true){
    mark+=100;
};
let qw2 = confirm("Ты человек?");
console.log(qw1);
if(qw2==true){
    mark+=100;
}
else{
    mark+=100;
    name = prompt("тогда кто же???")
        if(name==""){
            name = prompt("давай пиши!!!")
        }
    
}
alert("как скажешь, "+name);
let qw3 = confirm("А может ты кот?");
console.log(qw1);
if(qw3==true){
    alert("Допустим...");
}
else{
    mark+=100;
}

let qw4 = confirm("Сейчас 2020?");
console.log(qw1);
if(qw4==true){
    mark+=100;
};
let qw5 = confirm("этот тест был лёгким для тебя?");
console.log(qw1);
if(qw5==true){
    mark+=100;
};
if(mark <= 500){
    alert("вот твоя оценка,"+name"\nЦелых "+mark"быллов");
}
else{
        alert("где-то ты ошибся, "+name, "\n но твой результат..."+mark);
}
s