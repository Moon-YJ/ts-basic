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

// interface는 객체의 property 확장에 따른 구조변경이 편함, 하지만 type은 불가능
interface Member {
	name: string;
	age: number;
}
interface Member {
	name: string;
	age: number;
	isFemale: boolean;
}
let student4: Member = {
	name: 'Paul',
	age: 30,
	isFemale: false,
};

// type을 사용하는 경우
// 1. 기존 객체타입의 property 추가하는 것이 아닌, 서로 다른 객체를 합쳐서 새로운 타입을 만드는 경우
// 2. 객체가 아닌 일반 자료형이지만 자주 사용하는 커스터마이징된 타입을 재활용하는 경우
interface StudentA {
	name: string;
	age: number;
}
interface StudentB {
	name: string;
	isFemale: boolean;
}
// 1. type으로 서로 다른 두개의 인터페이스를 Intersection으로 합쳐서 새로운 타입 지정
type StudentAB = StudentA & StudentB;
let student5: StudentAB = {
	name: 'Paul',
	age: 30,
	isFemale: false,
};
// 1. type으로 서로 다른 두개의 인터페이스를 유니온타입으로 새로운 타입 지정(둘중 하나의 타입은 무조건 들어가야함)
type StudentC = StudentA | StudentB;
let student6: StudentC = {
	name: 'Paul',
	isFemale: false,
};
// 2. 객체는 아니지만 특정 커스터마이징된 타입을 재활용해야할때 type으로 지정
type commonType = string | null;
const testA = (info: commonType) => {
	console.log(info);
};

// 특정 parameter값을 optional 처리시 type 오류는 생기지 않지만
// optional 처리한 값을 코드 내부적으로 사용하는 경우, 해당 값에 대한 예외처리하지 않으면 에러 발생
const testB = (n1: number, n2: number, n3?: number): number => {
	//const result = n1 + n2 + n3;
	//const result = n3 === undefined ? n1 + n2 : n1 + n2 + n3;
	// 더 간결하게 처리
	const result = n1 + n2 + (n3 || 0);
	return result;
};
console.log(test(1, 2));

// ||연산자로 예외처리했을때 문제가 발생할 수 있는 상황
const introduce = (name: string, age: number) => {
	console.log(`This is ${name}`);
	console.log(`${name} is ${age ?? 'default'} years old`);
};
// 기존 ||연산자보다 null병합 연산자(??)를 써야되는 이유
// ||연산자는 빈문자나 0같이 실제적인 값조차도 false로 인식해서 예외처리하므로 예상치못한 문제발생 가능
// ??연산자는 무조건 undefined, null같이 실제적으로 에러가 발생할만한 상황에서만 예외처리
introduce('my Baby', 0);

// Generic
// 공통된 규칙인데 호출할때 들어갈 자료형을 매번 산정하기 어려울때
// 일일이 타입을 따로 지정하는것이 비효율적이므로 타입지정을 호출할때 지정하는 틀

// 아래같은 경우는 배열에 들어가는 자료값이 일정하지 않으므로 똑같은 구조임에도 불구하고
// 타입에 따른 함수를 여러개 복사해야 되는 번거로움
const getLength = (arr: number[]) => {
	return arr.length;
};

const getLength2 = (arr: string[]) => {
	return arr.length;
};

// any타입으로 지정함으로서 위의 문제점 해결
const getAnyLength = (arr: any[]) => {
	return arr.length;
};

// any타입을 지정하면 정상적이지 못한 값이 들어와도 컴파일시 에러잡지 못함
const numbers = [1, 2, 3, 4, 5];
const letters = ['a', 'b', 'c'];
const weired = [false, 3, '3'];
getAnyLength(numbers);
getAnyLength(letters);
getAnyLength(weired);

// generic으로 호출시 상세타입을 파라미터로 전달
const getGenericLength = <t>(arr: t[]) => {
	return arr.length;
};

// 함수호출시 미리 지정한 경로 타입을 전달하는 구조
getGenericLength<string>(['a', 'b']);
getGenericLength<number>([1, 2]);
getGenericLength<number | string>([1, '2']);
