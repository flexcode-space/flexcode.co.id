import React from "react";
import PageHeader from "../../../components/common/PageHeader";
import PageMeta from "../../../components/common/PageMeta";
import Layout from "../../../layout/Layout";

import TabCategory from "./components/TabCategory";

const Development = () => {
	return (
		<Layout>
			<PageMeta title="Development Services - FlexCode" />
			<PageHeader title="Development" desc="Serve. Code. Devliver." />
			<TabCategory />
		</Layout>
	);
};

export default Development;
