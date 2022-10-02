import React from "react";
import { Link } from "react-router-dom";

import SectionTitle from "../common/SectionTitle";

const FeatureImgContent = () => {
	return (
		<>
			<section className="why-choose-us ptb-120">
				<div className="container">
					<div className="row justify-content-lg-between align-items-center">
						<div className="col-lg-6 col-12">
							<div className="feature-img-holder my-4 my-lg-0 my-xl-0">
								<img
									src="/assets/img/widget-7.png"
									className="img-fluid"
									alt="feature"
								/>
							</div>
						</div>
						<div className="col-lg-5 col-12">
							<div className="why-choose-content">
								<div className="icon-box rounded-custom bg-primary shadow-sm d-inline-block">
									<i className="fal fa-shield-check fa-2x text-white"></i>
								</div>
								<SectionTitle
									title="Advanced Analytics, Understand Business"
									description="Distinctively promote parallel vortals with ubiquitous
                  e-markets. Proactively benchmark turnkey optimize
                  next-generation strategic leadership without resource sucking
                  ideas."
								/>
								<ul className="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
									<li className="py-1">
										<i className="fas fa-check-circle me-2 text-primary"></i>
										Thought leadership
									</li>
									<li className="py-1">
										<i className="fas fa-check-circle me-2 text-primary"></i>
										Personal branding
									</li>
									<li className="py-1">
										<i className="fas fa-check-circle me-2 text-primary"></i>
										Modernized prospecting
									</li>
									<li className="py-1">
										<i className="fas fa-check-circle me-2 text-primary"></i>
										Better win rates
									</li>
									<li className="py-1">
										<i className="fas fa-check-circle me-2 text-primary"></i>
										Showcasing success
									</li>
									<li className="py-1">
										<i className="fas fa-check-circle me-2 text-primary"></i>
										Sales compliance
									</li>
								</ul>
								<Link
									to="/about-us"
									className="read-more-link text-decoration-none"
								>
									Know More About Us <i className="far fa-arrow-right ms-2"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FeatureImgContent;
