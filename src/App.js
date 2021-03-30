import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Aos from "aos";
import "./styles/style.scss";
import "aos/dist/aos.css";

//Contexts
import NavContextProvider from "./components/shared/states/nav-context";
import PriceContextProvider from "./components/cotizations/price/price-context";

//Nav and footer
import Navigation from "./components/navigation";
import Footer from "./components/footer.jsx";

//Pages
import Home from "./components/home";
import BitcoinCotization from "./components/cotizations/bitcoin";

const App = () => {
	useEffect(() =>
		Aos.init({
			once: "false",
			easing: "ease",
			duration: 1200,
			disable: "mobile",
			offset: "100",
		})
	);
	return (
		<Router>
			<NavContextProvider>
				<Navigation />
				<Switch>
					<Route exact path="/" component={Home} />
					<PriceContextProvider>
						<Route exact path="/cotizaciones/bitcoin" component={BitcoinCotization} />
					</PriceContextProvider>
				</Switch>
			</NavContextProvider>
			<Footer />
		</Router>
	);
};

export default App;
