import { ActionType,createReducer,deprecated } from "typesafe-actions";
const { createAction,createStandardAction } = deprecated;
// redux 모듈
// 1. action 타입
// const ADD_TODO = "todos/ADD_TODO" as const;
// const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
// const REMOVE_TODO = "todos/REMOVE_TODO" as const;
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const REMOVE_TODO = "todos/REMOVE_TODO";
	// 새로운 항목 추가시 사용할 id의 값
	let nextId= 1;

// 2. action 생성 함수
// export const addTodo= (text:string)=> {
// 	return{type:ADD_TODO, payload:{id:nextId++, text}}
// }
// export const removeTodo=(id:number)=>{
// 	return{
// 		type:REMOVE_TODO,
// 		payload:id
// 	}
// }
// export const toggleTodo=(id:number)=>{
// 	return{
// 		type:TOGGLE_TODO,
// 		payload:id
// 	}
// }
export const addTodo=createAction(ADD_TODO,action=>(text:string)=>action({id:nextId++, text}));
export const toggleTodo=createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo=createStandardAction(REMOVE_TODO)<number>();
 
// 3. reducer 생성함수
	// (state타입, action타입)
	// 액션객체에 대한 타입
	// type TodoAction= ReturnType<typeof addTodo> | ReturnType<typeof removeTodo> | ReturnType<typeof toggleTodo>
	const actions= {addTodo,removeTodo,toggleTodo};
	type TodoAction= ActionType<typeof actions>;
	// 상태에서 사용할 할일 항목의 타입정의
	export type Todo= {
		id:number,
		text:string,
		isDone:boolean
	}
	// 상태에 대한 타입
	export type TodoState= Todo[];
	// 초기값 정의
	const initialState:TodoState=[];
// function todos(state:TodoState=initialState,action:TodoAction){
// 	switch (action.type) {
// 		case ADD_TODO:
// 			return [
// 				...state,
// 				{
// 					id:action.payload.id,
// 					text:action.payload.text,
// 					isDone:false
// 				}
// 			]
// 		case REMOVE_TODO:
// 			// 이전 상태 배열을 순환하며 배열요소의 id값과 action.payload의 값이 일치하는지?
// 			// 일치하면 요소의 isDone을 반전해서 retrun : 일치하지 않으면 그냥 배열요소 그대로 return
// 			return state.map(todo=>todo.id===action.payload?{...todo,isDone:!todo.isDone}:todo)
// 		case TOGGLE_TODO:
// 			return state.filter(todo=>todo.id!==action.payload);
	
// 		default:
// 			return state;
// 	}
// }
	const todos= createReducer<TodoState,TodoAction>(initialState,{
		[ADD_TODO]:(state,action)=>[...state,{...action.payload, isDone:false}],
		[TOGGLE_TODO]:(state, {payload:id} )=>state.map(todo=>todo.id===id?{...todo,isDone:!todo.isDone}:todo),
		[REMOVE_TODO]:(state,{payload:id})=>state.filter(todo=>todo.id!==id )
	})
export default todos