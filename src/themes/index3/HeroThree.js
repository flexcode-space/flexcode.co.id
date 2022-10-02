import React from "react";
import HeroTitle from "../../components/common/HeroTitle";

const HeroThree = () => {
	return (
		<>
			<section
				className="hero-section ptb-120"
				style={{
					background:
						"url('/assets/img/shape/dot-dot-wave-shape.svg')no-repeat bottom center",
				}}
			>
				<div className="container">
					<div className="row align-items-center justify-content-lg-between">
						<div className="col-xl-5 col-lg-5">
							<div
								className="hero-content-wrap text-center text-xl-start text-lg-start"
								data-aos="fade-right"
							>
								<HeroTitle
									title="Powerful Solutions for Your Business"
									desc="   Proactively coordinate quality quality vectors vis-a-vis
                  supply chains client-centric web services."
								/>
								<div className="hero-subscribe-form-wrap pt-4 position-relative m-auto m-xl-0 d-none d-md-block d-lg-block d-xl-block">
									<form
										id="subscribe-form"
										name="email-form"
										className="hero-subscribe-form d-block d-lg-flex d-md-flex"
									>
										<input
											type="email"
											className="form-control me-2"
											name="Email"
											data-name="Email"
											placeholder="Enter Your Email Address"
											id="email-address"
											required=""
										/>
										<input
											type="submit"
											value="Subscribe"
											data-wait="Please wait..."
											className="btn btn-primary mt-3 mt-lg-0 mt-md-0"
										/>
									</form>
									<ul className="nav subscribe-feature-list mt-3">
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
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 mt-4 mt-xl-0">
							<div
								className="hero-img-wrap position-relative"
								data-aos="fade-left"
							>
								<ul className="position-absolute animate-element parallax-element shape-service hide-medium">
									<li className="layer" data-depth="0.03">
										<img
											src="assets/img/color-shape/image-1.svg"
											alt="shape"
											className="img-fluid position-absolute color-shape-1"
										/>
									</li>
									<li className="layer" data-depth="0.02">
										<img
											src="assets/img/color-shape/feature-2.svg"
											alt="shape"
											className="img-fluid position-absolute color-shape-2 z-5"
										/>
									</li>
									<li className="layer" data-depth="0.03">
										<img
											src="assets/img/color-shape/feature-3.svg"
											alt="shape"
											className="img-fluid position-absolute color-shape-3"
										/>
									</li>
								</ul>

								<div className="hero-img-wrap position-relative">
									<div className="hero-screen-wrap">
										<div className="phone-screen">
											<img
												src="assets/img/screen/phone-screen.png"
												alt="hero"
												className="position-relative img-fluid"
											/>
										</div>
										<div className="mac-screen">
											<img
												src="assets/img/screen/mac-screen.png"
												alt="hero "
												className="position-relative img-fluid rounded-custom"
											/>
										</div>
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

export default HeroThree;
