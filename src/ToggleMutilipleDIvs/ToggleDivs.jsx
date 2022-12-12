import React, { useState } from "react";

export default function ToggleDivs() {
	const [divState, changeDivState] = useState({
		activeQuestions: null,
		sortOfQuestions: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
	});
	function toggleActiveDiv(index) {
		changeDivState({
			...divState,
			activeQuestions: divState.sortOfQuestions[index],
		});
	}
	return (
		<div>
			{divState.sortOfQuestions.map((questions, index) => (
				<div key={index} className='d-flex' onClick={toggleActiveDiv}>
					{questions.id}
				</div>
			))}
		</div>
	);
}
