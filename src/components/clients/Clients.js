import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import useFetch from "../../hooks/useFetch";
import SectionTitle from "../common/SectionTitle";

const Clients = () => {
	const { data: response, loading } = useFetch(
		process.env.REACT_APP_API_URL + "clients/clients"
	);
	const data = response?.data || [];
	const emptyArray = new Array(6).fill("");

	return (
		<>
			<section className="integration-section bg-light ptb-120">
				<div className="container">
					<div className="row align-items-center justify-content-lg-between">
						<div className="col-lg-6 col-md-12">
							<SectionTitle
								subtitle="Clients & Partner"
								title="We Collaborate with Top Company, Startup and Brands"
								description="  Dynamically pursue convergence rather than 24/7 process
                  improvements develop end-to-end customer service action items."
								leftAlign
							/>
						</div>
						<div className="col-lg-4 col-md-12">
							<div className="text-lg-end mb-5 mb-lg-0" data-aos="fade-left">
								<Link to="/portfolio" className="btn btn-primary">
									View Our Portfolio
								</Link>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="integration-wrapper position-relative w-100">
								{!loading ? (
									<ul className="integration-list list-unstyled mb-0">
										{data.map((item, index) => (
											<li
												data-aos="fade-up"
												data-aos-delay={index * 50}
												key={index}
											>
												<div className="single-integration">
													<img
														src={item?.logo}
														alt="integration"
														className="img-fluid"
													/>
												</div>
											</li>
										))}
									</ul>
								) : (
									<ul className="integration-list list-unstyled mb-0">
										{emptyArray.map((_, i) => (
											<li data-aos="fade-up" data-aos-delay="50">
												<Skeleton height={105} />
											</li>
										))}
									</ul>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Clients;
