import React from "react";
import OerviewCard from "./OerviewCard";

const JobDetails = (props) => {
	const { data } = props;

	return (
		<>
			<section className="job-details ptb-120">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-8 pe-5">
							<div className="job-details-wrap">
								<h2>Job Details</h2>
								<p>{data?.details}</p>
								<div className="job-details-info mt-5">
									<h3 className="h5 mb-3">Responsibilities</h3>
									<ul className="content-list list-unstyled">
										<div
											dangerouslySetInnerHTML={{
												__html: data?.responsibilities,
											}}
										/>
									</ul>
								</div>
								<div className="job-details-info mt-5">
									<h3 className="h5 mb-3">Requirements</h3>
									<ul className="content-list list-unstyled">
										<div
											dangerouslySetInnerHTML={{
												__html: data?.requirements,
											}}
										/>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<OerviewCard data={data} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default JobDetails;
