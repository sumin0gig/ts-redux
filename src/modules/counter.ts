// 1. action type
	// action.type이 string으로 추론되지 않고 "counter/이하"와 같이
	// 실제 문자열 값으로 추론되도록 as const를 붙임

import { ActionType,createReducer,deprecated } from "typesafe-actions";
const { createStandardAction } = deprecated;

//typesafe-actions 적용전
	// const INCREASE= "counter/INCREASE" as const;
	// const DECREASE= "counter/DECREASE" as const;
// typesafe-actions 적용후
const INCREASE= "counter/INCREASE" as const;
const DECREASE= "counter/DECREASE" as const;

// 2. action 생성함수
//typesafe-actions 적용전
	// export const increase=()=>({type: INCREASE})
	// export const decrease=()=>({type: DECREASE})
// typesafe-actions 적용후
	export const increase=createStandardAction(INCREASE)();
	export const decrease=createStandardAction(DECREASE)();

	// action 객체 타입
		//typesafe-actions 적용전
		// type CounterAction= ReturnType<typeof increase> | ReturnType<typeof decrease>
		//typesafe-actions 적용후
		const actions= {increase,decrease};
		type CounterAction= ActionType<typeof actions>
		


	// 상태 타입
	type CounterState= {count:number}
// 초기 상태
const initialState={count:0};

// 3. reducer
//typesafe-actions 적용전
	// function counter(state:CounterState=initialState,action:CounterAction){
	// 	switch (action.type) {
	// 		case INCREASE:
	// 			return {count: state.count+1};
	// 		case DECREASE:
	// 			return {count: state.count-1};
	// 		default:
	// 			return state;
	// 	}
	// }
//typesafe-actions 적용후
const counter= createReducer<CounterState,CounterAction>(initialState,{
	[INCREASE]:state=>({count:state.count+1}),
	[DECREASE]:(state,action)=>({count:state.count-1}),
})
const counter2= createReducer<CounterState,CounterAction>(initialState)
.handleAction(increase,state=>({count:state.count+1}))
.handleAction(decrease,state=>({count:state.count+1}))

// redux 모듈 만들기

export default counter;
// 