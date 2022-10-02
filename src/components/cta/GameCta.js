import React from "react";
import { Link } from "react-router-dom";

export default function GameCta() {
	return (
		<section className="game-cta position-relative z-5">
			<div className="container">
				<div
					className="game-cta-bg rounded-top px-4 px-md-0 pt-80 ps-md-5"
					style={{
						background: "url(assets/img/Minecraft.png)",
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
					}}
				>
					<div className="row">
						<div className="col-lg-5 col-md-8">
							<div className="game-cta-content">
								<h3 className="text-white mb-3">
									Discover the Best Minecraft Multi-Player Servers.
								</h3>
								<p className="text-off-white">
									Globally foster interoperable infomediaries before turnkey
									content. Holisticly scale client-centric.
								</p>
								<Link to="/contact-us" className="game-btn-mdm mt-4 text-white">
									Purchase Now
								</Link>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="game-img text-lg-end mt-5 mt-lg-0">
								<img
									src="/assets/img/minecrapt.png"
									className="text-end img-fluid"
									alt="game"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
