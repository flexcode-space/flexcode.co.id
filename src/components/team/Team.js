import React from "react";
import Skeleton from "react-loading-skeleton";
import useFetch from "../../hooks/useFetch";

const Team = () => {
	const { data: response, loading } = useFetch(
		process.env.REACT_APP_API_URL + "teams/us"
	);
	const data = response?.data || [];
	const emptyArray = new Array(4).fill("");

	return (
		<>
			<section id="our-team" className="team-section pt-60 pb-120">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6 col-md-12">
							<div className="section-heading text-center">
								<h5 className="h6 text-primary">Our Team</h5>
								<h2>The People Behind FlexCode</h2>
								<p>
									We are proud to call ourselves FlexTeam because we are always
									there for you.
								</p>
							</div>
						</div>
					</div>
					{!loading ? (
						<div className="row justify-content-center">
							{data.map((item, index) => (
								<div className="col-lg-3 col-md-6" key={index}>
									<div className="team-single-wrap mb-5">
										<div className="team-img rounded-custom">
											<img
												src={item?.photo}
												alt="team"
												className="img-fluid position-relative"
											/>
											<ul className="list-unstyled team-social-list d-flex flex-column mb-0">
												{item?.linkedin && (
													<li className="list-inline-item">
														<a
															href={
																"https://www.linkedin.com/in/" + item?.linkedin
															}
															target="_blank"
															rel="noreferrer"
														>
															<i className="fab fa-linkedin-in"></i>
														</a>
													</li>
												)}
												{item?.instagram && (
													<li className="list-inline-item">
														<a
															href={
																"https://www.instagram.com/" + item?.instagram
															}
															target="_blank"
															rel="noreferrer"
														>
															<i className="fab fa-instagram"></i>
														</a>
													</li>
												)}
												{item?.twitter && (
													<li className="list-inline-item">
														<a
															href={"https://www.twitter.com/" + item?.twitter}
															target="_blank"
															rel="noreferrer"
														>
															<i className="fab fa-twitter"></i>
														</a>
													</li>
												)}
											</ul>
										</div>
										<div className="team-info mt-4 text-center">
											<h5 className="h6 mb-0">{item?.name}</h5>
											<p className="text-muted mb-0">{item?.role}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					) : (
						<div className="row justify-content-center">
							{emptyArray.map((_, i) => (
								<div className="col-lg-3 col-md-6" key={i}>
									<Skeleton height={300} />
									<Skeleton height={20} className="mt-4" />
									<Skeleton height={10} className="mt-1" />
								</div>
							))}
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default Team;
