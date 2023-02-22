// 프레젠테이션 컴포넌트
import React from 'react';

// 상태값 count, 
type CounterProps={
	count: number,
	onIncrease:()=>void;
	onDecrease:()=>void;
}
const Counter = ({count,onIncrease,onDecrease}:CounterProps) => {
	return (
		<div>
			<h2>{count}</h2>
			<div>
				<button onClick={onIncrease}>+</button>
				<button onClick={onDecrease}>-</button>
			</div>
		</div>
	);
};

export default Counter;