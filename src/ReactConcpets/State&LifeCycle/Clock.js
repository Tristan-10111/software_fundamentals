import React, { useState } from "react";

export default function Clock() {
	const [date, setDate] = useState(new Date().toString());
	function showDate() {
		setDate(new Date().toString());
	}
	setInterval(showDate, 1000);

	return <div>{date}</div>;
}
