import React from "react";
import { Link } from "react-router-dom";

const OffCanvasMenu = () => {
	return (
		<>
			<div
				className="offcanvas offcanvas-end"
				tabIndex="-1"
				id="offcanvasWithBackdrop"
			>
				<div className="offcanvas-header d-flex align-items-center mt-4">
					<Link
						to="/"
						className="d-flex align-items-center mb-md-0 text-decoration-none"
					>
						<img
							src="/assets/img/logo-color.png"
							alt="logo"
							className="img-fluid ps-2"
						/>
					</Link>
					<button
						type="button"
						className="close-btn text-danger"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					>
						<i className="far fa-close"></i>
					</button>
				</div>
				<div className="offcanvas-body">
					<ul className="nav col-12 col-md-auto justify-content-center main-menu">
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="/#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Home
							</a>
							<div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
								<div className="dropdown-grid rounded-custom width-half">
									<div className="dropdown-grid-item">
										<h6 className="drop-heading">Different Home</h6>
										<Link to="/" className="dropdown-link">
											<span className="demo-list bg-primary rounded text-white fw-bold">
												1
											</span>
											<div className="dropdown-info">
												<div className="drop-title">Saas Company 1</div>
												<p>
													It's for <strong>SaaS Software</strong> Company
												</p>
											</div>
										</Link>
										<Link to="/home-sass-two" className="dropdown-link">
											<span className="demo-list bg-primary rounded text-white fw-bold">
												2
											</span>
											<div className="dropdown-info">
												<div className="drop-title">Saas Company 2</div>
												<p>
													Modern <strong>Saas agency</strong>
												</p>
											</div>
										</Link>
										<Link to="/home-desktop-app" className="dropdown-link">
											<span className="demo-list bg-primary rounded text-white fw-bold">
												3
											</span>
											<div className="dropdown-info">
												<div className="drop-title">Desktop App</div>
												<p>
													<strong>Web Software</strong> Company
												</p>
											</div>
										</Link>
										<Link to="/home-app-landing" className="dropdown-link">
											<span className="demo-list bg-primary rounded text-white fw-bold">
												4
											</span>
											<div className="dropdown-info">
												<div className="drop-title">App Landing</div>
												<p>
													App and <strong>Software</strong> Landing
												</p>
											</div>
										</Link>
										<Link to="/home-soft-app" className="dropdown-link">
											<span className="demo-list bg-primary rounded text-white fw-bold">
												5
											</span>
											<div className="dropdown-info">
												<div className="drop-title">Software Application</div>
												<p>
													Application and
													<strong>Software </strong>
												</p>
											</div>
										</Link>
										<Link to="/home-startup" className="dropdown-link">
											<span className="demo-list bg-primary rounded text-white fw-bold">
												6
											</span>
											<div className="dropdown-info">
												<div className="drop-title">Startup Agency</div>
												<p>
													Different type of <strong>Agency</strong>&lrm;
												</p>
											</div>
										</Link>
										<Link to="/home-data-analysis" className="dropdown-link">
											<span className="demo-list bg-primary rounded text-white fw-bold">
												7
											</span>
											<div className="dropdown-info">
												<div className="drop-title">Data Analysis</div>
												<p>
													Software & <strong>Data Analysis</strong>&lrm;
												</p>
											</div>
										</Link>
										<Link to="/home-app-two" className="dropdown-link">
											<span className="demo-list bg-primary rounded text-white fw-bold">
												8
											</span>
											<div className="dropdown-info">
												<div className="drop-title">App Landing Two</div>
												<p>
													App and <strong>Software</strong> Landing
												</p>
											</div>
										</Link>
										<Link to="/home-nine" className="dropdown-link">
											<span className="demo-list bg-primary rounded text-white fw-bold">
												9
											</span>
											<div className="dropdown-info">
												<div className="drop-title">IT Solution</div>
												<p>
													IT solutions <strong>Software</strong>
												</p>
											</div>
										</Link>
										<Link to="/home-ten" className="dropdown-link">
											<span className="demo-list bg-primary rounded text-white fw-bold">
												10
											</span>
											<div className="dropdown-info">
												<div className="drop-title">Cyber Security</div>
												<p>
													<strong>Cyber Security</strong> landing page
												</p>
											</div>
										</Link>
										<Link to="/home-eleven" className="dropdown-link">
											<span className="demo-list bg-primary rounded text-white fw-bold">
												11
											</span>
											<div className="dropdown-info">
												<div className="drop-title">Crypto Currency</div>
												<p>
													<strong>Crypto Currency</strong> landing page
												</p>
											</div>
										</Link>
										<Link to="/home-twelve" className="dropdown-link">
											<span className="demo-list bg-primary rounded text-white fw-bold">
												12
											</span>
											<div className="dropdown-info">
												<div className="drop-title">Game Solution</div>
												<p>
													<strong>Game Server</strong> landing page
												</p>
											</div>
										</Link>
										<Link to="/home-thirteen" className="dropdown-link">
											<span className="demo-list bg-primary rounded text-white fw-bold">
												13
											</span>
											<div className="dropdown-info">
												<div className="drop-title">Payment Gateway</div>
												<p>
													<strong>Payment Gateway</strong> landing page
												</p>
											</div>
										</Link>
										<Link to="/home-fourteen" className="dropdown-link">
											<span className="demo-list bg-primary rounded text-white fw-bold">
												14
											</span>
											<div className="dropdown-info">
												<div className="drop-title">Digital Marketing</div>
												<p>
													<strong>Digital Marketing</strong> landing page
												</p>
											</div>
										</Link>
										<Link to="/home-fifteen" className="dropdown-link">
											<span className="demo-list bg-primary rounded text-white fw-bold">
												15
											</span>
											<div className="dropdown-info">
												<div className="drop-title">Conference & Event</div>
												<p>
													<strong>Conference & Event</strong> landing
												</p>
											</div>
										</Link>
									</div>
								</div>
							</div>
						</li>
						<li>
							<Link to="/services" className="nav-link">
								Services
							</Link>
						</li>

						<li>
							<Link to="/pricing" className="nav-link">
								Pricing
							</Link>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="/#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Company
							</a>
							<div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
								<div className="dropdown-grid rounded-custom width-full">
									<div className="dropdown-grid-item">
										<h6 className="drop-heading">Useful Links</h6>
										<Link to="/about-us" className="dropdown-link px-0">
											<span className="me-2">
												<i className="far fa-fingerprint"></i>
											</span>
											<div className="drop-title">About Us</div>
										</Link>
										<Link to="/contact-us" className="dropdown-link px-0">
											<span className="me-2">
												<i className="far fa-address-book"></i>
											</span>
											<div className="drop-title">Contact Us</div>
										</Link>
										<Link to="/services" className="dropdown-link">
											<span className="me-2">
												<i className="far fa-code-branch"></i>
											</span>
											<div className="drop-title">Services</div>
										</Link>
										<Link to="/service-single" className="dropdown-link px-0">
											<span className="me-2">
												<i className="far fa-server"></i>
											</span>
											<div className="drop-title">Services Single</div>
										</Link>
										<Link to="/blogs" className="dropdown-link">
											<span className="me-2">
												<i className="far fa-th-large"></i>
											</span>
											<div className="drop-title">Our Latest News</div>
										</Link>
										<Link to="/blog-single" className="dropdown-link">
											<span className="me-2">
												<i className="far fa-bars"></i>
											</span>
											<div className="drop-title">News Details</div>
										</Link>
										<Link to="/career" className="dropdown-link px-0">
											<span className="me-2">
												<i className="far fa-graduation-cap"></i>
											</span>
											<div className="drop-title">Career</div>
										</Link>
										<Link to="/career-single" className="dropdown-link px-0">
											<span className="me-2">
												<i className="far fa-user-graduate"></i>
											</span>
											<div className="drop-title">Career Single</div>
										</Link>
										<Link to="/integrations" className="dropdown-link">
											<span className="me-2">
												<i className="far fa-rocket-launch"></i>
											</span>
											<div className="drop-title">Integrations</div>
										</Link>
										<Link
											to="/integration-single"
											className="dropdown-link px-0"
										>
											<span className="me-2">
												<i className="far fa-paper-plane"></i>
											</span>
											<div className="drop-title">Integration Single</div>
										</Link>
									</div>
									<div className="dropdown-grid-item radius-right-side bg-light">
										<h6 className="drop-heading">Utility Pages </h6>
										<Link to="style-guide.html" className="dropdown-link">
											<span className="me-2">
												<i className="far fa-code-branch"></i>
											</span>
											<div className="drop-title">Style Guide</div>
										</Link>
										<Link to="/help-center" className="dropdown-link">
											<span className="me-2">
												<i className="far fa-life-ring"></i>
											</span>
											<div className="drop-title">Help Center</div>
										</Link>
										<Link to="/help-center-single" className="dropdown-link">
											<span className="me-2">
												<i className="far fa-headset"></i>
											</span>
											<div className="drop-title">Help Details</div>
										</Link>
										<Link to="/request-demo" className="dropdown-link">
											<span className="me-2">
												<i className="far fa-laptop-code"></i>
											</span>
											<div className="drop-title">Request for Demo</div>
										</Link>
										<Link to="login.html" className="dropdown-link">
											<span className="me-2">
												<i className="far fa-sign-in"></i>
											</span>
											<div className="drop-title">User Login</div>
										</Link>
										<Link to="/signup" className="dropdown-link">
											<span className="me-2">
												<i className="far fa-user-plus"></i>
											</span>
											<div className="drop-title">User SignUp</div>
										</Link>
										<a href="password-reset.html" className="dropdown-link">
											<span className="me-2">
												<i className="far fa-trash-undo"></i>
											</span>
											<div className="drop-title">Recovery Account</div>
										</a>
										<Link to="/error" className="dropdown-link">
											<span className="me-2">
												<i className="far fa-exclamation-triangle"></i>
											</span>
											<div className="drop-title">404 Page</div>
										</Link>
										<Link to="coming-soon.html" className="dropdown-link">
											<span className="me-2">
												<i className="far fa-clock"></i>
											</span>
											<div className="drop-title">Coming Soon</div>
										</Link>
									</div>
								</div>
							</div>
						</li>
					</ul>
					<div className="action-btns mt-4 ps-3">
						<Link to="/login" className="btn btn-outline-primary me-2">
							Sign In
						</Link>
						<Link to="/request-for-demo" className="btn btn-primary">
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default OffCanvasMenu;
