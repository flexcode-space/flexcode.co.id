import React from "react";
import PageMeta from "../components/common/PageMeta";
import ContactsForm from "../components/contact/ContactsForm";
import ReviewTwo from "../components/tabs/ReviewTabTwo";
import FooterSocial from "../layout/Footer/FooterSocial";
import Navbar from "../layout/Header/Navbar";
import Layout from "../layout/Layout";

const RequestDemo = () => {
	return (
		<Layout>
			<PageMeta title="Request for Deomo - Software &amp; IT Solutions HTML Template" />
			<Navbar navDark posAbsolute />
			<section
				className="sign-up-in-section bg-dark ptb-120"
				style={{
					background:
						"url('/assets/img/page-header-bg.svg')no-repeat bottom right",
				}}
			>
				<div className="container">
					<div className="row align-items-center justify-content-between">
						<ContactsForm />
						<ReviewTwo reqPage />
					</div>
				</div>
			</section>
			<FooterSocial />
		</Layout>
	);
};

export default RequestDemo;
