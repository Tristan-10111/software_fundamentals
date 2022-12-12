import React, { useState } from "react";
import "../Styles/ToggleMultipleDivs.css";
import * as Cards from "../ToggleMutilipleDIvs/index";
import DefaultQuestion from "./DefaultQuestion";

export default function ToggleDivs2() {
	const [state, changeState] = useState({
		selectedQuestionsType: "",
	});
	// console.log(state.selectedQuestionsType);

	function renderSelectedQuestionsType(selectedQuestionsType) {
		if (!selectedQuestionsType) {
			return <DefaultQuestion />;
		}
		const Card = Cards[selectedQuestionsType];
		return <Card />;
	}

	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-6 bg-warning'>
					<div className='form-group top-margin-small'>
						<label className='card-selector-label'>Select Card Style</label>
						<select
							className='form-control'
							onChange={(e) =>
								changeState({ selectedQuestionsType: e.target.value })
							}>
							<option></option>
							<option>Happy</option>
							<option>Angry</option>
							<option>YouthQuestions</option>
						</select>
					</div>
				</div>
				<div className='col-6 bg-danger'>
					{renderSelectedQuestionsType(state.selectedQuestionsType)}
				</div>
			</div>
		</div>
	);
}
