import React from "react";
import OpeningQuestions from "../Data/OpeningQuestions.json";

export default function DefaultQuestion() {
	return (
		<div>
			<div>
				<h2 className='text-center text-light mt-3'>Opening Questions</h2>
			</div>
			{OpeningQuestions.map((openingQuestion) => {
				return (
					<div key={openingQuestion.id} className='d-flex flex-column mt-5'>
						<button className='border-0 m-2 rounded'>
							{openingQuestion.openingQuestion1}
						</button>
						<button className='border-0 m-2 rounded'>
							{openingQuestion.openingQuestion2}
						</button>
						<button className='border-0 m-2 rounded'>
							{openingQuestion.openingQuestion3}
						</button>
						<button className='border-0 m-2 rounded'>
							{openingQuestion.openingQuestion4}
						</button>
					</div>
				);
			})}
		</div>
	);
}
