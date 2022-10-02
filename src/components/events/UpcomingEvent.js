import React from "react";
import { Link } from "react-router-dom";

export default function UpcomingEvent() {
	return (
		<section
			className="up-coming-event ptb-120"
			style={{
				background:
					"url('/assets/img/event/up-e-bg.jpg')no-repeat center center/cover",
			}}
		>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="text-center mb-5">
							<span className="text-pink fw-bold">Coming Soon </span>
							<h2>Our Upcoming Events</h2>
							<p>
								Competently reintermediate future-proof e-markets via premium
								leadership skills. Energistically develop enterprise-wide
								systems with dynamic human capital.
							</p>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6">
						<div className="single-up-eve mb-4 mb-lg-0 rounded">
							<div className="position-relative">
								<img
									src="/assets/img/event/ee-1.jpg"
									className="img-fluid"
									alt="Event"
								/>
								<div className="ev-days">
									<h5 className="fw-bold text-pink m-0">03</h5>
									<span className="fw-bold">Days</span>
								</div>
							</div>
							<div className="px-4 pt-5 pb-4 event-meta">
								<div className="d-lg-flex mb-2">
									<div className="date pe-3 small text-muted">
										<i className="far fa-alarm-clock pe-2"></i>
										<span>Aug 5, 2022</span>
									</div>
									<div className="location small text-muted">
										<i className="far fa-map-marker-alt pe-2"></i>
										<span>Time Square , New York</span>
									</div>
								</div>
								<h5 className="mb-3">
									<Link to="/blog-single">DigiMarCon East 2022</Link>
								</h5>
								<p>
									Effective alignments credibly empower backend total linkage
									via cost seize leveraged niche markets.
								</p>
								<Link
									to="/blog-single"
									className="read-more-link text-decoration-none"
								>
									Explore More <i className="far fa-arrow-right ms-2"></i>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="single-up-eve mb-4 mb-lg-0 rounded">
							<div className="position-relative">
								<img
									src="/assets/img/event/ee-2.jpg"
									className="img-fluid"
									alt="Event"
								/>
								<div className="ev-days">
									<h5 className="fw-bold text-pink m-0">05</h5>
									<span className="fw-bold">Days</span>
								</div>
							</div>
							<div className="px-4 pt-5 pb-4 event-meta">
								<div className="d-lg-flex mb-2">
									<div className="date pe-3 small text-muted">
										<i className="far fa-alarm-clock pe-2"></i>
										<span>Aug 5, 2022</span>
									</div>
									<div className="location small text-muted">
										<i className="far fa-map-marker-alt pe-2"></i>
										<span>Time Square , New York</span>
									</div>
								</div>
								<h5 className="mb-3">
									<Link to="/blog-single">Tokyo Digital Shake-Up</Link>
								</h5>
								<p>
									Dramatically seize leveraged niche markets total linkage via
									cost effective alignments empower backend.
								</p>
								<Link
									to="/blog-single"
									className="read-more-link text-decoration-none"
								>
									Explore More <i className="far fa-arrow-right ms-2"></i>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="single-up-eve rounded">
							<div className="position-relative">
								<img
									src="/assets/img/event/ee-3.jpg"
									className="img-fluid"
									alt="Event"
								/>
								<div className="ev-days">
									<h5 className="fw-bold text-pink m-0">07</h5>
									<span className="fw-bold">Days</span>
								</div>
							</div>
							<div className="px-4 pt-5 pb-4 event-meta">
								<div className="d-lg-flex mb-2">
									<div className="date pe-3 small text-muted">
										<i className="far fa-alarm-clock pe-2"></i>
										<span>Aug 5, 2022</span>
									</div>
									<div className="location small text-muted">
										<i className="far fa-map-marker-alt pe-2"></i>
										<span>Time Square , New York</span>
									</div>
								</div>
								<h5 className="mb-3">
									<Link to="/blog-single">Paris Digital Summit</Link>
								</h5>
								<p className="">
									Credibly empower backend total linkage via cost effective
									alignments. Dramatically seize niche markets.
								</p>
								<Link
									to="/blog-single"
									className="read-more-link text-decoration-none"
								>
									Explore More <i className="far fa-arrow-right ms-2"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center mt-5">
					<Link to="/blogs" className="btn btn-primary bg-dark-blue">
						View More Events
					</Link>
				</div>
			</div>
		</section>
	);
}
