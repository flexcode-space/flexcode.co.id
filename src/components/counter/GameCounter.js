import React from "react";

export default function GameCounter() {
	return (
		<section
			className="game-counter-bg"
			style={{ background: "url('/assets/img/counter-bg.png')" }}
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="content pt-100">
							<h2 className="text-white mb-4">
								Free DDOS Best Protection With Quiety.
							</h2>
							<p className="text-white mb-4">
								Conveniently coordinate interactive convergence rather than
								parallel growth strategies. Dramatically productivate functional
								results before diverse benefits. Dramatically plagiarize
								cross-media best practice
							</p>
						</div>
						<div className="row counter-grid pt-1">
							<div className="col-lg-4 col-md-4 col-sm-12">
								<div className="text-white">
									<h4 className="text-white">5745+</h4>
									<p>Game Servers Deployed</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-12">
								<div className="text-white">
									<h4 className="text-white">12.5k+</h4>
									<p>Happy Customers</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-12">
								<div className="text-white">
									<h4 className="text-white">45+</h4>
									<p>Data Centers Worldwide</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="game-counter-img mt-4">
							<img
								src="/assets/img/counter-lock.png"
								className="img-fluid"
								alt="Locker"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
