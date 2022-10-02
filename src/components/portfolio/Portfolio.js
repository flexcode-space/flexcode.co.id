import React from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import useFetch from "../../hooks/useFetch";

const Portfolio = () => {
	const navigate = useNavigate();

	const { data: response, loading } = useFetch(
		process.env.REACT_APP_API_URL + "portfolio/all"
	);
	const data = response?.data || [];
	const emptyArray = new Array(2).fill("");

	const goToPorfolioDetail = (slug) => {
		navigate(`/portfolio/${slug}`);
	};

	return (
		<section className="portfolio bg-light ptb-120">
			<div className="container">
				<div className="row justify-content-center">
					{!loading ? (
						<div className="row">
							{data?.map((item, index) => (
								<div className="col-lg-6" key={index}>
									<div
										className="single-portfolio-item mb-30"
										style={{ cursor: "pointer" }}
										onClick={() => goToPorfolioDetail(item?.slug)}
									>
										<div className="portfolio-item-img">
											<img
												src={item?.image}
												alt="portfolio "
												className="img-fluid"
											/>
											<div className="portfolio-info">
												<h5>
													<div className="text-decoration-none text-white">
														{item?.title}
													</div>
												</h5>
												<div className="categories">
													<span>{item?.category}</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					) : (
						<div className="row">
							{emptyArray.map((_, i) => (
								<div className="col-lg-6" key={i}>
									<Skeleton height={400} />
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
