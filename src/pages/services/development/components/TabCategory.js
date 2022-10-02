import React from "react";
import { Link } from "react-router-dom";
import LottiePlayer from "../../../../components/common/LottiePlayer";
import SectionTitle from "../../../../components/common/SectionTitle";

const TabCategory = () => {
	return (
		<>
			<section className="feature-tab-section ptb-120 bg-light">
				<div className="container">
					<div className="row justify-content-center align-content-center">
						<div className="col-md-10 col-lg-6">
							<SectionTitle
								subtitle="Services"
								title="Development Services"
								description="We provide development services for various types of your needs, ranging from web development, mobile apps and desktop apps."
								centerAlign
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<ul
								className="nav justify-content-center feature-tab-list-2 mb-0"
								id="nav-tab"
								role="tablist"
							>
								<li className="nav-item">
									<Link
										className="nav-link active"
										to="#tab-1"
										data-bs-toggle="tab"
										data-bs-target="#tab-1"
										role="tab"
										aria-selected="false"
									>
										Web Development
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link"
										to="#tab-2"
										data-bs-toggle="tab"
										data-bs-target="#tab-2"
										role="tab"
										aria-selected="false"
									>
										Mobile App Development
									</Link>
								</li>
							</ul>
							<div className="tab-content" id="nav-tabContent">
								<div
									className="tab-pane fade pt-60 active show"
									id="tab-1"
									role="tabpanel"
								>
									<div className="row justify-content-center align-items-center justify-content-around">
										<div className="col-lg-5">
											<div className="feature-tab-info">
												<h3>Web Development</h3>
												<p>
													Web development services help create all types of
													web-based software and ensure great experience for web
													users. At FlexCode, we professionally design, redesign
													and continuously support customer-facing and
													enterprise web apps to achieve high conversion and
													adoption rates.
												</p>
												<Link
													to="/contact"
													className="read-more-link text-decoration-none mt-4 d-block"
												>
													Request Web Development Service
													<i className="far fa-arrow-right ms-2"></i>
												</Link>
											</div>
										</div>
										<div className="col-lg-5">
											<LottiePlayer src="https://assets9.lottiefiles.com/packages/lf20_ctaacxzb.json" />
										</div>
									</div>
								</div>
								<div className="tab-pane fade pt-60" id="tab-2" role="tabpanel">
									<div className="row justify-content-center align-items-center justify-content-around">
										<div className="col-lg-5">
											<LottiePlayer src="https://assets9.lottiefiles.com/packages/lf20_r6lfrga3.json" />
										</div>
										<div className="col-lg-5">
											<div className="feature-tab-info">
												<h3>Mobile App Development</h3>
												<p>
													Mobile app development services are aimed at building
													iOS & Android applications that effectively complement
													or substitute web solutions. Having delivered 100+
													mobile app development projects so far, FlexCode
													ensures app success by delivering striking UI, secure
													app code, and resilient back ends.
												</p>
												<Link
													to="/contact"
													className="read-more-link text-decoration-none mt-4 d-block"
												>
													Request Mobile App Development Service
													<i className="far fa-arrow-right ms-2"></i>
												</Link>
											</div>
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

export default TabCategory;
