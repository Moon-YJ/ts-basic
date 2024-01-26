const plus = (n1, n2) => {
    return n1 + n2;
};
//plus(3,'4'); //error
// 기본 타입
let txt = 'hello';
let num = 0;
let isFemale = true;
// 참조형 타입
let like = ['food', 'music', 'movie'];
let unlike = ['game', 'sports', 'homework'];
let odd = [1, 3, 5];
let even = [2, 4, 6];
// 튜플(tuple) 타입 - 배열에 들어갈 타입을 개별적으로 지정
let combined = [3, 'food', false];
// 유니온 타입으로 들어갈 수 있는 자료형을 복수개 지정
let random = [4, '5', 6, '7'];
let student1 = {
    name: 'David',
    age: 20,
    isFemale: false,
    address: 'Seoul',
};
let student2 = {
    name: 'Amy',
    age: 30,
    isFemale: true,
};
//student2.false //error
