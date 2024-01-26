const calcTest = (n1, n2) => {
    console.log(n1, n2);
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
const test = (n1, n2, n3, n4) => {
    console.log(n1, n2, n3, n4);
};
test(2, 3, 4, 5);
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
let student3 = {
    name: 'Emily',
    age: 30,
    isFemale: true,
    score: 'F',
};
let student4 = {
    name: 'Paul',
    age: 30,
    isFemale: false,
};
let student5 = {
    name: 'Paul',
    age: 30,
    isFemale: false,
};
let student6 = {
    name: 'Paul',
    isFemale: false,
};
const testA = (info) => {
    console.log(info);
};
// 특정 parameter값을 optional 처리시 type 오류는 생기지 않지만
// optional 처리한 값을 코드 내부적으로 사용하는 경우, 해당 값에 대한 예외처리하지 않으면 에러 발생
const testB = (n1, n2, n3) => {
    //const result = n1 + n2 + n3;
    //const result = n3 === undefined ? n1 + n2 : n1 + n2 + n3;
    // 더 간결하게 처리
    const result = n1 + n2 + (n3 || 0);
    return result;
};
console.log(test(1, 2));
// ||연산자로 예외처리했을때 문제가 발생할 수 있는 상황
const introduce = (name, age) => {
    console.log(`This is ${name}`);
    console.log(`${name} is ${age !== null && age !== void 0 ? age : 'default'} years old`);
};
// 기존 ||연산자보다 null병합 연산자(??)를 써야되는 이유
// ||연산자는 빈문자나 0같이 실제적인 값조차도 false로 인식해서 예외처리하므로 예상치못한 문제발생 가능
// ??연산자는 무조건 undefined, null같이 실제적으로 에러가 발생할만한 상황에서만 예외처리
introduce('my Baby', 0);
