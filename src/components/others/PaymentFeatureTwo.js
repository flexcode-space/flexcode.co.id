import React from "react";
import { Link } from "react-router-dom";

export default function PaymentFeatureTwo() {
	return (
		<section className="payment-feature-img pt-200">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5">
						<div className="payment-feature-img-left mb-5 mb-lg-0">
							<h2 className="mb-4">
								Investing isn’t easy We just Professional Way it feel that way
							</h2>
							<p className="mb-4">
								Globally expedite sticky platforms whereas end-to-end vortals.
								Energistically synergize emerging . Monotonectally incubate
								bleeding-edge e-business Appropriately matrix quality core
								competencies functionalities.ompetently pursue client-centric
								relationships .
							</p>
							<Link to="/contact-us" className="btn-gradient-sqr">
								Get Started
							</Link>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="payment-feature-img-right text-center position-relative mt-5 mt-lg-0">
							<div className="payment-feature-mockup position-relative">
								<img
									src="/assets/img/payment-mock.png"
									className="img-fluid"
									alt="Mocup"
								/>
							</div>
							<div className="payment-feture-shape">
								<img
									src="/assets/img/payment-ft-2.png"
									className="shape-one shadow-lg"
									alt="Tax"
								/>
								<img
									src="/assets/img/payment-ft.png"
									className="shape-two shadow-lg"
									alt="Tax"
								/>
								<img
									src="/assets/img/p-dot.png"
									className="shape-three"
									alt="dot"
								/>
								<img
									src="/assets/img/blue-shape.png"
									className="shape-four"
									alt="shape"
								/>
								<img
									src="/assets/img/pink-circle.png"
									className="shape-five"
									alt="shape"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
