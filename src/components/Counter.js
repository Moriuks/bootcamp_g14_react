/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

export default function Counter() {
	const [counter, setCounter] = useState(0);
	const [otherCounter, setOtherCounter] = useState(0);

	useEffect(() => {
		console.warn("Me ejecuto  cada que cambie el estado other counter");
	}, [otherCounter]);

	useEffect(() => {
		console.log("Me ejecuto solo la primera vez");
	}, []);

	useEffect(() => {
		console.log("Me ejecuto cada que cambie el estado counter");
		if (counter % 3 === 0 && counter > 0) {
			setOtherCounter(otherCounter + 1);
		}
	}, [counter]);

	return (
		<div>
			<p>Counter: {counter}</p>
			<p>Counter 2: {otherCounter}</p>
			<button onClick={() => setCounter(counter + 1)}>Add</button>
		</div>
	);
}