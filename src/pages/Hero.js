import React from "react";
import { Link } from "react-router-dom";
import { PopupButton } from "react-calendly";
import HeroTitle from "../components/common/HeroTitle";

const Hero = () => {
	return (
		<>
			<section
				className="hero-section ptb-120 bg-dark text-white"
				style={{
					background:
						"url('/assets/img/page-header-bg.svg')no-repeat bottom left",
				}}
			>
				<div className="container">
					<div className="row align-items-center justify-content-lg-between">
						<div className="col-xl-5 col-lg-5">
							<div
								className="hero-content-wrap text-center text-xl-start text-lg-start mt-5 mt-lg-0 mt-xl-0"
								data-aos="fade-right"
							>
								<HeroTitle
									title="We Help You Invent the Digital Future"
									desc="Leave the heavy-lifting to us. Focus on your business."
								/>
								<div className="hero-subscribe-form-wrap pt-4 position-relative m-auto m-xl-0 d-none d-md-block d-lg-block d-xl-block">
									<div
										className="action-btns pb-3"
										data-aos="fade-up"
										data-aos-delay="50"
									>
										<Link to="/about" className="btn btn-primary me-3">
											About Us
										</Link>
										<PopupButton
											className="btn btn-outline-light"
											url="https://calendly.com/flexcode/consultation"
											rootElement={document.getElementById("root")}
											text="Schedule a Meeting"
											utm={{
												utmCampaign: "Schedule a Meeting",
												utmContent: "Homepage",
												utmMedium: "Button",
												utmSource: "Landing Page",
												utmTerm: "Schedule a Meeting",
											}}
										/>
									</div>
									<ul className="nav subscribe-feature-list mt-3 justify-content-lg-start justify-content-md-center">
										<li className="nav-item">
											<span className="ms-0">
												<i className="far fa-check-circle text-primary me-2"></i>
												Free Consultation
											</span>
										</li>
										<li className="nav-item">
											<span>
												<i className="far fa-check-circle text-primary me-2"></i>
												Excellent Customer Support
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-5 col-lg-5 mt-5">
							<div
								className="hero-img-wrap position-relative"
								data-aos="fade-left"
							>
								<div className="hero-screen-wrap">
									<div className="mac-screen">
										<img
											src="/assets/images/hero.png"
											alt="hero "
											width="60%"
											className="position-relative img-fluid rounded-custom"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
