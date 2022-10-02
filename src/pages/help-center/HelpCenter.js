import React from "react";
import PageMeta from "../../components/common/PageMeta";
import HelpCenterHeader from "../../components/help-center/HelpCenterHeader";
import FooterOne from "../../layout/Footer/FooterOne";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";
import HelpCenterDetail from "../../components/help-center/HelpCenterDetail";

const HelpCenter = () => {
	return (
		<Layout>
			<PageMeta />
			<Navbar navDark />
			<HelpCenterHeader />
			<HelpCenterDetail />
			<FooterOne
				style={{
					background:
						"url('/assets/img/page-header-bg.svg')no-repeat bottom left",
				}}
			/>
		</Layout>
	);
};

export default HelpCenter;
