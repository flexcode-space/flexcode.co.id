import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFoundScreen from "../components/others/NotFoundScreen";
import ScrollToTop from "../components/common/ScrollToTop";

import Home from "../pages/Home";
import Services from "../pages/services/Services";
import Products from "../pages/Products";
import PortfolioList from "../pages/PortfolioList";
import PortfolioDetail from "../pages/PortfolioDetail";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Career from "../pages/career/Career";
import Development from "../pages/services/development";
import Business from "../pages/services/business";
import Training from "../pages/services/training";
import Cloud from "../pages/services/cloud";
import Managed from "../pages/services/managed";
import CareerSingle from "../pages/career/CareerSingle";
import ThankYou from "../pages/ThankYou";

const routes = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route exact path="/" element={<Home />} />

				<Route exact path="/services" element={<Services />} />
				<Route exact path="/services/development" element={<Development />} />
				<Route exact path="/services/business" element={<Business />} />
				<Route exact path="/services/training" element={<Training />} />
				<Route exact path="/services/cloud" element={<Cloud />} />
				<Route exact path="/services/managed" element={<Managed />} />

				<Route exact path="/products" element={<Products />} />
				<Route exact path="/portfolio" element={<PortfolioList />} />
				<Route exact path="/portfolio/:slug" element={<PortfolioDetail />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/contact" element={<Contact />} />
				<Route exact path="/career" element={<Career />} />
				<Route exact path="/job/:slug" element={<CareerSingle />} />
				<Route exact path="/thanks" element={<ThankYou />} />

				<Route path="*" element={<NotFoundScreen />} />
			</Routes>
		</BrowserRouter>
	);
};

export default routes;
