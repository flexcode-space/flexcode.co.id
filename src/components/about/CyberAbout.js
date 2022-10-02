import React from "react";
import { Link } from "react-router-dom";

const CyberAbout = () => {
	return (
		<section className="counter-with-video pt-80 ptb-120" id="cyber-about">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12">
						<div className="cyber-about-img text-center mb-30 mb-lg-0">
							<img
								src="/assets/img/about_cyber.jpg"
								alt="VR"
								className="img-fluid"
							/>
							<div className="row g-0">
								<div className="col-lg-5">
									<div className="sheild-img">
										<img
											src="/assets/img/about2.png"
											alt="Sheild"
											className="img-fluid d-none d-lg-block"
										/>
									</div>
								</div>
								<div className="col-lg-6 col-md-12">
									<div className="pe-2">
										<div className="cyber-about-count-box d-md-flex bg-white p-4 mt-3">
											<div className="pe-3">
												<h2>20+</h2>
											</div>
											<div>
												<h5 className="h6">Years Experience</h5>
												<p className="mb-0">We Just Big Achived</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="pt-5">
							<div className="section-heading mb-5">
								<h5 className="h6 text-primary">About Quiety</h5>
								<h2>We’re Advanced Cyber Security Provider</h2>
								<p>
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet Velit officia consequat duis enim velit mollit.
								</p>
							</div>
							<div className="row">
								<div className="col-lg-6">
									<div className="bg-white cyber-about-box mb-30 mb-lg-0">
										<div className="cyber-about-icon">
											<i className="far fa-hand-receiving"></i>
										</div>
										<h5 className="h-6">Success Project</h5>
										<p>
											If you use this is regularly keephosting bandwidth bill
											nostrud amet.
										</p>
										<Link
											to="/about-us"
											className="text-decoration-none text-dark"
										>
											Explore more
										</Link>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="bg-white cyber-about-box">
										<div className="cyber-about-icon">
											<i className="far fa-users"></i>
										</div>
										<h5 className="h-6">Team Consultancy</h5>
										<p>
											If you use this si regularly keephosting bandwidth bill
											nostrud amet.
										</p>
										<Link
											to="/about-us"
											className="text-decoration-none text-dark"
										>
											Explore more
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CyberAbout;
