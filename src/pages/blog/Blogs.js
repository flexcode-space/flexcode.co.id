import React from "react";
import BlogGrid from "../../components/blog/BlogGrid";
import PageHeader from "../../components/common/PageHeader";
import PageMeta from "../../components/common/PageMeta";
import FooterOne from "../../layout/Footer/FooterOne";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";

const Blogs = () => {
	return (
		<Layout>
			<PageMeta title="Welcome Our Blog- Software &amp; IT Solutions HTML Templat" />
			<Navbar navDark />
			<PageHeader
				title="Our Latest News and Blogs"
				desc="Completely integrate equity invested partnerships without revolutionary systems. Monotonectally network pandemic e-services via bricks-and-clicks information."
				blogtags
			/>
			<BlogGrid />
			<FooterOne
				style={{
					background:
						"url('/assets/img/page-header-bg.svg')no-repeat bottom right",
				}}
			/>
		</Layout>
	);
};

export default Blogs;
