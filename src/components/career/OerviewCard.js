import React from "react";

const OerviewCard = (props) => {
	const { data } = props;

	return (
		<>
			<div className="job-overview-wrap bg-light p-5 sticky-sidebar rounded-custom mt-5 mt-lg-0">
				<h5>Overviews</h5>
				<ul className="job-overview-list list-unstyled mt-4">
					<li>
						<i className="far fa-tag text-primary"></i>
						<div className="overview-item">
							<h6 className="mb-0">Category:</h6>
							<span>{data?.category}</span>
						</div>
					</li>
					<li>
						<i className="far fa-map-marker-alt text-primary"></i>
						<div className="overview-item">
							<h6 className="mb-0">Location:</h6>
							<span>{data?.location}</span>
						</div>
					</li>
					<li>
						<i className="far fa-bookmark text-primary"></i>
						<div className="overview-item">
							<h6 className="mb-0">Job Level:</h6>
							<span>{data?.level}</span>
						</div>
					</li>
					<li>
						<i className="far fa-briefcase text-primary"></i>
						<div className="overview-item">
							<h6 className="mb-0">Employment Type:</h6>
							<span>{data?.type}</span>
						</div>
					</li>
				</ul>
				<a
					href="mailto:career@flexcode.co.id?subject=Job Application - Position - Name"
					className="btn btn-primary d-block mt-5"
				>
					Apply now
				</a>
			</div>
		</>
	);
};

export default OerviewCard;
