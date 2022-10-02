import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const HeroNine = () => {
	const [isOpen, setOpen] = useState(false);
	return (
		<section
			className="hero-it-solution hero-nine-bg ptb-120"
			style={{
				background: "url('/assets/img/hero-9-img.png')no-repeat center center",
			}}
		>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-10">
						<div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
							<h1 className="fw-bold display-5">
								We Care Your any IT Solution
							</h1>
							<p className="lead">
								Proactively coordinate quality quality vectors vis-a-vis supply
								chains. Quickly engage client-centric web services.
							</p>
							<div className="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
								<ModalVideo
									channel="youtube"
									isOpen={isOpen}
									videoId="hAP2QF--2Dg"
									onClose={() => setOpen(false)}
								/>
								<Link to="/request-for-demo" className="btn btn-primary me-3">
									Request For Demo
								</Link>
								<Link
									to="#"
									className="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0 text-primary"
									onClick={() => setOpen(true)}
								>
									<i className="fas fa-play text-primary border-2 border-primary"></i>
									Watch Demo
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="hero-img position-relative mt-5 mt-lg-0">
							<img
								src="/assets/img/banner_image.png"
								alt="hero hero-it-solution "
								className="img-fluid"
							/>
							<div className="dots">
								<img
									src="/assets/img/banner_dot.png"
									alt="dot"
									className="dot-1"
								/>
								<img
									src="/assets/img/banner_dot.png"
									alt="dot"
									className="dot-2"
								/>
							</div>
							<div className="bubble">
								<span className="bubble-1"></span>
								<span className="bubble-2"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroNine;
