import React from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
	return (
		<>
			<section
				className="sign-up-in-section bg-dark ptb-60"
				style={{
					background:
						"url('/assets/img/page-header-bg.svg')no-repeat right bottom",
				}}
			>
				<div className="container">
					<div className="row align-items-center justify-content-center">
						<div className="col-lg-5 col-md-8 col-12">
							<Link to="/" className="mb-4 d-block text-center">
								<img
									src="assets/img/logo-white.png"
									alt="logo"
									className="img-fluid"
								/>
							</Link>
							<div className="register-wrap p-5 bg-light shadow rounded-custom">
								<h1 className="h3">Nice to Seeing You Again</h1>
								<p className="text-muted">
									Please log in to access your account web-enabled methods of
									innovative niches.
								</p>

								<div className="action-btns">
									<Link
										to="#"
										className="btn google-btn bg-white shadow-sm mt-4 d-block d-flex align-items-center text-decoration-none justify-content-center"
									>
										<img
											src="assets/img/google-icon.svg"
											alt="google"
											className="me-3"
										/>
										<span>Connect with Google</span>
									</Link>
								</div>
								<div className="position-relative d-flex align-items-center justify-content-center mt-4 py-4">
									<span className="divider-bar"></span>
									<h6 className="position-absolute text-center divider-text bg-light mb-0">
										Or
									</h6>
								</div>
								<form action="#" className="mt-4 register-form">
									<div className="row">
										<div className="col-sm-12">
											<label htmlFor="email" className="mb-1">
												Email <span className="text-danger">*</span>
											</label>
											<div className="input-group mb-3">
												<input
													type="email"
													className="form-control"
													placeholder="Email"
													id="email"
													required
													aria-label="email"
												/>
											</div>
										</div>
										<div className="col-sm-12">
											<label htmlFor="password" className="mb-1">
												Password <span className="text-danger">*</span>
											</label>
											<div className="input-group mb-3">
												<input
													type="password"
													className="form-control"
													placeholder="Password"
													id="password"
													required
													aria-label="Password"
												/>
											</div>
										</div>
										<div className="col-12">
											<button
												type="submit"
												className="btn btn-primary mt-3 d-block w-100"
											>
												Submit
											</button>
										</div>
									</div>
									<p className="font-monospace fw-medium text-center text-muted mt-3 pt-4 mb-0">
										Don’t have an account?
										<Link to="/signup" className="text-decoration-none">
											Sign up Today
										</Link>
										<br />
										<Link to="/password-reset" className="text-decoration-none">
											Forgot password
										</Link>
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default LoginScreen;
