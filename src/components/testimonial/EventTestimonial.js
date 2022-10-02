import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

export default function EventTestimonial() {
	const swiperOption = {
		slidesPerView: 1,
		loop: true,
		speed: 700,
		pagination: {
			clickable: true,
			el: ".eve-pagination.swiper-pagination",
		},
		autoplay: {
			delay: 2000,
		},
	};
	return (
		<section className="ev-testimonial bg-light-blue ptb-120">
			<ul className="list-unstyled author d-none d-xl-block">
				<li>
					<img
						src="/assets/img/event/t-1.png"
						className="img-fluid"
						alt="icon"
					/>
				</li>
				<li>
					<img
						src="/assets/img/event/t-2.png"
						className="img-fluid"
						alt="icon"
					/>
				</li>
			</ul>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="text-center mb-4">
							<span className="fw-bold text-dark-blue">Testimonial</span>
							<h2>Customer Say About us</h2>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<Swiper
							className="ev-testimonial-slider"
							{...swiperOption}
							modules={[Pagination]}
						>
							<SwiperSlide>
								{" "}
								<div className="text-center ev-single-testimonial">
									<img
										src="/assets/img/event/testi-1.png"
										alt="avatar"
										className="mb-3"
									/>
									<h5>Terrence Alexander</h5>
									<ul className="list-unstyled rating-list list-inline mb-0">
										<li className="list-inline-item">
											<i className="fas fa-star text-warning"></i>
										</li>
										<li className="list-inline-item">
											<i className="fas fa-star text-warning"></i>
										</li>
										<li className="list-inline-item">
											<i className="fas fa-star text-warning"></i>
										</li>
										<li className="list-inline-item">
											<i className="fas fa-star text-warning"></i>
										</li>
										<li className="list-inline-item">
											<i className="fas fa-star text-warning"></i>
										</li>
									</ul>
									<p>
										Proactively target customer directed infrastructures via
										parallel e-business. Authoritatively coordinate superior
										potentialities through value-added content. Rapidiously
										visualize collaborative growth strategies before
										client-focused web services. Competently strategize
										out-of-the-box e-services.
									</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{" "}
								<div className="text-center ev-single-testimonial">
									<img
										src="/assets/img/event/testi-1.png"
										alt="avatar"
										className="mb-3"
									/>
									<h5>Terrence Alexander</h5>
									<ul className="list-unstyled rating-list list-inline mb-0">
										<li className="list-inline-item">
											<i className="fas fa-star text-warning"></i>
										</li>
										<li className="list-inline-item">
											<i className="fas fa-star text-warning"></i>
										</li>
										<li className="list-inline-item">
											<i className="fas fa-star text-warning"></i>
										</li>
										<li className="list-inline-item">
											<i className="fas fa-star text-warning"></i>
										</li>
										<li className="list-inline-item">
											<i className="fas fa-star text-warning"></i>
										</li>
									</ul>
									<p>
										Proactively target customer directed infrastructures via
										parallel e-business. Authoritatively coordinate superior
										potentialities through value-added content. Rapidiously
										visualize collaborative growth strategies before
										client-focused web services. Competently strategize
										out-of-the-box e-services.
									</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{" "}
								<div className="text-center ev-single-testimonial">
									<img
										src="/assets/img/event/testi-1.png"
										alt="avatar"
										className="mb-3"
									/>
									<h5>Terrence Alexander</h5>
									<ul className="list-unstyled rating-list list-inline mb-0">
										<li className="list-inline-item">
											<i className="fas fa-star text-warning"></i>
										</li>
										<li className="list-inline-item">
											<i className="fas fa-star text-warning"></i>
										</li>
										<li className="list-inline-item">
											<i className="fas fa-star text-warning"></i>
										</li>
										<li className="list-inline-item">
											<i className="fas fa-star text-warning"></i>
										</li>
										<li className="list-inline-item">
											<i className="fas fa-star text-warning"></i>
										</li>
									</ul>
									<p>
										Proactively target customer directed infrastructures via
										parallel e-business. Authoritatively coordinate superior
										potentialities through value-added content. Rapidiously
										visualize collaborative growth strategies before
										client-focused web services. Competently strategize
										out-of-the-box e-services.
									</p>
								</div>
							</SwiperSlide>
							<div className="eve-pagination swiper-pagination"></div>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
}
