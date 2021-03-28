import Hero from "./hero";
import Features from "./features";
import Security from "./security";
import StartOperate from "../shared/components/start-operate";
import Cta from "./cta";

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
