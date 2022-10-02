import React from "react";

const OurProducts = () => {
	return (
		<div className="container">
			<div className="row ptb-100">
				<div className="col-lg-6">
					<div className="position-relative d-flex flex-column h-100 flex-wrap bg-danger-soft p-5 rounded-custom">
						<div className="cta-left-info mb-2">
							<h5>Utilize your software data</h5>
							<p>
								Progressively reinvent models and niche revolutionary benefits
								for integrated niches.{" "}
							</p>
						</div>
						<div className="action-btns mt-auto">
							<a
								href="/#"
								target="_blank"
								rel="noreferrer"
								className="btn btn-outline-primary btn-sm"
							>
								Start For Free
							</a>
						</div>
						<div className="cta-img position-absolute right-0 bottom-0">
							<img
								src="assets/img/cta-img-1.png"
								alt="cta"
								className="img-fluid"
							/>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="position-relative d-flex flex-column h-100 flex-wrap bg-primary-soft p-5 rounded-custom">
						<div className="cta-left-info mb-2">
							<h5>Get real time updated anytime</h5>
							<p>
								Progressively reinvent models and niche revolutionary benefits
								for integrated niches.{" "}
							</p>
						</div>
						<div className="action-btns mt-auto">
							<a
								href="/#"
								target="_blank"
								rel="noreferrer"
								className="btn btn-outline-primary btn-sm"
							>
								Start For Free
							</a>
						</div>
						<div className="cta-img position-absolute right-0 bottom-0">
							<img
								src="assets/img/cta-img-2.png"
								alt="cta img"
								className="img-fluid"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurProducts;
