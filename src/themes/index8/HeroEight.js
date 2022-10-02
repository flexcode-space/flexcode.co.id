import React from "react";
import { Link } from "react-router-dom";

const HeroEight = () => {
	return (
		<>
			<section
				className="hero-section ptb-120 bg-purple text-white"
				style={{
					background:
						"url('/assets/img/app-two-mockup-bg.png')no-repeat center center / cover",
				}}
			>
				<div className="container">
					<div className="row justify-content-xl-between align-items-center">
						<div className="col-lg-5 col-xl-5 col-xl-5 col-md-10">
							<div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
								<h5 className="text-warning">Build your best quality app</h5>
								<h1 className="fw-bold display-5">
									Develop Your App with Quiety
								</h1>
								<p className="lead">
									Completely incubate client-centric data for robust
									infrastructures. Quickly extend revolutionary accurate
									strategic theme areas without cooperative.
								</p>
								<div className="action-btns mt-5">
									<Link to="/about-us" className="btn btn-outline-light">
										Explore More
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-5 col-md-8 mt-5">
							<div className="hero-app-img position-relative text-center">
								<img
									src="assets/img/app-two-phone.png"
									alt="app screen"
									className="img-fluid"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroEight;
