import React from "react";
import { Link } from "react-router-dom";

const CtaFive = () => {
	return (
		<>
			<section
				className="app-two-download-cta ptb-120"
				style={{
					background:
						"url('/assets/img/app-download-cta.png')no-repeat center center / cover",
				}}
			>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6 col-xl-6 col-md-10">
							<div className="section-heading text-center">
								<h2 className="text-white">
									Get The App Now and Start Learning Today
								</h2>
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-8 col-xl-7 col-12">
							<div className="action-btns mt-3">
								<ul className="list-unstyled text-center">
									<li className="d-inline-block me-2 mb-lg-0">
										<Link
											className="
                  d-flex
                  align-items-center
                  text-decoration-none
                  rounded
                "
											to="/#"
										>
											<i className="fab fa-apple pe-2"></i>
											<span>
												Available on the <span>App Store</span>
											</span>
										</Link>
									</li>
									<li className="d-inline-block me-2 mb-lg-0">
										<Link
											className="d-flex align-items-center text-decoration-none rounded"
											to="/#"
										>
											<i className="fab fa-google-play pe-2"></i>
											<span>
												Available on the <span>Google Play</span>
											</span>
										</Link>
									</li>
									<li className="d-inline-block mb-lg-0">
										<Link
											className="d-flex align-items-center text-decoration-none rounded"
											to="/#"
										>
											<i className="fab fa-windows pe-2"></i>
											<span>
												Available on the <span>Google Play</span>
											</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CtaFive;
