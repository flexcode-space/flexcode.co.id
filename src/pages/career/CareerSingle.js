import React from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import JobDetails from "../../components/career/JobDetails";
import JobHeader from "../../components/career/JobHeader";
import PageMeta from "../../components/common/PageMeta";
import useFetch from "../../hooks/useFetch";
import Layout from "../../layout/Layout";
import NotFoundScreen from "../../components/others/NotFoundScreen";

const CareerSingle = () => {
	const params = useParams();
	const slug = params?.slug;

	const { data: response, loading } = useFetch(
		process.env.REACT_APP_API_URL + "career/detail?slug=" + slug
	);
	const data = response?.data || null;

	const renderNotFound = () => {
		return <NotFoundScreen />;
	};

	const renderReady = () => {
		return (
			<>
				<PageMeta title="Jobs Detail - FlexCode" />
				<JobHeader data={data} />
				{!loading ? (
					<JobDetails data={data} />
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

export default CareerSingle;
