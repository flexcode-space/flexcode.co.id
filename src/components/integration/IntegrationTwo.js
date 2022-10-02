import React from "react";
import { Link } from "react-router-dom";

import SectionTitle from "../common/SectionTitle";

const CLIENTS = [
	{
		name: "Telkom Indonesia",
		logo: "assets/images/clients/telkom.png",
	},
	{
		name: "PLN",
		logo: "assets/images/clients/pln.png",
	},
	{
		name: "Pertamina",
		logo: "assets/images/clients/phe.png",
	},
	{
		name: "MDI Venture",
		logo: "assets/images/clients/mdi.png",
	},
	{
		name: "Sirka",
		logo: "assets/images/clients/sirka.png",
	},
	{
		name: "Mitech",
		logo: "assets/images/clients/mitech.png",
	},
	{
		name: "Mahkamah Agung",
		logo: "assets/images/clients/mahkamahagung.png",
	},
	{
		name: "Institut Teknologi Bandung",
		logo: "assets/images/clients/its.png",
	},
	{
		name: "Universitas Syiah Kuala",
		logo: "assets/images/clients/unsyiah.png",
	},
	{
		name: "TravelKuala",
		logo: "assets/images/clients/travelkuala.png",
	},
	{
		name: "Daneen Outfit",
		logo: "assets/images/clients/daneen.png",
	},
	{
		name: "House of Kirana",
		logo: "assets/images/clients/kirana.png",
	},
	{
		name: "Fixature",
		logo: "assets/images/clients/fixature.png",
	},
	{
		name: "Geulis Travel",
		logo: "assets/images/clients/geulis.png",
	},
	{
		name: "ATC",
		logo: "assets/images/clients/atc.png",
	},
	{
		name: "Japancareer",
		logo: "assets/images/clients/japancareer.png",
	},
	{
		name: "Ruhul Islam Anak Bangsa",
		logo: "assets/images/clients/riab.png",
	},
	{
		name: "Sam",
		logo: "assets/images/clients/sam.png",
	},
];

const IntegrationTwo = () => {
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
								<ul className="integration-list list-unstyled mb-0">
									{CLIENTS.map((item, index) => (
										<li data-aos="fade-up" data-aos-delay="50" key={index}>
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
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default IntegrationTwo;
