import React from "react";
import HeroTitle from "../../components/common/HeroTitle";

const HeroSix = () => {
	return (
		<>
			<section
				className="hero-section ptb-120 bg-dark text-white"
				style={{
					background:
						"url('/assets/img/shape/dot-dot-wave-shape.svg')no-repeat bottom left",
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
									title=" Advanced Solutions for Business"
									desc="        Proactively coordinate quality quality vectors vis-a-vis
                  supply chains quickly engage client."
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
									<ul className="nav subscribe-feature-list mt-3 justify-content-lg-start justify-content-md-center">
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
						<div className="col-xl-6 col-lg-6 mt-5">
							<div
								className="hero-img-wrap position-relative"
								data-aos="fade-left"
							>
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
			</section>
		</>
	);
};

export default HeroSix;
