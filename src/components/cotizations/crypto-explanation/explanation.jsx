import React from "react";
import { useCryptoExplanationContext } from "./context";

const Explanation = () => {
	const {
		state: { illustration, name, explanation },
	} = useCryptoExplanationContext();
	return (
		<section>
			<div className="flex-row-center explanation">
				<img src={illustration} alt="crypto-illustration" />
				<div className="explanation__description flex-column-center">
					<h1 className="title">Que es {name}?</h1>
					<p>{explanation}</p>
				</div>
			</div>
		</section>
	);
};

export default Explanation;
