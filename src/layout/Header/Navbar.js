import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OffCanvasMenu from "./OffCanvasMenu";

const Navbar = ({ navDark }) => {
	const [scroll, setScroll] = useState(0);
	const [headerTop, setHeaderTop] = useState(0);

	useEffect(() => {
		const stickyheader = document.querySelector(".main-header");
		setHeaderTop(stickyheader.offsetTop);
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		setScroll(window.scrollY);
	};
	return (
		<>
			<header
				className={`main-header ${
					navDark ? "position-absolute " : ""
				} w-100 position-absolute `}
			>
				<nav
					className={`navbar navbar-expand-xl z-10 ${
						navDark ? "navbar-dark" : "navbar-light"
					} sticky-header ${scroll > headerTop ? "affix" : ""}`}
				>
					<div className="container d-flex align-items-center justify-content-lg-between position-relative">
						<Link
							to="/"
							className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none"
						>
							<img
								src="/assets/images/logo-white.png"
								alt="logo"
								className="img-fluid logo-white"
								style={{ width: "170px" }}
							/>
							<img
								src="/assets/images/logo-dark.svg"
								alt="logo"
								className="img-fluid logo-color"
								style={{ width: "170px" }}
							/>
						</Link>
						<Link
							className="navbar-toggler position-absolute right-0 border-0"
							to="#offcanvasWithBackdrop"
							role="button"
						>
							<span
								className="far fa-bars"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasWithBackdrop"
								aria-controls="offcanvasWithBackdrop"
							></span>
						</Link>

						<div className="collapse navbar-collapse justify-content-center">
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
										<div className="dropdown-grid rounded-custom width-half">
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
												<Link
													to="/services/cloud"
													className="dropdown-link px-0"
												>
													<span className="me-2">
														<i className="far fa-server"></i>
													</span>
													<div className="drop-title">Cloud Services</div>
												</Link>
												<Link
													to="/services/managed"
													className="dropdown-link px-0"
												>
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
									<Link to="/products" className="nav-link">
										Products
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
												<h6 className="drop-heading">Discover </h6>

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
						</div>

						<div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
							{/* <Link
								to="/login"
								className="btn btn-link text-decoration-none me-2"
							>
								Sign In
							</Link> */}
							<Link to="/contact" className="btn btn-primary">
								Contact Us
							</Link>
						</div>
						<OffCanvasMenu />
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
