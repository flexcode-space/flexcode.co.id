import React from "react";
import SectionTitle from "../common/SectionTitle";

const COMPANY_DATA = [
	{
		label: "Company Name",
		value: "PT Flexcode Space Teknologi",
		url: "https://ahu.go.id/pencarian/profil-pt/?tipe=perseroan&nama=flexcode+space+teknologi",
	},
	{
		label: "Notarial Deed",
		value: "Fenny Febrianty, S.H., M.Kn.",
	},
	{
		label: "SK Number",
		value: "AHU-0077603.AH.01.01.Tahun 2021",
	},
	{
		label: "Deed of Establishment",
		value: "06 Desember 2021",
	},
	{
		label: "NPWP",
		value: "53.492.560.7-014.000",
	},
	{
		label: "NIB",
		value: "0912210001235",
	},
];

const FeatureWithBg = () => {
	return (
		<>
			<section className="feature-section my-5">
				<div className="container-fluid">
					<div className="feature-container mx-xl-5 position-relative bg-gradient ptb-120 rounded-custom">
						<img
							src="/assets/img/feature-bg-1.jpeg"
							alt="feature-bg"
							className="feature-bg-mockup position-absolute w-100 h-100 left-0 right-0 top-0 bottom-0 rounded-custom"
						/>
						<div className="container">
							<div className="row">
								<div className="col-12 col-lg-6">
									<div className="feature-bg-img-content position-relative z-5">
										<SectionTitle
											title="Company's Legal"
											description="FlexCode has been legally registered in Indonesia. FlexCode is subject to and complies with applicable laws and regulations.
"
										/>
										<ul className="list-unstyled d-flex flex-wrap list-two-col mt-5 mb-0">
											{COMPANY_DATA.map((item, index) => (
												<li className="py-2" key={index}>
													<h6 className="feature-number text-primary mb-2">
														{item?.label}
													</h6>
													<p>
														{item?.value}
														{item?.url && (
															<span className="ms-2">
																<a
																	href={item?.url}
																	target="_blank"
																	rel="noreferrer"
																>
																	<i className="far fa-arrow-up-right-from-square" />
																</a>
															</span>
														)}
													</p>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FeatureWithBg;
