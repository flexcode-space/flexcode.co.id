import React from "react";
import { Link } from "react-router-dom";

export default function EventBlog() {
	return (
		<section className="eve-blog ptb-100 bg-light-blue">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="mb-5">
							<span className="text-dark-blue text-capitalize fw-bold d-inline-block mb-2">
								Blog Post
							</span>
							<h2>Latest News insights</h2>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6">
						<div className="mb-4 mb-lg-0">
							<img
								src="/assets/img/event/eb-1.jpg"
								className="img-fluid rounded-top"
								alt="People"
							/>
							<div className="px-4 py-4 ev-blog-meta">
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
									<Link to="/blog-single" className="text-dark">
										Breakfast after a long time sad & unhappy
									</Link>
								</h5>
								<p>
									Credibly empower backend total linkage via cost effective
									alignments. Dramatically seize leveraged niche markets.
								</p>
								<Link to="/blog-single" className="link-with-icon">
									More Information<i className="far fa-arrow-right"></i>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="mb-4 mb-lg-0">
							<img
								src="/assets/img/event/eb-2.jpg"
								className="img-fluid rounded-top"
								alt="People"
							/>
							<div className="px-4 py-4 ev-blog-meta">
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
									<Link to="/blog-single" className="text-dark">
										Marketing Tools In CX Strategies trust
									</Link>
								</h5>
								<p>
									Credibly empower backend total linkage via cost effective
									alignments. Dramatically seize leveraged niche markets.
								</p>
								<Link to="/blog-single" className="link-with-icon">
									More Information<i className="far fa-arrow-right"></i>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="mb-4 mb-lg-0">
							<img
								src="/assets/img/event/eb-3.jpg"
								className="img-fluid rounded-top"
								alt="People"
							/>
							<div className="px-4 py-4 ev-blog-meta">
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
									<Link to="/blog-single" className="text-dark">
										The morning with a sad face given their trust
									</Link>
								</h5>
								<p>
									Credibly empower backend total linkage via cost effective
									alignments. Dramatically seize leveraged niche markets.
								</p>
								<Link to="/blog-single" className="link-with-icon">
									More Information<i className="far fa-arrow-right"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center mt-4 text-muted fs-sm">
					<p className="m-0">
						Do you want to read more posts!
						<Link to="/blog-single" className="text-dark-blue fw-bold">
							Click Here
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
}
