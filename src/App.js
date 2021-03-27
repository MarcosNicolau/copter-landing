import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "./styles/style.scss";
import "aos/dist/aos.css";

//Contexts
import NavContextProvider from "./components/shared/states/nav-context";

//Pages
import Navigation from "./components/navigation";
import Home from "./components/home";

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
				</Switch>
			</NavContextProvider>
		</Router>
	);
};

export default App;
