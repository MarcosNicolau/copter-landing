import React from "react";
import Hero from "./hero.jsx";
import Features from "./features.jsx";
import Security from "./security.jsx";
import StartOperate from "../shared/components/start-operate.jsx";
import Cta from "./cta.jsx";

const Home = () => {
	return (
		<>
			<Hero />
			<Features />
			<Security />
			<StartOperate />
			<Cta />
		</>
	);
};

export default Home;
