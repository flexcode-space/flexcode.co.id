import React from "react";
import PaymentCounter from "../../components/counter/PaymentCounter";
import PaymentCustomer from "../../components/customer/PaymentCustomer";
import PaymentFeature from "../../components/others/PaymentFeature";
import PaymentFeatureTwo from "../../components/others/PaymentFeatureTwo";
import PaymentNewsletter from "../../components/others/PaymentNewsletter";
import PaymentTestimonial from "../../components/testimonial/PaymentTestimonial";
import WorkProcessFive from "../../components/work-process/WorkProcessFive";
import FooterOne from "../../layout/Footer/FooterOne";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";
import HeroThirteen from "./HeroThirteen";

const HomeThirteen = () => {
	return (
		<Layout>
			<Navbar navDark />
			<HeroThirteen />
			<PaymentCustomer />
			<PaymentFeature />
			<WorkProcessFive />
			<PaymentFeatureTwo />
			<PaymentCounter />
			<PaymentTestimonial />
			<PaymentNewsletter />
			<FooterOne
				style={{
					background:
						"url('/assets/img/page-header-bg.svg')no-repeat bottom right",
				}}
			/>
		</Layout>
	);
};

export default HomeThirteen;
