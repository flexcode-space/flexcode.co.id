import React from "react";
import EventBlog from "../../components/blog/EventBlog";
import EventCounter from "../../components/counter/EventCounter";
import EventCta from "../../components/cta/EventCta";
import EventCustomerLogo from "../../components/customer/EventCustomerLogo";
import EventAbout from "../../components/events/EventAbout";
import EventSession from "../../components/events/EventSession";
import SpeakerList from "../../components/events/SpeakerList";
import UpcomingEvent from "../../components/events/UpcomingEvent";
import EventPrice from "../../components/prices/EventPrice";
import EventTestimonial from "../../components/testimonial/EventTestimonial";
import FooterOne from "../../layout/Footer/FooterOne";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";
import HeroFifteen from "./HeroFifteen";

const HomeFifteen = () => {
	return (
		<Layout>
			<Navbar />
			<HeroFifteen />
			<UpcomingEvent />
			<EventAbout />
			<SpeakerList />
			<EventCounter />
			<EventSession />
			<EventPrice />
			<EventTestimonial />
			<EventCta />
			<EventBlog />
			<EventCustomerLogo />
			<FooterOne
				style={{
					background:
						"url('/assets/img/page-header-bg.svg')no-repeat bottom left",
				}}
			/>
		</Layout>
	);
};

export default HomeFifteen;
