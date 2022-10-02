import React from "react";
import PageHeader from "../../../components/common/PageHeader";
import PageMeta from "../../../components/common/PageMeta";
import UnderConstruction from "../../../components/common/UnderConstruction";
import Layout from "../../../layout/Layout";

const Managed = () => {
	return (
		<Layout>
			<PageMeta title="Managed Services - FlexCode" />
			<PageHeader title="Managed Services" desc="Serve. Code. Devliver." />
			<UnderConstruction />
		</Layout>
	);
};

export default Managed;
