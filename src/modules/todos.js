// action type 선언
const ADD_TODO= 'todos/ADD_TODO';
const TOGGLE_TODO= 'todos/TOGGLE_TODO';

// action 생성 함수
let nextId=1;
export const addTodo=(text)=>({
	type: ADD_TODO,
	todo: {
		id: nextId++, 
		text: text
	}
});
export const toggleTodo=(id)=>({
	type: TOGGLE_TODO,
	id: id
});

// 초기상태
const initialState=[
	// {id:1,text: '어우....'},
]

// reducer
export default function todos(state=initialState, action){
	switch (action.type) {
		case ADD_TODO:
		return[
			...state,
			action.todo
		]
		case TOGGLE_TODO:
		return state.map(todo=>todo.id===action.id? {...todo, done: !todo.done}: todo);
		default:
			return state;
	}
}