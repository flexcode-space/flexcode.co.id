import React from "react";
import { Link } from "react-router-dom";

const CryptoBlog = () => {
	return (
		<section className="crypto-blog bg-dark-black">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="section-title text-center mb-5">
							<h2 className="text-white">Cryptocurrency Recent Posts </h2>
							<p>
								Right Click on the Download Button in the Font Post and Copy
								Link Address and Paste it in the New Tab The Download will Start
								Automatically.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="crypto-blog-card bg-soft-black mb-30 mb-lg-0">
							<div className="blog-thumb">
								<Link to="/blog-single">
									<img
										src="/assets/img/cbl-1.png"
										className="img-fluid"
										alt="thumb"
									/>
								</Link>
							</div>
							<h3 className="h4 fw-medium">
								<Link
									to="/blog-single"
									className="text-decoration-none text-white"
								>
									How Filecoin is Up in a Week Could Take Care
								</Link>
							</h3>
							<p className="m-0">
								Words combined with a handful of model to generate which looks
								reasonable.
							</p>
							<div className="author-meta d-flex align-items-center py-4">
								<div className="pe-3">
									<img
										src="/assets/img/testimonial/app-testimonial-1.png"
										alt=""
									/>
								</div>
								<div>
									<h5 className="fw-normal text-white h6 m-0">St Adward</h5>
									<span>Feb 19, 2022</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="crypto-blog-card bg-soft-black mb-30 mb-lg-0">
							<div className="blog-thumb">
								<Link to="/blog-single">
									<img
										src="/assets/img/cbl-2.png"
										className="img-fluid"
										alt="thumb"
									/>
								</Link>
							</div>
							<h3 className="h4 fw-medium">
								<Link
									to="/blog-single"
									className="text-decoration-none text-white"
								>
									Ethereum Summit Attendees Governance
								</Link>
							</h3>
							<p className="m-0">
								Words combined with a handful of model to generate which looks
								reasonable.
							</p>
							<div className="author-meta d-flex align-items-center py-4">
								<div className="pe-3">
									<img
										src="/assets/img/testimonial/app-testimonial-3.png"
										alt=""
									/>
								</div>
								<div>
									<h5 className="fw-normal text-white h6 m-0">
										Noah L. Paulsen
									</h5>
									<span>Feb 19, 2022</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="crypto-blog-card bg-soft-black">
							<div className="blog-thumb">
								<Link to="/blog-single">
									<img
										src="/assets/img/cbl-3.png"
										className="img-fluid"
										alt="thumb"
									/>
								</Link>
							</div>
							<h3 className="h4 fw-medium">
								<Link
									to="/blog-single"
									className="text-decoration-none text-white"
								>
									Ethereum Summit Attendees Governance Plan
								</Link>
							</h3>
							<p className="m-0">
								Words combined with a handful of model to generate which looks
								reasonable.
							</p>
							<div className="author-meta d-flex align-items-center py-4">
								<div className="pe-3">
									<img
										src="/assets/img/testimonial/app-testimonial-2.png"
										alt="Noah"
									/>
								</div>
								<div>
									<h5 className="fw-normal text-white h6 m-0">
										John L. Paulsen
									</h5>
									<span>Feb 19, 2022</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-3">
						<div className="text-center mt-5">
							<Link
								to="/blogs"
								className="btn-outline-primary btn rounded-pill"
							>
								All Blog Post
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CryptoBlog;
