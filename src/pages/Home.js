import React from "react";
import PageMeta from "../components/common/PageMeta";
import ContactFormThree from "../components/contact/ContactFormThree";
import FeatureTwo from "../components/features/FeatureTwo";
import PromoThree from "../components/promo/PromoThree";
import Clients from "../components/clients/Clients";
import TestimonialTwo from "../components/testimonial/TestimonialTwo";
import Layout from "../layout/Layout";
import Hero from "./Hero";

const Home = () => {
	return (
		<Layout>
			<PageMeta title="FlexCode - PT FlexCode Space Teknologi" />
			<Hero />
			<PromoThree />
			<FeatureTwo cardDark />
			<Clients />
			<TestimonialTwo bgWhite />
			<ContactFormThree />
		</Layout>
	);
};

export default Home;
