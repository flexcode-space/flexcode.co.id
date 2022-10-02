import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
SwiperCore.use([Navigation]);

const CryptoTestimonial = () => {
	const swiperOption = {
		slidesPerView: 2,
		speed: 700,
		spaceBetween: 30,
		slidesPerGroup: 2,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 30,
			},

			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},

			991: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	};
	return (
		<section className="crypto-testimonial  bg-dark-black pt-60 pb-120">
			<div className="container">
				<div className="row justify-content-between align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="section-title mb-5">
							<h2 className="text-white">What They Say About Us</h2>
							<p className="text-white">
								The standard chunk of Lorem Ipsum used since the is reproduced
								below for those interested Sections.
							</p>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="text-left text-lg-end mb-5 mb-lg-0">
							<Link to="/about-us" className="btn rounded-pill btn-primary">
								All Feedback
							</Link>
						</div>
					</div>
				</div>
				<div className="row">
					<Swiper {...swiperOption}>
						<SwiperSlide>
							<div className="crypto-single-testimonial bg-soft-black">
								<ul className="review-rate mb-0 list-unstyled list-inline">
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
								<blockquote className="m-0">
									<p className="m-0">
										“You don’t have to be constantly searching the web to get
										price updates. Just use our coin calculator and simply get
										the desired result with a simple click.”
									</p>
								</blockquote>
								<div className="author-meta d-flex align-items-center">
									<div className="pe-3">
										<img
											src="/assets/img/testimonial/app-testimonial-3.png"
											alt="Author"
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
						</SwiperSlide>
						<SwiperSlide>
							<div className="crypto-single-testimonial bg-soft-black">
								<ul className="review-rate mb-0 list-unstyled list-inline">
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
								<blockquote className="m-0">
									<p className="m-0">
										“You don’t have to be constantly searching the web to get
										price updates. Just use our coin calculator and simply get
										the desired result with a simple click.”
									</p>
								</blockquote>
								<div className="author-meta d-flex align-items-center">
									<div className="pe-3">
										<img
											src="/assets/img/testimonial/app-testimonial-2.png"
											alt="Author"
										/>
									</div>
									<div>
										<h5 className="fw-normal text-white h6 m-0">Arika Stack</h5>
										<span>April 19, 2022</span>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="crypto-single-testimonial bg-soft-black">
								<ul className="review-rate mb-0 list-unstyled list-inline">
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
								<blockquote className="m-0">
									<p className="m-0">
										“You don’t have to be constantly searching the web to get
										price updates. Just use our coin calculator and simply get
										the desired result with a simple click.”
									</p>
								</blockquote>
								<div className="author-meta d-flex align-items-center">
									<div className="pe-3">
										<img
											src="/assets/img/testimonial/app-testimonial-1.png"
											className="img-fluid"
											alt="Author"
										/>
									</div>
									<div>
										<h5 className="fw-normal text-white h6 m-0">
											Neaj Morshed
										</h5>
										<span>Feb 19, 2022</span>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default CryptoTestimonial;
