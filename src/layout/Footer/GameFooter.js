import React from "react";
import { Link } from "react-router-dom";

export default function GameFooter() {
	return (
		<footer className="game-footer game-footer-bg">
			<div className="container">
				<div className="row ptb-120">
					<div className="col-lg-6 col-md-6">
						<div className="row">
							<div className="col-lg-6 col-md-6">
								<div className="game-footer-nav mb-4">
									<h5 className="text-white position-relative mb-3">
										Others Services
									</h5>
									<ul className="list-unstyled">
										<li className="py-1">
											<Link to="/" className="text-decoration-none">
												Wordpress Hosting
											</Link>
										</li>
										<li className="py-1">
											<Link to="/" className="text-decoration-none">
												Shared Cloud Hosting
											</Link>
										</li>
										<li className="py-1">
											<Link to="/" className="text-decoration-none">
												VPS Cloud Hosting
											</Link>
										</li>
										<li className="py-1">
											<Link to="/" className="text-decoration-none">
												Dedicated CPU Servers
											</Link>
										</li>
										<li className="py-1">
											<Link to="/" className="text-decoration-none">
												Domains Search
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="game-footer-nav mb-4">
									<h5 className="text-white position-relative mb-3">
										Game Servers
									</h5>
									<ul className="list-unstyled">
										<li className="py-1">
											<Link to="/" className="text-decoration-none">
												Game Servers
											</Link>
										</li>
										<li className="py-1">
											<Link to="/" className="text-decoration-none">
												Battlefield 4 Servers
											</Link>
										</li>
										<li className="py-1">
											<Link to="/" className="text-decoration-none">
												Minecraft Servers
											</Link>
										</li>
										<li className="py-1">
											<Link to="/" className="text-decoration-none">
												DayZ Servers
											</Link>
										</li>
										<li className="py-1">
											<Link to="/" className="text-decoration-none">
												Battlefield 3 Hosting
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="game-footer-nav mb-4">
									<h5 className="text-white position-relative mb-3">
										Others Services
									</h5>
									<ul className="list-unstyled">
										<li className="py-1">
											<Link to="/" className="text-decoration-none">
												Wordpress Hosting
											</Link>
										</li>
										<li className="py-1">
											<Link to="/" className="text-decoration-none">
												Shared Cloud Hosting
											</Link>
										</li>
										<li className="py-1">
											<Link to="/" className="text-decoration-none">
												VPS Cloud Hosting
											</Link>
										</li>
										<li className="py-1">
											<Link to="/" className="text-decoration-none">
												Dedicated CPU Servers
											</Link>
										</li>
										<li className="py-1">
											<Link to="/" className="text-decoration-none">
												Domains Search
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="game-footer-nav mb-4">
									<h5 className="text-white position-relative mb-3">
										Legal Information
									</h5>
									<ul className="list-unstyled">
										<li className="py-1">
											<Link to="/" className="text-decoration-none">
												{" "}
												Nominet Terms
											</Link>
										</li>
										<li className="py-1">
											<Link to="/" className="text-decoration-none ">
												UK Service Level Commitment
											</Link>
										</li>
										<li className="py-1">
											<Link to="/" className="text-decoration-none ">
												Complaints Procedure
											</Link>
										</li>
										<li className="py-1">
											<Link to="/" className="text-decoration-none ">
												WooCommerce Tutorials
											</Link>
										</li>
										<li className="py-1">
											<Link to="/" className="text-decoration-none">
												Prestashop Tutorials
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<div className="game-footer-right">
							<div className="game-footer-newsletter mb-5">
								<h3 className="text-white">Sign Up For Newsletter</h3>
								<p className="m-0 py-3">
									Stay up to date with our latest news and products.
								</p>
								<form action="#">
									<div className="position-relative g-news-letter">
										<input
											type="text"
											className="form-control shadow-none"
											placeholder="Type your email"
										/>
										<button>Subscribe</button>
									</div>
								</form>
							</div>
							<div className="game-award mb-4">
								<h5 className="text-white mb-4">Hostim Best Awards</h5>
								<ul className="list-unstyled d-flex">
									<li className="me-4">
										<img
											src="/assets/img/award-1.png"
											className="img-fluid"
											alt="award"
										/>
									</li>
									<li className="me-4">
										{" "}
										<img
											src="/assets/img/award-2.png"
											className="img-fluid"
											alt="award"
										/>
									</li>
									<li>
										<img
											src="/assets/img/award-3.png"
											className="img-fluid"
											alt="award"
										/>
									</li>
								</ul>
							</div>
							<div className="game-payment">
								<h5 className="text-white mb-4">We Accepted </h5>
								<img
									src="/assets/img/payment.png"
									className="img-fluid"
									alt="payment"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-black">
				<div className="container">
					<div className="row justify-content-between py-3">
						<div className="col-lg-6 col-md-6 col-sm-12">
							<div className="c-left mb-4 mb-md-0">
								<p className="text-white m-0">
									Copyright 2022 Themestags. All Rights reserved
								</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12">
							<div className="c-right text-md-end">
								<Link to="/" className="text-decoration-none text-white pe-4">
									Privacy Policy
								</Link>
								<Link to="/" className="text-decoration-none text-white">
									Terms & Conditons
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
