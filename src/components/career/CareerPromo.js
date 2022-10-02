import React from "react";

const CareerPromo = () => {
	return (
		<>
			<section className="career-promo ptb-120 bg-light">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6 col-md-12">
							<div className="section-heading text-center">
								<h4 className="h5 text-primary">How We Work</h4>
								<h2>Make cool stuff. From anywhere.</h2>
								<p>
									FlexCode is proudly a fully remote company. We believe that
									with a global team comes a whole world of creativity.
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-lg-6">
							<div className="single-feature d-flex mt-0 p-5 bg-white rounded-custom">
								<span className="fas fa-messages fa-2x text-primary"></span>
								<div className="ms-4 mt-2">
									<h5>Open communication</h5>
									<p className="mb-0">
										Communication is to remote work what oxygen is to life. We
										are open and collaborative. At our weekly all-hands video
										calls, we share project updates and learn new skills from
										each other on topics ranging from online marketing to making
										sauerkraut.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-6">
							<div className="single-feature d-flex mt-4 mt-xl-0 mt-lg-0 mt-md-0 p-5 bg-white rounded-custom">
								<span className="fas fa-rocket fa-2x text-primary"></span>
								<div className="ms-4 mt-2">
									<h5>Constant improvement</h5>
									<p className="mb-0">
										We go the extra mile for our teammates, just as we do for
										our customers. We encourage each other to step outside our
										comfort zones and recognize that mistakes are an opportunity
										to learn and grow.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-6">
							<div className="single-feature d-flex mt-4 p-5 bg-white rounded-custom">
								<span className="fas fa-user-friends fa-2x text-primary"></span>
								<div className="ms-4 mt-2">
									<h5>Strong teamwork</h5>
									<p className="mb-0">
										We are one hell of a team. We work for common goals and
										always have each others' backs. Every few months, we travel
										to meet up and spend quality time together. This keeps our
										ties strong and helps us see the human faces.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-6">
							<div className="single-feature d-flex mt-4 p-5 bg-white rounded-custom">
								<span className="fas fa-network-wired fa-2x text-primary"></span>
								<div className="ms-4 mt-2">
									<h5>Kindness & building relationships</h5>
									<p className="mb-0">
										Working in a distributed team can sometimes feel lonely, but
										not at Toggl. The digital nomads travel the world together.
										The foodies share recipes for cooking. The sporty Togglers
										support each other in being active and reaching personal
										milestones.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CareerPromo;
