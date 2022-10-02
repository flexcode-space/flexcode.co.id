import React from "react";
import SectionTitle from "../common/SectionTitle";

const AboutPageHero = () => {
	return (
		<>
			<section
				className="about-header-section ptb-120 position-relative overflow-hidden bg-dark"
				style={{
					background:
						"url('/assets/img/page-header-bg.svg')no-repeat center right",
				}}
			>
				<div className="container pb-5 pt-5">
					<div className="row">
						<div className="col-12">
							<div className="section-heading-wrap d-flex justify-content-between z-5 position-relative">
								<div className="about-content-left">
									<div className="about-info mb-5">
										<SectionTitle
											subtitle="About Us"
											title="Creativity and quality is our destination"
											description="Dynamically disintermediate technically sound technologies
											with compelling quality vectors error-free communities."
											leftAlign
										/>
									</div>
								</div>
								<div className="about-content-right text-right d-none d-md-flex mb-5">
									<img
										src="/assets/images/rocket.png"
										alt="about"
										className="rounded-custom about-img-last shadow"
										style={{ width: "35%" }}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-white position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z-2 py-5"></div>
			</section>
		</>
	);
};

export default AboutPageHero;
