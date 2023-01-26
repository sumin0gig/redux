// 컨테이너 컴포넌트
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase, setDiff } from '../modules/counter';

const CounterContainer = () => {
	// redux store의 상태를 조회하는 Hook useSelector
	const {number,diff}= useSelector(state=>({...state.counter}));
	const dispatch= useDispatch();
	// 각 액션들을 dispatch하는 함수
	const onIncrease=()=> dispatch(increase());
	const onDecrease=()=> dispatch(decrease());
	const onsetDiff=()=> dispatch(setDiff(diff));
	return (
		<Counter number={number} diff={diff}
		onIncrease={onIncrease} onDecrease={onDecrease} onsetDiff={onsetDiff}
		/>
	);
};

export default CounterContainer;