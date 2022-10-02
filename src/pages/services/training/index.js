import React from "react";
import PageHeader from "../../../components/common/PageHeader";
import PageMeta from "../../../components/common/PageMeta";
import UnderConstruction from "../../../components/common/UnderConstruction";
import Layout from "../../../layout/Layout";

const Training = () => {
	return (
		<Layout>
			<PageMeta title="IT Training Services - FlexCode" />
			<PageHeader title="IT Training" desc="Serve. Code. Devliver." />
			<UnderConstruction />
		</Layout>
	);
};

export default Training;
