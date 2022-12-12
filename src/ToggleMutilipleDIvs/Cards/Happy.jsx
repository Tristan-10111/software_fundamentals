import React from "react";
import HappyQuestions from "../../Data/HappyQuestions.json";

export default function CardA() {
	return (
		<div>
			<div>
				<h2 className='text-center text-light mt-3'>Happy Questions</h2>
			</div>
			{HappyQuestions.map((happyQuestion) => {
				return (
					<div key={happyQuestion.id} className='d-flex flex-column mt-5'>
						<button className='border-0 m-2 rounded'>
							{happyQuestion.happyQuestion1}
						</button>
						<button className='border-0 m-2 rounded'>
							{happyQuestion.happyQuestion2}
						</button>
						<button className='border-0 m-2 rounded'>
							{happyQuestion.happyQuestion3}
						</button>
						<button className='border-0 m-2 rounded'>
							{happyQuestion.happyQuestion4}
						</button>
					</div>
				);
			})}
		</div>
	);
}
