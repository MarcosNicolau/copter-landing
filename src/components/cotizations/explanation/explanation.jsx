import React from "react";
import { useExplanationContext } from "./context";
import { useCryptoContext } from "../context";

const Explanation = () => {
	const {
		state: { explanation },
	} = useExplanationContext();
	const {
		state: { illustration, name },
	} = useCryptoContext();
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
