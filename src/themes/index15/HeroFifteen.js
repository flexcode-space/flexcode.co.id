import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
export default function HeroFifteen() {
	const [isOpen, setOpen] = useState(false);
	return (
		<section
			className="event-hero"
			style={{
				background:
					"url('/assets/img/event/event-h-bg.jpg')no-repeat center center/cover",
			}}
		>
			<div className="position-relative">
				<div className="container">
					<div className="row align-items-md-center">
						<div className="col-lg-6">
							<div className="event-hero-content">
								<span className="text-pink fw-bold">
									22- 23 November 2022 | ExCeL London
								</span>
								<h1 className="fw-bold display-5">
									<span className="display-2 fw-bold">Design</span> <br />
									Conference-2022
								</h1>
								<p className="mb-4">
									Intrinsicly drive high standards in scenarios and stand-alone
									applications assertively streamline stand-alone alignments via
									resource maximizing core.
								</p>
								<div className="action-btns mt-4 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
									<ModalVideo
										channel="youtube"
										isOpen={isOpen}
										videoId="hAP2QF--2Dg"
										onClose={() => setOpen(false)}
									/>
									<Link
										to="/signup"
										className="btn btn-primary bg-pink me-3 mb-3"
									>
										Register Now
									</Link>
									<Link
										to="/request-for-demo"
										className="btn border-pink text-pink mb-3"
									>
										Download PDF
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="mt-5 mt-lg-0 event-hero-img">
								<img
									src="/assets/img/event/h-spea.png"
									className="img-fluid"
									alt="Event"
								/>
								<Link
									to="#!"
									className="popup-youtube"
									onClick={() => setOpen(true)}
								>
									<i className="fas fa-play"></i>
								</Link>
							</div>
						</div>
					</div>
					<ul className="list-unstyled ev-hero-shape d-none d-xl-block m-0">
						<li>
							<img src="/assets/img/event/star.png" alt="star" />
						</li>
						<li></li>
						<li></li>
						<li></li>
						<li>
							<img src="/assets/img/event/square.png" alt="shape" />
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
