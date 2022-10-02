import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
	return (
		<section
			className="sign-up-in-section bg-dark ptb-60"
			style={{
				background:
					"url('/assets/img/page-header-bg.svg')no-repeat right bottom",
			}}
		>
			<div className="container">
				<div className="row align-items-center justify-content-center">
					<div className="col-lg-5 col-md-8 col-12">
						<Link to="/" className="mb-5 d-block text-center">
							<img
								src="/assets/images/logo-white.png"
								alt="logo"
								className="img-fluid"
								style={{ width: "250px" }}
							/>
						</Link>
						<div className="register-wrap p-5 bg-light shadow rounded-custom text-center">
							<h1 className="fw-bold h3">Thank you!</h1>
							<p className="text-dark pb-2">
								We have received your inquiry, we will reply to your message
								soon as possible.
							</p>
							<div className="col-12 mt-4">
								<Link to="/">
									<button
										type="button"
										className="btn btn-primary mt-3 d-block w-100"
									>
										Back to Home
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ThankYou;
