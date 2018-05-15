//Типы данных и переменные:
'use strict';
var userName = 'Александр';
console.log(userName);
var userName = 'Оксана';
console.log(userName);

//Условный оператор if:
var Rain = true; 
if (Rain  === true){
 console.log("Останусь дома");}
else {
 console.log("Пойду гулять");
}
//Циклический оператор for:
var a = 1;
for (var i = 0; i <10; i++) {
 a+=a;
 console.log(a);
}

//Функции:
var p1= 3;
var p2 = 5;
var p3 = 2;
function sum(p1,p2,p3) {
 var sumParametr = p1 + p2 + p2;
 return (p1 +p2 +p3);
}
sum(10,20,30);
var sumFun = sum(10,20,30);
console.log(sumFun);
sum(30,40,50);
var sumFun = sum(30,40,50);
console.log(sumFun);

//Массивы и объекты:
//Задание 1:
var loftSchool = [ 'привет', 'loftschool' ];
loftSchool.push('я изучаю');
loftSchool.push('javascript');
console.log(loftSchool.length);
for (var i = 0; i <loftSchool.length; i++) {
 console.log(loftSchool[i]);
}

//Задание 2:
var arrayNumber = [ 30,47,123,178,13,456,901,12,70,139 ];
for (var i = 0; i <=arrayNumber.length; i++) {
 if ( arrayNumber[i] > 100 ) {
  console.log(arrayNumber[i]);
 }    
}

//Задание 3:
var userObj = {
 name: 'Александр',
 lastName: 'Михайлов',
 age: 34
};
userObj['name'];
userObj['lastName'];
userObj['age'];
console.log(userObj['name'],userObj['lastName'],userObj['age']);

//Задание 4:
function hello(human) {
 return 'Привет, меня зовут ' + human.name + ' '+ human.lastName + ' и мне ' + human.age + ' года';
}
var nameFun = hello(userObj);
console.log(nameFun);
