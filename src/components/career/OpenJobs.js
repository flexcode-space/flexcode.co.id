import React from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import useFetch from "../../hooks/useFetch";
import LottiePlayer from "../common/LottiePlayer";

const OpenJobs = () => {
	const navigate = useNavigate();

	const { data: response, loading } = useFetch(
		process.env.REACT_APP_API_URL + "career/all"
	);
	const data = response?.data || [];
	const emptyArray = new Array(2).fill("");

	const goToJobDetail = (slug) => {
		navigate(`/job/${slug}`);
	};

	return (
		<>
			<section id="open-positions" className="open-jobs ptb-120">
				<div className="container">
					<div className="row align-items-center justify-content-between">
						<div className="col-lg-4 col-md-12">
							<div className="section-heading">
								<h4 className="h5 text-primary">Opening Positions</h4>
								<h2>Current Available Positions</h2>
							</div>
						</div>
						<div className="col-lg-7 col-md-12">
							<p>
								Jobs fill your pockets, adventures fill your soul. At FlexCode
								you can have both. Start your journey with us.
							</p>
						</div>
					</div>
					{!loading ? (
						<div className="row justify-content-center">
							{data && data.length ? (
								<>
									{data.map((item, index) => (
										<div className="col-lg-6 col-md-12" key={index}>
											<div className="text-decoration-none mt-4 mt-xl-0 mt-lg-0 single-open-job p-5 bg-dark text-white d-block rounded-custom">
												<div className="d-flex justify-content-between align-items-center">
													<span className="job-time h-6 mb-2">
														<i className="far fa-briefcase me-2"></i>{" "}
														<strong>{item?.type}</strong>
													</span>
													<span className="badge px-3 py-2 bg-custom-light rounded-pill small">
														{item?.category}
													</span>
												</div>
												<h3 className="h5">{item?.position}</h3>
												<ul className="job-info-list list-inline list-unstyled text-muted">
													<li className="list-inline-item">
														<span className="far fa-bookmark me-1"></span>{" "}
														{item?.level}
													</li>
													<li className="list-inline-item">
														<span className="far fa-map-marker-alt me-1"></span>{" "}
														{item?.location}
													</li>
													{item?.salary && (
														<li className="list-inline-item">
															<span className="far fa-wallet me-1"></span>{" "}
															{item?.salary}
														</li>
													)}
												</ul>
												<div
													className="btn btn-outline-light btn-sm d-inline-block mt-4"
													onClick={() => goToJobDetail(item?.slug)}
												>
													View Detail
												</div>
											</div>
										</div>
									))}
								</>
							) : (
								<>
									<LottiePlayer src="https://assets6.lottiefiles.com/private_files/lf30_cgfdhxgx.json" />
									<div className="text-center fw-bold">No Data</div>
								</>
							)}
						</div>
					) : (
						<div className="row justify-content-center">
							{emptyArray.map((_, i) => (
								<div className="col-lg-6" key={i}>
									<Skeleton height={260} />
								</div>
							))}
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default OpenJobs;
