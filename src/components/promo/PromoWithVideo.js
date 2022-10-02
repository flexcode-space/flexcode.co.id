import { React, useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const PromoWithVideo = () => {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<section className="video-promo-with-icon">
				<div className="container">
					<div
						className="video-bg-with-icon"
						style={{
							background:
								"url('/assets/img/video-bg.jpg')no-repeat center center / cover",
						}}
					>
						<ModalVideo
							channel="youtube"
							isOpen={isOpen}
							videoId="hAP2QF--2Dg"
							onClose={() => setOpen(false)}
						/>
						<Link to="#" onClick={() => setOpen(true)}>
							<i className="fas fa-play"></i>
						</Link>
					</div>
				</div>
				<div className="video-promo-icon-wrapper bg-light pt-80 pb-120">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-xl-3 col-md-6 mt-4 mt-md-4 mt-lg-0">
								<div className="single-icon-box p-0 p-lg-4">
									<i className="far fa-chart-pie-alt icon-one"></i>
									<h5 className="h6">Fully Functional</h5>
									<p>
										Eaton cheeky blimy bog bugger all mate simplify fully
										pardon.
									</p>
								</div>
							</div>
							<div className="col-lg-3 col-xl-3 col-md-6 mt-4 mt-md-4 mt-lg-0">
								<div className="single-icon-box p-0 p-lg-4">
									<i className="far fa-pen-nib icon-two"></i>
									<h5 className="h6">UX Design</h5>
									<p>Eaton cheeky simplify fully bog bugger all mate pardon.</p>
								</div>
							</div>
							<div className="col-lg-3 col-xl-3 col-md-6 mt-4 mt-md-4 mt-lg-0">
								<div className="single-icon-box p-0 p-lg-4">
									<i className="far fa-chart-network icon-three"></i>
									<h5 className="h6">Stay Connected</h5>
									<p>
										Eaton cheeky blimy bog bugger simplify fully all mate
										pardon.
									</p>
								</div>
							</div>
							<div className="col-lg-3 col-xl-3 col-md-6 mt-4 mt-md-4 mt-lg-0">
								<div className="single-icon-box p-0 p-lg-4">
									<i className="far fa-bezier-curve icon-four"></i>
									<h5 className="h6">Easy to customized</h5>
									<p>
										Eaton cheeky blimy bog bugger all mate pardon simplify
										fully.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PromoWithVideo;
