// 프리젠테이셔널 컴포넌트
import React from 'react';

const Counter = ({number,diff,onIncrease,onDecrease,onsetDiff}) => {
	const onchange=(e)=>{
		onsetDiff(e.target.value*1);
	}
	return (
		<div>
			<h1>{number}</h1>
			<div>
				<input type="number" value={diff} min="1" onChange={onchange}/>
				<button onClick={onIncrease}>+</button>
				<button onClick={onDecrease}>-</button>
			</div>
		</div>
	);
};

export default Counter;