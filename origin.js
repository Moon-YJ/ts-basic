const list = document.querySelector('#list');
const form = document.querySelector('#form');
const input = document.querySelector('#title');
// 처음 페이지 접속시 로컬저장소로부터 배열을 parsing해서 가져옴
let data = localStorage.getItem('TASKS');

let tasks = data ? JSON.parse(data) : [];
// 배열반복 돌면서 목록생성함수 호출
tasks.forEach((task) => addListItem(task));

// 전송버튼 클릭 이벤트
form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (input.value.trim() === '') return alert('할일을 입력하세요.');
	// 입력한 항목으로 객체를 만들고
	const newTask = {
		id: performance.now(),
		title: input.value,
		createAt: new Date(),
		complete: false,
	};
	// 배열에 추가한뒤 로컬저장소에 저장하는 함수 호출
	tasks.push(newTask);
	addListItem(newTask);
	saveTasks();
	input.value = '';
});

// 전송시 할일 목록 객체를 배열에 추가하는 함수 (동적으로 생성될 목록에 체크 이벤트 연결)
function addListItem(task) {
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
		checkbox.checkded = false;
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
				e.currentTarget.parentElement.remove();
			});
		} else {
			item.style.textDecoration = 'none';
			item.querySelector('button').remove();
		}
		saveTasks();
	});

	item.prepend(checkbox, task.title);
	list.append(item);
}

// 배열에 저장한 정보값을 다시 로컬저장소에 저장하는 함수
function saveTasks() {
	localStorage.setItem('TASKS', JSON.stringify(tasks));
}
