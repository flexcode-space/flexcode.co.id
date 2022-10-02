import React from "react";
import DigiBlog from "../../components/blog/DigiBlog";
import DigiContact from "../../components/contact/DigiContact";
import NewsLetterTwo from "../../components/cta/NewsLetterTwo";
import CustomerBrand from "../../components/customer/CustomerBrand";
import DigiIntegration from "../../components/integration/DigiIntegration";
import DigiWhyChoose from "../../components/others/DigiWhyChoose";
import DigiSerives from "../../components/services/DigiSerives";
import DigiWorkProcess from "../../components/work-process/DigiWorkProcess";
import FooterOne from "../../layout/Footer/FooterOne";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";
import HeroFourteen from "./HeroFourteen";

const HomeFourteen = () => {
	return (
		<Layout>
			<Navbar />
			<HeroFourteen />
			<CustomerBrand />
			<DigiSerives />
			<NewsLetterTwo />
			<DigiWhyChoose />
			<DigiWorkProcess />
			<DigiIntegration />
			<DigiBlog />
			<DigiContact />
			<FooterOne
				style={{
					background:
						"url('/assets/img/page-header-bg.svg')no-repeat bottom left",
				}}
			/>
		</Layout>
	);
};

export default HomeFourteen;
