import React from "react";
import { Link } from "react-router-dom";

const FooterTwo = () => {
	return (
		<footer className="cyber-footer bg-gradient">
			<div className="cyber-footer-top ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
							<div className="">
								<div className="footer-single-col mb-4">
									<img
										src="/assets/img/logo-white.png"
										alt="logo"
										className="img-fluid logo-white"
									/>
								</div>
								<p className="text-white">
									Our latest news, articles, and resources, we will sent to your
									inbox weekly. Our latest news, articles, and resources, we
									will sent to your inbox weekly.
								</p>
								<ul className="list-unstyled list-inline cyber-footer-social-list mb-0">
									<li className="list-inline-item">
										<a href="/#">
											<i className="fab fa-facebook-f"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="/#">
											<i className="fab fa-instagram"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="/#">
											<i className="fab fa-dribbble"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="/#">
											<i className="fab fa-github"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-12 col-lg-8 mt-4 mt-md-0 mt-lg-0">
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<div className="">
										<h3 className="h5 mb-4 text-white">Company Services</h3>
										<ul className="list-unstyled footer-nav-list mb-lg-0">
											<li>
												<Link to="/" className="text-decoration-none">
													Threat Hunter
												</Link>
											</li>
											<li>
												<Link to="/about-us" className="text-decoration-none">
													Incident Responder
												</Link>
											</li>
											<li>
												<Link to="/services" className="text-decoration-none">
													Secure Managed IT
												</Link>
											</li>
											<li>
												<Link to="/career" className="text-decoration-none">
													Compliance
												</Link>
											</li>
											<li>
												<Link
													to="/integrations"
													className="text-decoration-none"
												>
													Cyber Security
												</Link>
											</li>
											<li>
												<Link
													to="/integration-single"
													className="text-decoration-none"
												>
													Disaster Planning
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="">
										<h3 className="h5 mb-4 text-white">Quick Links</h3>
										<ul className="list-unstyled footer-nav-list mb-lg-0">
											<li>
												<Link to="/contact-us" className="text-decoration-none">
													Contact Us
												</Link>
											</li>
											<li>
												<Link to="/about-us" className="text-decoration-none">
													FAQ
												</Link>
											</li>
											<li>
												<Link to="/services" className="text-decoration-none">
													Privacy Policy
												</Link>
											</li>
											<li>
												<Link to="/career" className="text-decoration-none">
													Terms & Conditions
												</Link>
											</li>
											<li>
												<Link
													to="/integrations"
													className="text-decoration-none"
												>
													Team
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="">
										<h3 className="h5 mb-4 text-white">Contact Info</h3>
										<ul className="list-unstyled footer-nav-list mb-lg-0">
											<li>
												<Link to="/" className="text-decoration-none">
													Phone: +61-821-456
												</Link>
											</li>
											<li>
												<Link to="/about-us" className="text-decoration-none">
													Email: hello@vaximo.com
												</Link>
											</li>
											<li>
												<Link to="/" className="text-decoration-none">
													Address: 123, Western Road, Melbourne Australia
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="cyber-footer-bottom">
				<div className="container">
					<p className="mb-0 py-4 text-center">
						Copyright @2022 All Rights Reserved by
						<a
							href="https://www.themetags.com"
							className="text-decoration-none ms-2"
						>
							ThemeTags
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default FooterTwo;
