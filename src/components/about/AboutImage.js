import React from "react";
import { Link } from "react-router-dom";

const AboutImage = () => {
	return (
		<section className="ptb-120">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-left text-lg-center mb-32 mb-lg-0">
							<img src="/assets/img/about.jpg" alt="" className="img-fluid" />
						</div>
					</div>
					<div className="col-lg-6">
						<div className="about-right">
							<h4 className="text-primary h5 mb-3">Why Choose Us</h4>
							<h2 className="mb-4">
								We are working with <br />
								15 years exprience
							</h2>
							<p>
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form, by
								injected humour
							</p>
							<ul className="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
								<li className="py-1">
									<div className="d-flex about-icon-box align-items-center">
										<div className="me-3">
											<img src="/assets/img/pie-chart.png" alt="" />
										</div>
										<div>
											<h5>Expert around the world</h5>
										</div>
									</div>
								</li>
								<li className="py-1">
									<div className="d-flex about-icon-box align-items-center">
										<div className="me-3">
											<img src="/assets/img/team.png" alt="" />
										</div>
										<div>
											<h5>Best Practice For Business</h5>
										</div>
									</div>
								</li>
							</ul>

							<ul className="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
								<li className="py-1">
									<i className="fad fa-check-circle me-2 text-primary"></i>
									Digital Conference
								</li>
								<li className="py-1">
									<i className="fad fa-check-circle me-2 text-primary"></i>
									Greate Speckers
								</li>
								<li className="py-1">
									<i className="fad fa-check-circle me-2 text-primary"></i>Event
									Management
								</li>
								<li className="py-1">
									<i className="fad fa-check-circle me-2 text-primary"></i>
									Have Fun on Event
								</li>
								<li className="py-1">
									<i className="fad fa-check-circle me-2 text-primary"></i>Sales
									compliance
								</li>
								<li className="py-1">
									<i className="fad fa-check-circle me-2 text-primary"></i>
									Showcasing success
								</li>
							</ul>
							<Link
								to="/about-us"
								className="link-with-icon text-decoration-none mt-3 btn btn-primary"
							>
								Learn More
								<i className="fas fa-arrow-right"></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutImage;
