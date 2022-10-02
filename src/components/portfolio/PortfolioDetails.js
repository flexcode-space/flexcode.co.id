import React from "react";
import styled from "styled-components";

const PortfolioDetails = (props) => {
	const { data } = props;

	const deliverablesList = data?.deliverables
		? JSON.parse(data?.deliverables)
		: [];
	const technologyList = data?.technology ? JSON.parse(data?.technology) : [];
	const roleList = data?.roles ? JSON.parse(data?.roles) : [];
	const projectUrl = `https://${data?.url}`;

	return (
		<section className="portfolio-details ptb-100">
			<div className="container">
				<div className="row justify-content-center">
					<div className="portfolio-feature-img pb-60">
						<img src={data?.image} alt={data?.title} />
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8">
						<div className="portfolio-deatil-info pe-5">
							{data?.goals && (
								<div>
									<h3 className="">Project Goals</h3>
									<p>{data?.goals}</p>
								</div>
							)}
							{data?.challenge && (
								<div className="mt-5">
									<h3 className="">The Challenge</h3>
									<p>{data?.challenge}</p>
								</div>
							)}
							{data?.solution && (
								<div className="mt-5">
									<h3 className="">Solution</h3>
									<p>{data?.solution}</p>
								</div>
							)}
						</div>
					</div>
					<div
						className="col-lg-4 bg-light p-5"
						style={{ borderRadius: "10px" }}
					>
						<ul className="list-unstyled">
							<li className="py-3">
								<h5>Client</h5>
								<span>{data?.client}</span>
							</li>
							{data?.url && (
								<li className="py-3">
									<h5>Link</h5>
									<a href={projectUrl} target="_blank" rel="noreferrer">
										{data?.url}
									</a>
								</li>
							)}
							{roleList.length > 0 && (
								<li className="py-3">
									<h5>Roles</h5>
									<span>
										<ul>
											{roleList?.map((item, index) => (
												<li key={index}>{item}</li>
											))}
										</ul>
									</span>
								</li>
							)}
							{data?.category && (
								<li className="py-3">
									<h5>Service</h5>
									<div className="d-flex mt-3">
										<StyledBadge>{data?.category}</StyledBadge>
									</div>
								</li>
							)}
							{data?.industrial && (
								<li className="py-3">
									<h5>Industrial</h5>
									<span>{data?.industrial}</span>
								</li>
							)}
							{deliverablesList.length > 0 && (
								<li className="py-3">
									<h5>Deliverables</h5>
									<div className="d-flex mt-3">
										{deliverablesList?.map((item, index) => (
											<StyledBadge key={index}>{item}</StyledBadge>
										))}
									</div>
								</li>
							)}
							{technologyList.length > 0 && (
								<li className="pt-3">
									<h5>Technology</h5>
									<div className="d-flex mt-3">
										{technologyList?.map((item, index) => (
											<StyledBadge key={index}>{item}</StyledBadge>
										))}
									</div>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PortfolioDetails;

const StyledBadge = styled.div`
	color: #417194;
	background-color: transparent;
	background-image: none;
	border: 1px solid #417194;
	text-transform: none;
	padding: 2px 13px;
	border-radius: 4px;
	margin-right: 8px;
	font-size: 15px;
	font-weight: 600;

	&:hover {
		color: #fff;
		background-color: #417194;
	}
`;
