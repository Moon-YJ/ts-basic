// return값이 있는 함수면 파라미터 뒤에 리턴값 타입 지정 가능
// 리턴값이 없으면 리턴값의 타입을 void로 지정
// 일반적으로 인수가 제대로 전달되면 return값이 잘못 나올리가 없고 return으로 에러가 나도 이미 에러가 난 상황이기때문에 return에 타입 지정이 무의미
interface Calc {
	(n1: number, n2: number): number | void;
}
const test: Calc = (n1, n2) => {
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
