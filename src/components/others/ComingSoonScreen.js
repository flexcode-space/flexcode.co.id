import React from "react";
import { Link } from "react-router-dom";

const ComingSoonScreen = () => {
	return (
		<>
			<section
				className="coming-soon-section min-vh-100 ptb-120 overflow-hidden position-relative w-100 d-flex flex-column justify-content-center"
				style={{
					background:
						"url('/assets/img/page-header-bg.svg')no-repeat bottom right",
				}}
			>
				<div className="bg-dark fixed-bg"></div>
				<div className="container">
					<div className="row">
						<div className="col-lg-5 col-12">
							<div className="coming-soon-content-wrap position-relative z-2">
								<Link to="/" className="mb-5 d-block">
									<img
										src="assets/img/logo-white.png"
										alt="logo"
										className="img-fluid"
									/>
								</Link>

								<h5 className="text-white">We are Coming Soon...</h5>
								<h1 className="text-white">
									We are Working Our New Website, Please Stay With us!
								</h1>
								<div className="action-btns">
									<Link
										to="/contact-us"
										className="btn btn-primary mt-5 popup-with-form"
									>
										Notify Me!
									</Link>
								</div>

								<div className="social-list-wrap mt-100">
									<ul className="list-unstyled author-social-list social-bg-ts list-inline mb-0">
										<li className="list-inline-item">
											<Link to="#">
												<i className="fab fa-linkedin-in"></i>
											</Link>
										</li>
										<li className="list-inline-item">
											<Link to="#">
												<i className="fab fa-twitter"></i>
											</Link>
										</li>
										<li className="list-inline-item">
											<Link to="#">
												<i className="fab fa-github"></i>
											</Link>
										</li>
										<li className="list-inline-item">
											<Link to="#">
												<i className="fab fa-facebook-f"></i>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<ul className="animated-circle list-unstyled z--1">
						<li className="transition-delay-1 bg-danger"></li>
						<li className="transition-delay-2 bg-warning"></li>
						<li className="transition-delay-3 bg-primary"></li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default ComingSoonScreen;
