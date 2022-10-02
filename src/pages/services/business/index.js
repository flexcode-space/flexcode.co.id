import React from "react";
import Layout from "../../../layout/Layout";
import PageHeader from "../../../components/common/PageHeader";
import PageMeta from "../../../components/common/PageMeta";
import UnderConstruction from "../../../components/common/UnderConstruction";

const Business = () => {
	return (
		<Layout>
			<PageMeta title="Business Application Services - FlexCode" />
			<PageHeader title="Business Application" desc="Serve. Code. Devliver." />
			<UnderConstruction />
		</Layout>
	);
};

export default Business;
