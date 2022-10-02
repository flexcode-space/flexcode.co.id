import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";

const FeatureTwo = ({ cardDark }) => {
	return (
		<>
			<section
				className={`feature-section ptb-120 ${
					cardDark ? "bg-dark" : "bg-light"
				}`}
			>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6 col-md-10">
							{cardDark ? (
								<SectionTitle
									subtitle="Services"
									title="Best Services Grow Your Business Value"
									description="We provide the best services for the development of your business and company. You just sit quietly and let us do the work."
									centerAlign
									dark
								/>
							) : (
								<SectionTitle
									subtitle="Services"
									title="Best Services Grow Your Business Value"
									description="We provide the best services for the development of your business and company. You just sit quietly and let us do the work."
									centerAlign
								/>
							)}
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="feature-grid">
								<div
									className={`shadow-sm highlight-card rounded-custom p-5 ${
										cardDark
											? "bg-custom-light promo-border-hover border border-2 border-light text-white"
											: "bg-white"
									}`}
									data-aos="fade-up"
									data-aos-delay="50"
								>
									<div
										className="
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-primary-soft
                      mb-32
                    "
									>
										<i className="fal fa-code icon-sm text-primary"></i>
									</div>
									<div className="feature-content">
										<h3 className="h5">Development</h3>
										<p>
											We have a strong team of engineering team that can help
											you to build web and mobile applications for your needs.
										</p>
										<p>Some of the systems that we have built include:</p>
										<ul className="list-unstyled mb-0">
											<li className="py-1">
												<i
													className={`fad fa-check-circle me-2 ${
														cardDark ? "text-warning" : "text-primary"
													}`}
												></i>
												Information Systems
											</li>
											<li className="py-1">
												<i
													className={`fad fa-check-circle me-2 ${
														cardDark ? "text-warning" : "text-primary"
													}`}
												></i>
												Company Profile
											</li>
											<li className="py-1">
												<i
													className={`fad fa-check-circle me-2 ${
														cardDark ? "text-warning" : "text-primary"
													}`}
												></i>
												e-Commerce
											</li>
											<li className="py-1">
												<i
													className={`fad fa-check-circle me-2 ${
														cardDark ? "text-warning" : "text-primary"
													}`}
												></i>
												Web Platform
											</li>
											<li className="py-1">
												<i
													className={`fad fa-check-circle me-2 ${
														cardDark ? "text-warning" : "text-primary"
													}`}
												></i>
												Hybrid / Native Apps
											</li>
											<li className="py-1">
												<i
													className={`fad fa-check-circle me-2 ${
														cardDark ? "text-warning" : "text-primary"
													}`}
												></i>
												Progressive Web Apps
											</li>
											<li className="py-1">
												<i
													className={`fad fa-check-circle me-2 ${
														cardDark ? "text-warning" : "text-primary"
													}`}
												></i>
												Learning Management System
											</li>
										</ul>
									</div>
									<Link
										to="/services/development"
										className="link-with-icon text-decoration-none mt-3"
									>
										View Details <i className="far fa-arrow-right"></i>
									</Link>
								</div>
								<div
									className={`feature-card shadow-sm rounded-custom p-5 ${
										cardDark
											? "bg-custom-light promo-border-hover border border-2 border-light text-white"
											: "bg-white"
									}`}
									data-aos="fade-up"
									data-aos-delay="50"
								>
									<div
										className="
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-success-soft
                      mb-32
                    "
									>
										<i className="fal fa-rocket-launch icon-sm text-success"></i>
									</div>
									<div className="feature-content">
										<h3 className="h5">Business Application</h3>
										<p className="mb-0">
											We have embraced the power technology and used it to helps
											many business do things more effective and efficient.
										</p>
									</div>
									<Link
										to="/services/business"
										className="link-with-icon text-decoration-none mt-3"
									>
										View Details <i className="far fa-arrow-right"></i>
									</Link>
								</div>
								<div
									className={`feature-card shadow-sm rounded-custom p-5 ${
										cardDark
											? "bg-custom-light promo-border-hover border border-2 border-light text-white"
											: "bg-white"
									}`}
									data-aos="fade-up"
									data-aos-delay="50"
								>
									<div
										className="
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-danger-soft
                      mb-32
                    "
									>
										<i className="fal fa-screen-users icon-sm text-danger"></i>
									</div>
									<div className="feature-content">
										<h3 className="h5">IT Training</h3>
										<p className="mb-0">
											We love to share our experiences and knowledge so that
											your team can create their app faster.
										</p>
									</div>
									<Link
										to="/services/training"
										className="link-with-icon text-decoration-none mt-3"
									>
										View Details <i className="far fa-arrow-right"></i>
									</Link>
								</div>
								<div
									className={`feature-card shadow-sm rounded-custom p-5 ${
										cardDark
											? "bg-custom-light promo-border-hover border border-2 border-light text-white"
											: "bg-white"
									}`}
									data-aos="fade-up"
									data-aos-delay="50"
								>
									<div
										className="
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-dark-soft
                      mb-32
                    "
									>
										<i className="fal fa-server icon-sm text-dark"></i>
									</div>
									<div className="feature-content">
										<h3 className="h5">Cloud Services</h3>
										<p className="mb-0">
											Secure, managed public cloud services with a
											network-centric design and multiple layers of security.
										</p>
									</div>
									<Link
										to="/services/cloud"
										className="link-with-icon text-decoration-none mt-3"
									>
										View Details <i className="far fa-arrow-right"></i>
									</Link>
								</div>
								<div
									className={`feature-card shadow-sm rounded-custom p-5 ${
										cardDark
											? "bg-custom-light promo-border-hover border border-2 border-light text-white"
											: "bg-white"
									}`}
									data-aos="fade-up"
									data-aos-delay="50"
								>
									<div
										className="
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-warning-soft
                      mb-32
                    "
									>
										<i className="fal fa-screwdriver-wrench icon-sm text-warning"></i>
									</div>
									<div className="feature-content">
										<h3 className="h5">Managed Services</h3>
										<p className="mb-0">
											We help you drive and manage your innovation through our
											enterprise-grade consulting, technical and support.
										</p>
									</div>
									<Link
										to="/services/managed"
										className="link-with-icon text-decoration-none mt-3"
									>
										View Details <i className="far fa-arrow-right"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FeatureTwo;
