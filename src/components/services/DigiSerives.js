import React from "react";
import { Link } from "react-router-dom";

export default function DigiSerives() {
	return (
		<section className="digi-services pb-60">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="text-center mb-5">
							<div>
								<span className="span-arrow">Best Digital Agency</span>
								<img src="/assets/img/arro-right.svg" alt="arrow" />
							</div>
							<h2>
								We have extensive Experience in Social
								<span className="text-orange">Media Marketing</span>
							</h2>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-6 col-xl-3">
						<div className="digi-service-single mb-4 mb-xl-0">
							<img src="/assets/img/icons/d-1.svg" alt="icon" />
							<h3 className="h5">Paid Advertising</h3>
							<p>
								Proactively recaptiualize multidisciplinary manufactured
								products vis-a-vis go forward resource maximizing internal.
							</p>
							<Link
								to="/services"
								className="read-more-link text-decoration-none"
							>
								Explore More <i className="far fa-arrow-right ms-2"></i>
							</Link>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-xl-3">
						<div className="digi-service-single mb-4 mb-xl-0">
							<img src="/assets/img/icons/d-2.svg" alt="icon" />
							<h3 className="h5">Content Marketing</h3>
							<p>
								Assertively negotiate adaptive human capital and collaboration
								and idea-sharing rather than extensive communities.
							</p>
							<Link
								to="/services"
								className="read-more-link text-decoration-none"
							>
								Explore More <i className="far fa-arrow-right ms-2"></i>
							</Link>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-xl-3">
						<div className="digi-service-single mb-4 mb-xl-0">
							<img src="/assets/img/icons/d-3.svg" alt="icon" />
							<h3 className="h5">Content Marketing</h3>
							<p>
								Globally promote long-term high-impact resources and
								goal-oriented growth strategies. Globally incubate extensible.
							</p>
							<Link
								to="/services"
								className="read-more-link text-decoration-none"
							>
								Explore More <i className="far fa-arrow-right ms-2"></i>
							</Link>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-xl-3">
						<div className="digi-service-single mb-4 mb-xl-0">
							<img src="/assets/img/icons/d-4.svg" alt="icon" />
							<h3 className="h5">Youtube Marketing</h3>
							<p>
								Globally utilize emerging networks through team driven models
								develop team driven systems through.
							</p>
							<Link
								to="/services"
								className="read-more-link text-decoration-none"
							>
								Explore More <i className="far fa-arrow-right ms-2"></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
