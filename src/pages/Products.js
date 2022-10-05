import React from "react";
import Layout from "../layout/Layout";
import PageHeader from "../components/common/PageHeader";
import PageMeta from "../components/common/PageMeta";
import Invityu from "../components/products/Invityu";
import Flexplay from "../components/products/Flexplay";
import Flexware from "../components/products/Flexware";

const Products = () => {
	return (
		<Layout>
			<PageMeta title="Products - FlexCode" />
			<PageHeader
				title="Products"
				desc="Providing the simplest solution for the most complex problem"
			/>
			<Invityu />
			<Flexplay />
			<Flexware />
		</Layout>
	);
};

export default Products;
