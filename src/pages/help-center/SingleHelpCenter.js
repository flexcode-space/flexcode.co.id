import React from "react";
import PageMeta from "../../components/common/PageMeta";
import SingleSupportDetails from "../../components/help-center/SingleSupportDetails";
import FooterOne from "../../layout/Footer/FooterOne";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";

const SingleHelpCenter = () => {
	return (
		<Layout>
			<PageMeta />
			<Navbar />
			<SingleSupportDetails />
			<FooterOne
				style={{
					background:
						"url('/assets/img/page-header-bg.svg')no-repeat bottom left",
				}}
			/>
		</Layout>
	);
};

export default SingleHelpCenter;
