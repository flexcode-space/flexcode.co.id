import React from "react";
import Layout from "../../layout/Layout";
import PageMeta from "../../components/common/PageMeta";
import OpenJobs from "../../components/career/OpenJobs";
import CareerPromo from "../../components/career/CareerPromo";
import PageHeader from "../../components/common/PageHeader";

const Career = () => {
	return (
		<Layout>
			<PageMeta title="Career - Software &amp; IT Solutions HTML Template" />
			<PageHeader
				title="Career"
				desc="If you’re looking for a job, FlexCode is not for you. But, If you want to go on an adventure where you’ll build countries and solve challenging problems, FlexCode may be for you."
			/>
			<OpenJobs />
			<CareerPromo />
		</Layout>
	);
};

export default Career;
