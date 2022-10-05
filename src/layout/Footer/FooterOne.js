import React from "react";
import { Link } from "react-router-dom";

const FooterOne = ({ footerLight, style, footerGradient }) => {
	return (
		<>
			<footer className="footer-section">
				<div
					className={`footer-top ${footerLight ? "footer-light" : "bg-dark"} ${
						footerGradient ? "bg-gradient" : ""
					}  text-white ptb-100`}
					style={style}
				>
					<div className="container">
						<div className="row justify-content-between">
							<div className="col-md-5 col-lg-5 mb-md-4 mb-lg-0">
								<div className="footer-single-col">
									<div className="footer-single-col mb-4">
										<img
											src="/assets/images/logo-white.png"
											alt="logo"
											className="img-fluid logo-white"
											style={{ width: "200px", marginLeft: "-6px" }}
										/>
										<img
											src="/assets/images/logo-dark.svg"
											alt="logo"
											className="img-fluid logo-color"
											style={{ width: "200px", marginLeft: "-6px" }}
										/>
									</div>

									<p className="fw-bold text-white">
										PT Flexcode Space Teknologi{" "}
									</p>
									<p>
										<b>Head Office:</b>
										<br />
										Jl. Mampang Prapatan Raya, No. 73A, 3rd Floor, Kec. Mampang{" "}
										<br className="d-none d-md-block" />
										Prapatan, Kota Jakarta Selatan, DKI Jakarta. - 12790.
									</p>
									<p className="mb-0">
										<i className="far fa-phone me-2"></i>
										<a
											className="read-more-link text-white ms-1"
											href="tel:+62217989671"
										>
											(021) 798-9671
										</a>
										<span className="ms-2 text-muted">or</span>
										<a
											className="read-more-link text-white ms-2"
											href="https://wa.me/628888641170"
											target="_blank"
											rel="noreferrer"
										>
											(+62) 8888-6411-70
										</a>
									</p>
									<p>
										<i className="far fa-envelope-open me-1"></i>
										<a
											className="read-more-link text-white ms-2"
											href="mailto:hello@flexcode.co.id"
										>
											hello@flexcode.co.id
										</a>
									</p>
								</div>
							</div>
							<div className="col-md-6 col-lg-6 mt-4 mt-md-0 mt-lg-0">
								<div className="row">
									<div className="col-md-3 col-lg-3 mt-4 mt-md-0 mt-lg-0">
										<div className="footer-single-col">
											<h3>Company</h3>
											<ul className="list-unstyled footer-nav-list mb-lg-0">
												<li>
													<Link to="/about" className="text-decoration-none">
														About Us
													</Link>
												</li>
												<li>
													<Link to="/services" className="text-decoration-none">
														Services
													</Link>
												</li>
												<li>
													<Link to="/products" className="text-decoration-none">
														Products
													</Link>
												</li>
												<li>
													<Link
														to="/portfolio"
														className="text-decoration-none"
													>
														Portfolio
													</Link>
												</li>
												<li>
													<Link to="/contact" className="text-decoration-none">
														Contact Us
													</Link>
												</li>
											</ul>
										</div>
									</div>
									<div className="col-md-3 col-lg-3 mt-4 mt-md-0 mt-lg-0">
										<div className="footer-single-col">
											<h3>Discover</h3>
											<ul className="list-unstyled footer-nav-list mb-lg-0">
												<li>
													<a
														href="https://blog.flexcode.co.id"
														className="text-decoration-none"
														target="_blank"
														rel="noreferrer"
													>
														Blog
													</a>
												</li>
												<li>
													<a
														href="https://community.flexcode.co.id"
														className="text-decoration-none"
														target="_blank"
														rel="noreferrer"
													>
														Community
													</a>
												</li>
												<li>
													<a
														href="https://academy.flexcode.co.id"
														className="text-decoration-none"
														target="_blank"
														rel="noreferrer"
													>
														Academy
													</a>
												</li>
												<li>
													<Link to="/career" className="text-decoration-none">
														Career
													</Link>
												</li>
												<li>
													<a
														href="https://event.flexcode.co.id"
														className="text-decoration-none"
														target="_blank"
														rel="noreferrer"
													>
														Events
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
										<div className="footer-single-col">
											<h3>Services</h3>
											<ul className="list-unstyled footer-nav-list mb-lg-0">
												<li>
													<Link
														to="/services/development"
														className="text-decoration-none"
													>
														Development
													</Link>
												</li>
												<li>
													<Link
														to="/services/business"
														className="text-decoration-none"
													>
														Business Application
													</Link>
												</li>
												<li>
													<Link
														to="/services/training"
														className="text-decoration-none"
													>
														IT Training
													</Link>
												</li>
												<li>
													<Link
														to="/services/cloud"
														className="text-decoration-none"
													>
														Cloud Services
													</Link>
												</li>
												<li>
													<Link
														to="/services/managed"
														className="text-decoration-none"
													>
														Managed Services
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

				<div
					className={`footer-bottom ${
						footerLight ? "footer-light" : "bg-dark"
					} ${footerGradient ? "bg-gradient" : ""} text-white py-4`}
				>
					<div className="container">
						<div className="row justify-content-between align-items-center">
							<div className="col-md-7 col-lg-7">
								<div className="copyright-text">
									<p className="mb-lg-0 mb-md-0">
										&copy; {new Date().getFullYear()}
										<Link to="/" className="text-decoration-none ms-2">
											PT Flexcode Space Teknologi
										</Link>
									</p>
								</div>
							</div>
							<div className="col-md-4 col-lg-4">
								<div className="footer-single-col text-start text-lg-end text-md-end">
									<ul className="list-unstyled list-inline footer-social-list mb-0">
										<li className="list-inline-item">
											<Link to="/#">
												<i className="fab fa-linkedin"></i>
											</Link>
										</li>
										<li className="list-inline-item">
											<Link to="/#">
												<i className="fab fa-instagram"></i>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default FooterOne;
