import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Aos from "aos";
import "./styles/style.scss";
import "aos/dist/aos.css";

//Contexts
import NavContextProvider from "./components/shared/states/nav-context";
import CryptoContextProvider from "./components/cotizations/context";

//Nav and footer
import Navigation from "./components/navigation";
import Footer from "./components/footer.jsx";

//Pages
import Home from "./components/home";
import BitcoinCotization from "./components/cotizations/pages/bitcoin";
import EthereumCotization from "./components/cotizations/pages/ethereum";
import ReserveCotization from "./components/cotizations/pages/reserve";

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
					<CryptoContextProvider>
						<Route exact path="/cotizaciones/bitcoin" component={BitcoinCotization} />
						<Route exact path="/cotizaciones/ethereum" component={EthereumCotization} />
						<Route exact path="/cotizaciones/reserve" component={ReserveCotization} />
					</CryptoContextProvider>
				</Switch>
			</NavContextProvider>
			<Footer />
		</Router>
	);
};

export default App;
