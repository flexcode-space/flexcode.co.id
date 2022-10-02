import React from "react";

const PortfolioPageHeader = () => {
	return (
		<section
			className="page-header position-relative overflow-hidden ptb-120 bg-dark"
			style={{
				background:
					"url('/assets/img/page-header-bg.svg')no-repeat left bottom",
			}}
		>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8 col-md-12 text-center">
						<h1 className="display-5 fw-bold">Leafery Branding</h1>
						<ul className="list-unstyled d-flex justify-content-center">
							<li className="pe-1">
								<a href="/#" className="text-decoration-none text-white">
									Home/
								</a>
							</li>
							<li>
								<a href="/#" className="text-decoration-none text-muted">
									Leafery Branding
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
			</div>
		</section>
	);
};

export default PortfolioPageHeader;
