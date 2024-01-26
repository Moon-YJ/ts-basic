// return값이 있는 함수면 파라미터 뒤에 리턴값 타입 지정 가능
// 리턴값이 없으면 리턴값의 타입을 void로 지정
// 일반적으로 인수가 제대로 전달되면 return값이 잘못 나올리가 없고 return으로 에러가 나도 이미 에러가 난 상황이기때문에 return에 타입 지정이 무의미
const test = () => {
    console.log('abc');
};
// 다른 로직의 함수라고 하더라도 전달되는 인수와 리턴값이 매번 같은 패턴이면 일일이 함수마다 타입 지정이 번거로움
// 따라서 인터페이스로 특정 함수의 타입을 지정해서 재활용 가능
const plus = (n1, n2) => {
    return n1 + n2;
};
const minus = (n1, n2) => {
    return n1 - n2;
};
const multiply = (n1, n2) => {
    return n1 * n2;
};
const divide = (n1, n2) => {
    return n1 / n2;
};
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
