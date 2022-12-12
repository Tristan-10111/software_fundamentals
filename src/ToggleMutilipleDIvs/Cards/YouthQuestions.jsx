import React from "react";
import YouthQuestionsData from "../../Data/YouthQuestions.json";

export default function YouthQuestions() {
	return (
		<div>
			<div>
				<h2 className='text-center text-light mt-3'>
					Youth Reflection Questions
				</h2>
			</div>
			{YouthQuestionsData.map((youthQuestion) => {
				return (
					<div key={youthQuestion.id} className='d-flex flex-column mt-5'>
						<button className='border-0 m-2 rounded'>
							{youthQuestion.youthQuestion1}
						</button>
						<button className='border-0 m-2 rounded'>
							{youthQuestion.youthQuestion2}
						</button>
						<button className='border-0 m-2 rounded'>
							{youthQuestion.youthQuestion3}
						</button>
						<button className='border-0 m-2 rounded'>
							{youthQuestion.youthQuestion4}
						</button>
					</div>
				);
			})}
		</div>
	);
}
