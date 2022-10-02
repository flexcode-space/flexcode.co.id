import React from "react";
import { Link } from "react-router-dom";

export default function EventCta() {
	return (
		<section className="ev-cta bg-light-blue">
			<div className="container">
				<div
					style={{
						background:
							"url('/assets/img/ev-cta-bg.jpg')no-repeat center center/ cover",
					}}
					className="rounded-2 ptb-100"
				>
					<div className="row justify-content-center">
						<div className="col-lg-6 col-md-8">
							<div className="text-center">
								<span className="fw-bold text-pink mb-2 d-inline-block">
									Let's do it hurry
								</span>
								<h2 className="text-white mb-4">
									Haven’t Booked Your Seat Yet? Get Ticket Now!
								</h2>
								<Link to="/contact-us" className="btn btn-primary bg-pink">
									Purchase Now
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
