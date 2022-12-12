import React from "react";
import AngryQuestions from "../../Data/AngryQuestions.json";

export default function CardB() {
	return (
		<div>
			<div>
				<h2 className='text-center text-light mt-3'>Angry Questions</h2>
			</div>
			{AngryQuestions.map((angryQuestion) => {
				return (
					<div key={angryQuestion.id} className='d-flex flex-column mt-5'>
						<button className='border-0 m-2 rounded'>
							{angryQuestion.angryQuestion1}
						</button>
						<button className='border-0 m-2 rounded'>
							{angryQuestion.angryQuestion2}
						</button>
						<button className='border-0 m-2 rounded'>
							{angryQuestion.angryQuestion3}
						</button>
						<button className='border-0 m-2 rounded'>
							{angryQuestion.angryQuestion4}
						</button>
					</div>
				);
			})}
		</div>
	);
}
