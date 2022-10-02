import React from "react";
import { Link } from "react-router-dom";

const PasswordResetScreen = () => {
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
								<h1 className="fw-bold h3">Forgot your Password?</h1>
								<p className="text-muted">
									Don't worry. Type your email and we will send a password
									recovery link to your email..
								</p>
								<form action="#" className="mt-5 register-form">
									<div className="row">
										<div className="col-sm-12">
											<label htmlFor="email" className="mb-1">
												Email <span className="text-danger">*</span>
											</label>
											<div className="input-group mb-3">
												<input
													type="email"
													className="form-control"
													placeholder="Enter your email"
													id="email"
													aria-label="email"
												/>
											</div>
										</div>
										<div className="col-12">
											<button
												type="submit"
												className="btn btn-primary mt-3 d-block w-100"
											>
												Reset Password
											</button>
										</div>
									</div>
									<p className="font-monospace fw-medium text-center mt-3 pt-4 mb-0">
										<Link to="/login" className="text-decoration-none">
											Back to login page
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

export default PasswordResetScreen;
