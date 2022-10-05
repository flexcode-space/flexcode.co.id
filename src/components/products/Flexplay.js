import React from "react";
import LottiePlayer from "../common/LottiePlayer";
import SectionTitle from "../common/SectionTitle";

const Flexplay = () => {
	return (
		<>
			<section className="why-choose-us pb-60 bg-light">
				<div className="container">
					<div className="row justify-content-lg-between align-items-center">
						<div className="col-lg-5 col-12">
							<div className="why-choose-content">
								<div className="icon-box rounded-custom bg-purple shadow-sm d-inline-block">
									<i className="fal fa-send fa-2x text-white"></i>
								</div>
								<SectionTitle
									title="flexplay.id"
									description="flexplay.id is a sharing subscription platform to make it easier for you to subscribe to digital services at affordable prices."
								/>
								<a
									href="https://flexplay.id"
									target="_blank"
									rel="noreferrer"
									className="read-more-link text-decoration-none text-purple"
								>
									Visit Website <i className="far fa-arrow-right ms-2"></i>
								</a>
							</div>
						</div>
						<div className="col-lg-6 col-12">
							<div className="feature-img-holder my-4 my-lg-0 my-xl-0">
								<LottiePlayer
									src="https://assets3.lottiefiles.com/packages/lf20_9ti102vm.json"
									width="80%"
									height="80%"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Flexplay;
