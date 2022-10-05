import React from "react";
import LottiePlayer from "../common/LottiePlayer";
import SectionTitle from "../common/SectionTitle";

const Flexware = () => {
	return (
		<>
			<section className="why-choose-us ptb-100 ">
				<div className="container">
					<div className="row justify-content-lg-between align-items-center">
						<div className="col-lg-6 col-12">
							<div className="feature-img-holder my-4 my-lg-0 my-xl-0">
								<LottiePlayer
									src="https://assets9.lottiefiles.com/packages/lf20_f1t2g8fq.json"
									width="100%"
									height="100%"
								/>
							</div>
						</div>
						<div className="col-lg-5 col-12">
							<div className="why-choose-content">
								<div className="icon-box rounded-custom bg-info shadow-sm d-inline-block">
									<i className="fal fa-laptop fa-2x text-white"></i>
								</div>
								<SectionTitle
									title="flexware.com"
									description="flexware.com is a platform for cheap and quality electronic equipment rental services for office operational needs such as PC rental, laptop rental, monitor rental, and printer rental from various brands. All Lessors and rental equipment have gone through the FlexCode team selection process for Lessee's satisfaction."
								/>
								<a
									href="https://flexware.com"
									target="_blank"
									rel="noreferrer"
									className="read-more-link text-decoration-none text-info"
								>
									Visit Website <i className="far fa-arrow-right ms-2"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Flexware;
