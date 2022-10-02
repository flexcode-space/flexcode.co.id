import React from "react";
import Layout from "../layout/Layout";
import PageHeader from "../components/common/PageHeader";
import PageMeta from "../components/common/PageMeta";
import Portfolio from "../components/portfolio/Portfolio";

const PortfolioList = () => {
	return (
		<Layout>
			<PageMeta title="Portfolio - FlexCode" />
			<PageHeader
				title="Portfolio"
				desc="We deliver our best performance for every each project to let
								your customer satisfied with the product"
			/>
			<Portfolio />
		</Layout>
	);
};

export default PortfolioList;
