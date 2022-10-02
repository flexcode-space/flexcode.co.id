import React from "react";
import LottiePlayer from "../common/LottiePlayer";
import SectionTitle from "../common/SectionTitle";

const Invityu = () => {
	return (
		<>
			<section className="why-choose-us ptb-100 ">
				<div className="container">
					<div className="row justify-content-lg-between align-items-center">
						<div className="col-lg-6 col-12">
							<div className="feature-img-holder my-4 my-lg-0 my-xl-0">
								{/* <img
									src="/assets/img/widget-7.png"
									className="img-fluid"
									alt="feature"
								/> */}
								<LottiePlayer
									src="https://assets6.lottiefiles.com/packages/lf20_qzasi9ko.json"
									width="80%"
									height="80%"
								/>
							</div>
						</div>
						<div className="col-lg-5 col-12">
							<div className="why-choose-content">
								<div className="icon-box rounded-custom bg-danger shadow-sm d-inline-block">
									<i className="fal fa-heart fa-2x text-white"></i>
								</div>
								<SectionTitle
									title="invityu.com"
									description="invityu.com is a digital wedding platform that helps you make wedding needs more easy. We are inspiring and resourceful online global wedding platfrom that helps you to get your needs around the world."
								/>
								<ul className="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
									<li className="py-1">
										<i className="fas fa-check-circle me-2 text-danger"></i>
										Wedding Invitation
									</li>
									<li className="py-1">
										<i className="fas fa-check-circle me-2 text-danger"></i>
										Wedding Venue
									</li>
									<li className="py-1">
										<i className="fas fa-check-circle me-2 text-danger"></i>
										Wedding Catering
									</li>
									<li className="py-1">
										<i className="fas fa-check-circle me-2 text-danger"></i>
										Wedding Gift
									</li>
									<li className="py-1">
										<i className="fas fa-check-circle me-2 text-danger"></i>
										Wedding Ceremony
									</li>
									<li className="py-1">
										<i className="fas fa-check-circle me-2 text-danger"></i>
										Wedding Vendor
									</li>
								</ul>
								<a
									href="https://invityu.com"
									target="_blank"
									rel="noreferrer"
									className="read-more-link text-decoration-none text-danger"
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

export default Invityu;
