import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

export default function HeroThirteen() {
	const [isOpen, setOpen] = useState(false);
	return (
		<section className="hero-payment-gateway">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5 col-md-10">
						<div className="payment-gateway-text">
							<h1 className="display-5 text-white fw-bold mb-3">
								The Easiest Way to Manage Personal With
								<span className="gr-text fw-bold">Fintech</span>
							</h1>
							<p className="text-white m-0">
								Access your account via your mobile phone View balance, transfer
								funds, view transactions wherever happy clients all around.
							</p>
							<div className="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
								<ModalVideo
									channel="youtube"
									isOpen={isOpen}
									videoId="hAP2QF--2Dg"
									onClose={() => setOpen(false)}
								/>
								<Link to="/request-for-demo" className="btn-gradient-sqr me-3">
									Download Now
								</Link>
								<Link
									to="#"
									onClick={() => setOpen(true)}
									className="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0"
								>
									<i className="fas fa-play"></i> Watch Demo
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="payment-hero-img pt-120 text-center text-lg-end position-relative">
							<img
								src="/assets/img/pay-h-img.png"
								className="img-fluid"
								alt="smile"
							/>
							<img
								src="/assets/img/pay-hero-s.png"
								className="img-fluid h-shape"
								alt="smile"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
