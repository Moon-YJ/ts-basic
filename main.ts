// return값이 있는 함수면 파라미터 뒤에 리턴값 타입 지정 가능
// 리턴값이 없으면 리턴값의 타입을 void로 지정
// 일반적으로 인수가 제대로 전달되면 return값이 잘못 나올리가 없고 return으로 에러가 나도 이미 에러가 난 상황이기때문에 return에 타입 지정이 무의미
interface Calc {
	(n1: number, n2: number): number | void;
}
const calcTest: Calc = (n1, n2) => {
	console.log(n1, n2);
};
// 다른 로직의 함수라고 하더라도 전달되는 인수와 리턴값이 매번 같은 패턴이면 일일이 함수마다 타입 지정이 번거로움
// 따라서 인터페이스로 특정 함수의 타입을 지정해서 재활용 가능
const plus: Calc = (n1, n2) => {
	return n1 + n2;
};
const minus: Calc = (n1, n2) => {
	return n1 - n2;
};
const multiply: Calc = (n1, n2) => {
	return n1 * n2;
};
const divide: Calc = (n1, n2) => {
	return n1 / n2;
};

// 파라미터로 전달되는 인수의 개수를 예상할 수 없는 경우, rest 파라미터 설정하고 타입 지정
interface Test {
	(...n: number[]): number | void;
}
const test: Test = (n1, n2, n3, n4) => {
	console.log(n1, n2, n3, n4);
};
test(2, 3, 4, 5);

// 기본 타입
let txt: string = 'hello';
let num: number = 0;
let isFemale: boolean = true;

// 참조형 타입
let like: string[] = ['food', 'music', 'movie'];
let unlike: Array<string> = ['game', 'sports', 'homework'];
let odd: number[] = [1, 3, 5];
let even: Array<number> = [2, 4, 6];

// 튜플(tuple) 타입 - 배열에 들어갈 타입을 개별적으로 지정
let combined: [number, string, boolean] = [3, 'food', false];
// 유니온 타입으로 들어갈 수 있는 자료형을 복수개 지정
let random: Array<number | string> = [4, '5', 6, '7'];
// Interface - 객체같이 복잡한 구조의 타입을 지정할때 특정 경우에 대한 커스텀타입을 제작해서 재활용
interface Student {
	name: string;
	age: number;
	readonly isFemale: boolean; // 해당 property를 수정 불가능하게 읽기전용으로 지정
	address?: string; // 해당 property를 선택사항으로 지정
}
let student1: Student = {
	name: 'David',
	age: 20,
	isFemale: false,
	address: 'Seoul',
};
let student2: Student = {
	name: 'Amy',
	age: 30,
	isFemale: true,
};
//student2.false //error

// type 특정 커스터마이징된 자료형을 새로 선언할때
// type vs interface 차이점
// interface는 객체에만 적용 가능
// type은 자료형 상관없이 모두 적용 가능
// 커스텀 자료형을 만들어야할때 객체는 가급적 interface, 그외의 자료형은 type으로 지정
type Grade = 'A' | 'B' | 'C' | 'D' | 'F';
/*
  interface S {
    name: string;
    age: number;
    readonly isFemale: boolean;
    score: Grade;
  }
*/
type S = {
	name: string;
	age: number;
	readonly isFemale: boolean;
	score: Grade;
};
let student3: S = {
	name: 'Emily',
	age: 30,
	isFemale: true,
	score: 'F',
};
//student1.score = 'G' //error
