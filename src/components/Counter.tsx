import useCounterStore from "../store/useCounterStore";

const Counter = () => {
    const {count, increment, decrement} = useCounterStore()
	return (
		<div>
			<h1>Count : {count}</h1>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
};

export default Counter;
