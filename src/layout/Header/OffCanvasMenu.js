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
							src="/assets/images/logo-dark.svg"
							alt="logo"
							className="img-fluid ps-2"
							style={{ width: "170px" }}
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
						<li>
							<Link to="/" className="nav-link">
								Home
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
								Services
							</a>
							<div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
								<div className="dropdown-grid rounded-custom width-full">
									<div className="dropdown-grid-item">
										<Link
											to="/services/development"
											className="dropdown-link px-0"
										>
											<span className="me-2">
												<i className="far fa-code"></i>
											</span>
											<div className="drop-title">Development</div>
										</Link>
										<Link
											to="/services/business"
											className="dropdown-link px-0"
										>
											<span className="me-2">
												<i className="far fa-rocket-launch"></i>
											</span>
											<div className="drop-title">Business Application</div>
										</Link>
										<Link
											to="/services/training"
											className="dropdown-link px-0"
										>
											<span className="me-2">
												<i className="far fa-screen-users"></i>
											</span>
											<div className="drop-title">IT Training</div>
										</Link>
										<Link to="/services/cloud" className="dropdown-link px-0">
											<span className="me-2">
												<i className="far fa-server"></i>
											</span>
											<div className="drop-title">Cloud Services</div>
										</Link>
										<Link to="/services/managed" className="dropdown-link px-0">
											<span className="me-2">
												<i className="far fa-screwdriver-wrench"></i>
											</span>
											<div className="drop-title">Managed Services</div>
										</Link>
									</div>
								</div>
							</div>
						</li>
						<li>
							<Link to="/product" className="nav-link">
								Product
							</Link>
						</li>
						<li>
							<Link to="/portfolio" className="nav-link">
								Portfolio
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
								More
							</a>
							<div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
								<div className="dropdown-grid rounded-custom width-full">
									<div className="dropdown-grid-item">
										<h6 className="drop-heading">Company</h6>
										<Link to="/about" className="dropdown-link px-0">
											<span className="me-2">
												<i className="far fa-buildings"></i>
											</span>
											<div className="drop-title">About Us</div>
										</Link>
										<Link to="/portfolio" className="dropdown-link px-0">
											<span className="me-2">
												<i className="far fa-presentation-screen"></i>
											</span>
											<div className="drop-title">Portfolio</div>
										</Link>
										<Link to="/career" className="dropdown-link">
											<span className="me-2">
												<i className="far fa-briefcase"></i>
											</span>
											<div className="drop-title">Career</div>
										</Link>
									</div>
									<div className="dropdown-grid-item radius-right-side bg-light">
										<h6 className="drop-heading">Discover</h6>
										<a
											href="https://blog.flexcode.co.id"
											className="dropdown-link"
											target="_blank"
											rel="noreferrer"
										>
											<span className="me-2">
												<i className="far fa-rss"></i>
											</span>
											<div className="drop-title">Blog</div>
										</a>
										<a
											href="https://community.flexcode.co.id"
											className="dropdown-link"
											target="_blank"
											rel="noreferrer"
										>
											<span className="me-2">
												<i className="far fa-users"></i>
											</span>
											<div className="drop-title">Community</div>
										</a>
										<a
											href="https://academy.flexcode.co.id"
											className="dropdown-link"
											target="_blank"
											rel="noreferrer"
										>
											<span className="me-2">
												<i className="far fa-graduation-cap"></i>
											</span>
											<div className="drop-title">Academy</div>
										</a>
									</div>
								</div>
							</div>
						</li>
					</ul>
					<div className="action-btns mt-4 ps-3">
						<Link to="/contact" className="btn btn-primary">
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default OffCanvasMenu;
