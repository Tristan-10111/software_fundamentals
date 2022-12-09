import React, { useState } from "react";

export default function ReactHook1() {
	const [time, setTime] = useState(new Date().toString());
	const upDateTime = () => {
		setTime(new Date().toString());
	};
	setInterval(upDateTime, 1000);

	const [count, setCount] = useState(0);

	const [greetUser, setGreetUser] = useState({
		greeting: "",
		user: "",
		computer: "",
		model: "",
	});
	const [greetComputer, setGreetComputer] = useState({});

	function greetCurrentComputer() {
		setGreetComputer((greetComputer) => !greetComputer);
	}

	const computer = "Lenova";
	const model = "T450";

	function greetCurrentUser() {
		setGreetComputer({
			...greetComputer,
		});
		setGreetUser((greetUser) => !greetUser);
	}
	const greeting = "Good Morning";
	const user = "Tristan Vollenhoven";

	return (
		<div>
			<div>
				<p>show me the time {time}</p>
			</div>
			<div>
				<button onClick={(e) => setCount(count + 1)}>+</button>
				<p>{count}</p>
				<button onClick={(e) => setCount(count - 1)}>-</button>
			</div>
			<div>
				<button onClick={greetCurrentUser}>Greet user</button>
				<button onClick={greetCurrentComputer}>Greet computer</button>
			</div>
			<div>
				{!greetUser ? (
					<div>{`${greeting} ${user}`}</div>
				) : greetComputer ? (
					<div>{`${computer} ${model}`}</div>
				) : null}
			</div>
		</div>
	);
}
