import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HeroTwelve() {
	const swiperOption = {
		slidesPerView: 1,
		loop: true,
		speed: 700,
		autoplay: {
			delay: 2000,
		},
	};

	return (
		<div className="hero-twelve">
			<Swiper {...swiperOption}>
				<SwiperSlide>
					<div
						className="slider-one slider"
						style={{
							backgroundImage: "url('/assets/img/slider/sl-1-1.png')",
						}}
					>
						<div className="container">
							<div className="">
								<div className="col-lg-6">
									<div className="hero-content">
										<h1
											className="fw-bold display-5 text-white mb-4"
											data-aos="fade-up"
										>
											Reliable Hosting For Game
											<span className="gr-text ms-2">Solutions.</span>
										</h1>
										<p className="lead text-off-white m-0">
											Give your Website the speed, security, and uptime it
											deserves and become part of the fastest Web Hosting.
										</p>
										<Link
											to="/request-for-demo"
											className="btn-gradient mt-4 link-with-icon"
										>
											Order Now <i className="far fa-arrow-right"></i>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className="slider-one slider"
						style={{
							backgroundImage: "url('/assets/img/slider/sl-2-2.png')",
						}}
					>
						<div className="container">
							<div className="">
								<div className="col-lg-6">
									<div className="hero-content">
										<h1
											className="fw-bold display-5 text-white mb-4"
											data-aos="fade-up"
										>
											Reliable Hosting For Game
											<span className="gr-text ms-2">Solutions.</span>
										</h1>
										<p className="lead text-off-white m-0">
											Give your Website the speed, security, and uptime it
											deserves and become part of the fastest Web Hosting.
										</p>
										<Link
											to="/request-for-demo"
											className="btn-gradient mt-4 link-with-icon"
										>
											Order Now <i className="far fa-arrow-right"></i>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className="slider-one slider"
						style={{
							backgroundImage: "url('/assets/img/slider/sl-1-1.png')",
						}}
					>
						<div className="container">
							<div className="">
								<div className="col-lg-6">
									<div className="hero-content">
										<h1
											className="fw-bold display-5 text-white mb-4"
											data-aos="fade-up"
										>
											Reliable Hosting For Game{" "}
											<span className="gr-text ms-2">Solutions.</span>
										</h1>
										<p className="lead text-off-white m-0">
											Give your Website the speed, security, and uptime it
											deserves and become part of the fastest Web Hosting.
										</p>
										<Link
											to="/request-for-demo"
											className="btn-gradient mt-4 link-with-icon"
										>
											Order Now <i className="far fa-arrow-right"></i>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
