import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

// Import views
import Home from "./views/home";
import SingleCharacter from "./views/singleCharacter";
import SinglePlanet from "./views/singlePlanet";
import SingleVehicle from "./views/singleVehicle";
import injectContext from "./store/appContext";

// Import Components
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

//create your first component
const Layout = () => {
	

	return (
		<div>
			<BrowserRouter >
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/singleCharacter/:uid" component={SingleCharacter}/>
						<Route exact path="/singlePlanet/:uid" component={SinglePlanet}/>
						<Route exact path="/singleVehicle/:uid" component={SingleVehicle}/>
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer/>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
