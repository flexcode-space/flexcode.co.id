import React from "react";
import OurStory from "../components/about/OurStory";
import PageHeader from "../components/common/PageHeader";
import PageMeta from "../components/common/PageMeta";
import FeatureWithBg from "../components/features/FeatureWithBg";
import Team from "../components/team/Team";
import Layout from "../layout/Layout";

const About = () => {
	return (
		<Layout>
			<PageMeta title="About Us - FlexCode" />
			<PageHeader
				title="About Us"
				desc="Creativity and quality is our destination"
			/>
			<OurStory />
			<FeatureWithBg />
			<Team />
		</Layout>
	);
};

export default About;
