import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../common/NotFound";

const NotFoundScreen = () => {
	return (
		<>
			<section
				className="error-section ptb-120 bg-dark min-vh-100 w-100 d-flex flex-column justify-content-center"
				style={{
					background:
						"url('/assets/img/page-header-bg.svg')no-repeat bottom right",
				}}
			>
				<div className="container">
					<div className="row align-items-center justify-content-center">
						<div className="col-lg-5 col-md-6">
							<div className="error-page-content-wrap">
								<h2 className="error-404 text-warning">404</h2>
								<h1 className="display-5 fw-bold">Page Not Found</h1>
								<p className="lead">
									the page you are looking for is not available or not found,
									please check your destination page again.
								</p>

								<Link to="/" className="btn btn-primary mt-4">
									Go Back Home
								</Link>
							</div>
						</div>
						<div className="col-lg-6 col-md-8 mt-5 d-none d-md-block d-lg-block">
							<div className="hero-img position-relative circle-shape-images ps-5">
								<NotFound />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default NotFoundScreen;
