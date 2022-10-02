import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);
const CustomerLogoSlider = () => {
	const swiperOption = {
		slidesPerView: 2,
		speed: 700,
		spaceBetween: 20,
		slidesPerGroup: 2,
		loop: true,
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 20,
			},

			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},

			991: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
		},
	};

	return (
		<section className="cyber-brand-logo pt-80">
			<div className="container">
				<div className="row">
					<div className="brand-logo-slider">
						<Swiper {...swiperOption}>
							<SwiperSlide>
								<div className="cyber-brand-logo text-center">
									<img
										src="/assets/img/brand-logo/slack_logo.png"
										alt="logo "
									/>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="cyber-brand-logo text-center">
									<img
										src="/assets/img/brand-logo/slack_logo.png"
										alt="logo "
									/>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="cyber-brand-logo text-center">
									<img src="/assets/img/brand-logo/logo3.png" alt="logo" />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="cyber-brand-logo text-center">
									<img src="/assets/img/brand-logo/logo4.png" alt="logo" />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="cyber-brand-logo text-center">
									<img src="/assets/img/brand-logo/logo5.png" alt="logo" />
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CustomerLogoSlider;
