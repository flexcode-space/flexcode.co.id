import React from "react";
import PageHeader from "../components/common/PageHeader";
import PageMeta from "../components/common/PageMeta";
import ContactBox from "../components/contact/ContactBox";
import ContactFormTwo from "../components/contact/ContactFormTwo";
import Layout from "../layout/Layout";

const Contact = () => {
	return (
		<Layout>
			<PageMeta title="Contact Us - FlexCode" />
			<PageHeader
				title="Contact Us"
				desc="Have a question? Need help? Don't hesitate, drop us a line"
			/>
			<ContactBox />
			<ContactFormTwo />
		</Layout>
	);
};

export default Contact;
