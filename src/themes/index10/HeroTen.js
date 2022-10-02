import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const HeroTen = () => {
	const [isOpen, setOpen] = useState(false);
	return (
		<section
			className="hero-section text-white hero-ten"
			style={{
				background:
					"url('/assets/img/cyber_banner_img.png')no-repeat center center",
			}}
		>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-10">
						<div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
							<h1 className="fw-bold display-5 text-white">
								Quiety is Frist priority Your Cyber Security
							</h1>
							<p className="lead">
								Velit officia consequat duis enim velit mollit Exercitation
								veniam consequat sunt nostrud amet.
							</p>
							<div className="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
								<ModalVideo
									channel="youtube"
									isOpen={isOpen}
									videoId="hAP2QF--2Dg"
									onClose={() => setOpen(false)}
								/>
								<Link to="/request-for-demo" className="btn btn-primary me-3">
									Discover More
								</Link>
								<Link
									to="#"
									className="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0"
									onClick={() => setOpen(true)}
								>
									<i className="fas fa-play"></i> How It Works
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-8 mt-5">
						<div className="hero-img position-relative circle-shape-images">
							<img
								src="/assets/img/cyber_banner_image.svg"
								alt="hero img"
								className="img-fluid position-relative z-5"
							/>
						</div>
					</div>
				</div>
				<div className="cyber-down-btn text-center position-relative d-none d-lg-block">
					<a href="#cyber-about" className="text-primary">
						<i className="far fa-arrow-down"></i>
					</a>
				</div>
			</div>
		</section>
	);
};

export default HeroTen;
