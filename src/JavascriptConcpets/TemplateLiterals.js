import { useState } from "react";
import React from "react";

export default function TemplateLiterals() {
	const [greetUser, setGreetUser] = useState({
		greeting: "",
		user: "",
	});

	const greetCurrentUser = () => {
		setGreetUser((greetUser) => !greetUser);
	};
	const greeting = "Good Morning";
	const user = "Tristan Vollenhoven";

	const [count, setCount] = useState(0);
	function increment() {
		setCount(count + 1);
	}
	function decrement() {
		setCount(count - 1);
	}

	return (
		<div>
			<button onClick={greetCurrentUser}>Greet me</button>
			{!greetUser ? (
				<>
					<p>{` ${greeting} ${user}`}</p>
				</>
			) : null}

			<div>
				<button onClick={decrement}>-</button>
				<p>{count}</p>
				<button onClick={increment}>+</button>
			</div>
		</div>
	);
}
