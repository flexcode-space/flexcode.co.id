import React from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Layout from "../layout/Layout";
import PageHeader from "../components/common/PageHeader";
import PageMeta from "../components/common/PageMeta";
import PortfolioDetails from "../components/portfolio/PortfolioDetails";
import useFetch from "../hooks/useFetch";
import NotFoundScreen from "../components/others/NotFoundScreen";

const PortfolioDetail = () => {
	const params = useParams();
	const slug = params?.slug;

	const { data: response, loading } = useFetch(
		process.env.REACT_APP_API_URL + "portfolio/detail?slug=" + slug
	);
	const data = response?.data || null;

	const renderNotFound = () => {
		return <NotFoundScreen />;
	};

	const renderReady = () => {
		return (
			<>
				<PageMeta title="Portfolio - FlexCode" />
				<PageHeader title={data?.title} desc={data?.category} />
				{!loading ? (
					<PortfolioDetails data={data} />
				) : (
					<div className="container py-5">
						<Skeleton height={400} />
					</div>
				)}
			</>
		);
	};

	return (
		<Layout>
			{response?.code === "404" ? renderNotFound() : renderReady()}
		</Layout>
	);
};

export default PortfolioDetail;
