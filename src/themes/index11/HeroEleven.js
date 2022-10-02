import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const HeroEleven = () => {
	const [isOpen, setOpen] = useState(false);
	return (
		<section className="hero-eleven bg-dark-black pt-120">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5 col-md-12">
						<div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
							<h1 className="fw-bold display-5 text-white">
								Trusted & Secure Trading Crypto Wallet
							</h1>
							<p className="lead text-white">
								You might wonder why a designer would choose to use Morem text
								Paragraphs in English or their native language.
							</p>
							<div className="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
								<ModalVideo
									channel="youtube"
									isOpen={isOpen}
									videoId="hAP2QF--2Dg"
									onClose={() => setOpen(false)}
								/>
								<Link
									to="/request-for-demo"
									className="btn rounded-pill btn-primary me-3"
								>
									Get Started
								</Link>
								<Link
									to="#"
									className="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0"
									onClick={() => setOpen(true)}
								>
									<i className="fas fa-play"></i> How it works
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-7 col-md-12">
						<div className="crypto-hero-img pt-80">
							<ul className="currency-icon list-unstyled">
								<li>
									<img src="/assets/img/currency1.svg" alt="icon" />
								</li>
								<li>
									<img src="/assets/img/currency2.svg" alt="icon" />
								</li>
								<li>
									<img src="/assets/img/currency3.svg" alt="icon" />
								</li>
								<li>
									<img src="/assets/img/currency4.svg" alt="icon" />
								</li>
							</ul>
							<img
								src="/assets/img/crypto-person.png"
								className="img-fluid"
								alt="person"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroEleven;
