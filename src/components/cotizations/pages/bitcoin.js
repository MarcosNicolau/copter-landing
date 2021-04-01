import React from "react";
import bitcoinInitial from "../../../assets/cryptos/initial/bitcoin.svg";
import bitcoinLogo from "../../../assets/cryptos/full/bitcoin.svg";
import bitcoinIllustration from "../../../assets/illustrations/cotization/bitcoin.svg";
import Cotization from "../cotization";

const BitcoinCotization = () => {
	const cryptoInfo = {
		name: "Bitcoin",
		abbr: "BTC",
		initialLogo: bitcoinInitial,
		logo: bitcoinLogo,
		illustration: bitcoinIllustration,
		color: "#fd9608",
	};
	const pricing = {
		currency: "ARS",
		pairs: [
			{ currency: "ARS", name: "Pesos" },
			{ currency: "USD", name: "Dolares" },
		],
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

export default BitcoinCotization;
