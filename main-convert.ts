// 해당 로직에서 중요하게 다룰 Post 데이터 객체의 타입을 미리 interface로 선언
interface Task {
	id: number;
	title: string | Node; // title에 담기는 값 자체가 DOM을 통해서 가져오는 문자열이기 때문에 undefined로 union타입 지정
	createAt: Date;
	complete: boolean;
}

// HTML요소를 변수에 담을시 Typescript에 내장되어있는 노드요소 타입을 가져와서 제네릭으로 설정 가능
const list = document.querySelector<HTMLUListElement>('#list');
const form = document.querySelector<HTMLFormElement>('#form');
const input = document.querySelector<HTMLInputElement>('#title');

// JSON.parse - 무조건 파라미터로 인수가 문자값만 넘어오도록 강제되어 있음
// 따라서 빈배열도 문자화해서 대체값으로 지정해야함
let tasks: Task[] = JSON.parse(localStorage.getItem('TASKS') || '[]');

tasks.forEach((task) => addListItem(task));

// DOM이 담겨있는 변수의 경우는 값 자체가 Web API를 통해서 외부에서 가져오는 값이기 때문에
// JS 자체적으로 제어권이 없으므로 항상 값이 null일수도 있다고 인지하기 때문에 optional chaining 필수
form?.addEventListener('submit', (e) => {
	e.preventDefault();
	if (input?.value.trim() === '') return alert('할일을 입력하세요.');
	// 입력한 항목으로 객체를 만들고
	const newTask = {
		id: performance.now(),
		title: input?.value || '',
		createAt: new Date(),
		complete: false,
	};
	// 배열에 추가한뒤 로컬저장소에 저장하는 함수 호출
	tasks.push(newTask);
	addListItem(newTask);
	saveTasks();
	// 원래 input 요소가 DOM이므로 optional chaining을 하면 되는데 아래의 경우는 불가
	// 대입연산자 좌항에는 optional chaining 처리 불가
	// 따라서 해당 DOM이 있을때만 &&연산자로 해당 구문이 실행되게 처리
	input && (input.value = '');
});

// 전송시 할일 목록 객체를 배열에 추가하는 함수 (동적으로 생성될 목록에 체크 이벤트 연결)
function addListItem(task: Task) {
	const item = document.createElement('li');
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	const button = document.createElement('button');
	button.innerText = '삭제';
	// 동적요소 스타일링
	if (task.complete) {
		item.style.textDecoration = 'line-through';
		checkbox.checked = true;
		item.append(button);
	} else {
		item.style.textDecoration = 'none';
		checkbox.checked = false;
	}
	// 동적으로 생긴 목록요소에 앞으로 change이벤트 연결
	checkbox.addEventListener('change', () => {
		task.complete = checkbox.checked;
		if (task.complete) {
			item.style.textDecoration = 'line-through';
			const button = document.createElement('button');
			button.innerText = '삭제';
			item.append(button);

			button.addEventListener('click', (e) => {
				const del_id = task.id;
				tasks = tasks.filter((el) => el.id !== del_id);
				saveTasks();
				// 타입스크립트에서는 event객체 안쪽의 property를 읽지 못하는 버그
				// 해결방법: 해당 이벤트 객체를 변수로 옮겨담고 직접 타입 지정
				const eventTarget = e.currentTarget as HTMLButtonElement;
				eventTarget.parentElement?.remove();
			});
		} else {
			item.style.textDecoration = 'none';
			item.querySelector('button')?.remove();
		}
		saveTasks();
	});
	item.prepend(checkbox, task.title);
	list?.append(item);
}

// 배열에 저장한 정보값을 다시 로컬저장소에 저장하는 함수
function saveTasks() {
	localStorage.setItem('TASKS', JSON.stringify(tasks));
}
