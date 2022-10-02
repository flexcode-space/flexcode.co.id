import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import { Link } from "react-router-dom";

SwiperCore.use([Pagination]);

const CyberBlog = () => {
	const swiperOption = {
		slidesPerView: 3,
		spaceBetween: 30,
		speed: 1000,
		autoplay: {
			delay: 2500,
		},
		slidesPerGroup: 1,
		loop: true,
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
		<section className="home-blog-section pt-60 pb-120">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-12">
						<div className="section-heading text-center">
							<h4 className="text-primary h5">Recent Post</h4>
							<h2>Read our News & Articles</h2>
							<p>
								Assertively maximize cost effective methods of iterate team
								driven manufactured products through equity invested via
								customized benefits.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="cyber-blog">
						<Swiper {...swiperOption}>
							<SwiperSlide>
								<div className="cyber-single-article mb-4 mb-lg-0 p-3 border">
									<Link to="/blog-single" className="cyber-article-img">
										<img
											src="/assets/img/blog/c-blog-1.jpg"
											alt="article"
											className="img-fluid"
										/>
									</Link>
									<div className="article-content">
										<div className="article-info d-flex py-3">
											<div className="pe-3">
												<Link to="#/" className="text-decoration-none">
													<i className="fas fa-user pe-2"></i>
													<span className="text-secondary">Admin</span>
												</Link>
											</div>
											<div>
												<Link to="#/" className="text-decoration-none">
													<i className="fas fa-calendar pe-2"></i>
													<span className="text-secondary">
														October 13, 2022
													</span>
												</Link>
											</div>
										</div>
										<Link to="/blog-single" className="text-decoration-none">
											<h2 className="h5 article-title limit-2-line-text">
												The Steps to GainingPrivileged Access Security
											</h2>
										</Link>
										<Link
											to="/blog-single"
											className="link-with-icon text-decoration-none"
										>
											Read more <i className="far fa-arrow-right"></i>
										</Link>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="cyber-single-article mb-4 mb-lg-0 p-3 border">
									<Link to="/blog-single" className="cyber-article-img">
										<img
											src="/assets/img/blog/c-blog-2.jpg"
											alt="article"
											className="img-fluid"
										/>
									</Link>
									<div className="article-content">
										<div className="article-info d-flex py-3">
											<div className="pe-3">
												<Link to="#/" className="text-decoration-none">
													<i className="fas fa-user pe-2"></i>
													<span className="text-secondary">Admin</span>
												</Link>
											</div>
											<div>
												<Link to="#/" className="text-decoration-none">
													<i className="fas fa-calendar pe-2"></i>
													<span className="text-secondary">
														October 13, 2022
													</span>
												</Link>
											</div>
										</div>
										<Link to="/blog-single" className="text-decoration-none">
											<h2 className="h5 article-title limit-2-line-text">
												Protect Your Workplace FromCyber Attacks
											</h2>
										</Link>
										<Link
											to="/blog-single"
											className="link-with-icon text-decoration-none"
										>
											Read more <i className="far fa-arrow-right"></i>
										</Link>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="cyber-single-article mb-4 mb-lg-0 p-3 border">
									<Link to="/blog-single" className="cyber-article-img">
										<img
											src="/assets/img/blog/c-blog-3.jpg"
											alt="article"
											className="img-fluid"
										/>
									</Link>
									<div className="article-content">
										<div className="article-info d-flex py-3">
											<div className="pe-3">
												<Link to="#/" className="text-decoration-none">
													<i className="fas fa-user pe-2"></i>
													<span className="text-secondary">Admin</span>
												</Link>
											</div>
											<div>
												<Link to="#/" className="text-decoration-none">
													<i className="fas fa-calendar pe-2"></i>
													<span className="text-secondary">
														October 13, 2022
													</span>
												</Link>
											</div>
										</div>
										<Link to="/blog-single" className="text-decoration-none">
											<h2 className="h5 article-title limit-2-line-text">
												The Steps to GainingPrivileged Access Security
											</h2>
										</Link>
										<Link
											to="/blog-single"
											className="link-with-icon text-decoration-none"
										>
											Read more <i className="far fa-arrow-right"></i>
										</Link>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CyberBlog;
