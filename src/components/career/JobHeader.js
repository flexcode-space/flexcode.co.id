import React from "react";

const JobHeader = (props) => {
	const { data } = props;

	return (
		<>
			<section
				className="page-header position-relative overflow-hidden ptb-120 bg-dark"
				style={{
					background:
						"url('/assets/img/page-header-bg.svg')no-repeat bottom left",
				}}
			>
				<div className="container">
					<div className="row justify-content-between align-items-center">
						<div className="col-lg-12 col-12 mt-4">
							<div className="company-info-wrap">
								<div className="company-overview">
									<h1 className="display-5 fw-bold">{data?.position}</h1>
									<ul className="list-unstyled list-inline mb-0 mt-3">
										<li className="list-inline-item me-4">
											<i className="far fa-bookmark me-2"></i>
											{data?.level}
										</li>
										<li className="list-inline-item me-4">
											<i className="far fa-map-marker-alt me-2"></i>
											{data?.location}
										</li>
										<li className="list-inline-item me-4">
											<i className="far fa-briefcase me-2"></i>
											{data?.type}
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
				</div>
			</section>
		</>
	);
};

export default JobHeader;
