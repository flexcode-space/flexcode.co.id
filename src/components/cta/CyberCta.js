import React from "react";
import { Link } from "react-router-dom";

const CyberCta = () => {
	return (
		<section className="cyber-cta pb-60">
			<div className="container">
				<div
					className="cyber-cta-bg p-5 rounded-custom"
					style={{
						background:
							"url('/assets/img/cb_call_to_action.png') no-repeat center / cover",
					}}
				>
					<div className="row">
						<div className="col-lg-9 col-md-9">
							<div className="cyber-cta-info position-relative">
								<div className="">
									<h2 className="text-white">
										Are You Ready? Book Appoinment Now!
									</h2>
									<p className="lead text-white mb-0">
										Get Your Quite or Call : (080) 5388-273-284
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="cyber-cta-btn">
								<Link to="/contact-us" className="mt-3 btn btn-primary me-auto">
									Making Appoinment <i className="far fa-arrow-right"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CyberCta;
