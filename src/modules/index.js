import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

// 여러개의 useReducer를 한개로 합치기
const rootReducer= combineReducers({
	counter: counter,
	todos: todos
})

export default rootReducer;