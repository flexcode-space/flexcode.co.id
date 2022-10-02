import React from "react";
import { Link } from "react-router-dom";

import HeroTitle from "../../components/common/HeroTitle";

const HeroFour = () => {
	return (
		<>
			<section
				className="hero-section ptb-120 text-white bg-dark"
				style={{
					background:
						"url('/assets/img/hero-dot-bg.png')no-repeat center right",
				}}
			>
				<div className="container">
					<div className="row justify-content-center text-center text-lg-start align-items-center">
						<div className="col-lg-6 col-md-10">
							<div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
								<HeroTitle
									title="Build Better App with Quiety Software"
									desc="Proactively coordinate quality quality vectors vis-a-vis
                  supply chains. Quickly engage client-centric web services."
								/>

								<div
									className="action-btns mt-5"
									data-aos="fade-up"
									data-aos-delay="50"
								>
									<Link to="/request-for-demo" className="btn btn-primary me-3">
										Request Demo
									</Link>
									<Link to="/contact-us" className="btn btn-outline-light">
										Contact Us
									</Link>
								</div>
								<ul
									className="nav subscribe-feature-list d-flex justify-content-center justify-content-lg-start w-100 mt-3"
									data-aos="fade-up"
									data-aos-delay="100"
								>
									<li className="nav-item">
										<span className="ms-0">
											<i className="far fa-check-circle text-primary me-2"></i>
											Free 14-day trial
										</span>
									</li>
									<li className="nav-item">
										<span>
											<i className="far fa-check-circle text-primary me-2"></i>
											No credit card required
										</span>
									</li>
								</ul>

								<div
									className="d-flex justify-content-center justify-content-lg-start mt-5"
									data-aos="fade-up"
									data-aos-delay="150"
								>
									<img
										src="assets/img/awards-01.svg"
										alt="awards"
										className="me-4 img-fluid"
									/>
									<img
										src="assets/img/awards-02.svg"
										alt="awards"
										className="img-fluid"
									/>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-8">
							<div
								className="hero-img-wrap position-relative app-screen-bg mt-5"
								style={{
									backgroundImage: "url(assets/img/shape/shape-bg-3.svg)",
								}}
								data-aos="fade-up"
								data-aos-delay="200"
							>
								<img
									src="assets/img/screen/app-screen-on-hand.png"
									alt="hero"
									className="img-fluid position-relative z-5"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroFour;
