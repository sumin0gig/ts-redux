import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer= combineReducers({counter:counter, todos})

export default rootReducer;
// rootReducer를 호출하면 상태를 호출해준다.
// 때문에 rootReducer를 ReturnType하면은 특정함수의 리턴 타입을 추론한다.
// 음~~
// 
export type rootState= ReturnType<typeof rootReducer>