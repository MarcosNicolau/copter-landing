import React from "react";
import initial from "../../../assets/cryptos/initial/ethereum.svg";
import logo from "../../../assets/cryptos/full/ethereum.svg";
import illustration from "../../../assets/illustrations/cotization/ethereum.svg";
import Cotization from "../cotization";

const EthereumCotization = () => {
	const cryptoInfo = {
		name: "Ethereum",
		abbr: "ETH",
		initialLogo: initial,
		logo: logo,
		illustration: illustration,
		color: "#3d3d3e",
	};
	const pricing = {
		currency: "BTC",
		pairs: [{ currency: "BTC", name: "Bitcoin" }],
	};
	const explanation = `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard dummy 
    text ever since the 1500s, when an unknown printer took a galley of
     type and scrambled it to make a type specimen book.`;

	return (
		<Cotization
			cryptoInfo={cryptoInfo}
			pricing={pricing}
			explanation={explanation}
			chart="true"
		/>
	);
};

export default EthereumCotization;
