import React from "react";
import LottiePlayer from "../common/LottiePlayer";

const ContactFormTwo = () => {
	return (
		<>
			<section
				className="contact-us-form pt-60 pb-120"
				style={{
					background:
						"url('/assets/img/shape/contact-us-bg.svg')no-repeat center bottom",
				}}
			>
				<div className="container">
					<div className="row justify-content-lg-between align-items-center">
						<div className="col-lg-6 col-md-8">
							<div className="section-heading">
								<h2>Talk to Our Sales & Marketing Department Team</h2>
								<p>
									Collaboratively promote client-focused convergence vis-a-vis
									customer directed alignments via standardized infrastructures.
								</p>
							</div>
							<form
								action="https://formsubmit.co/5d61eabd3dc25216534b54d144fa688e"
								method="POST"
								className="mt-4 register-form"
							>
								<input
									type="hidden"
									name="_next"
									value="https://flexcode.co.id/thanks"
								/>
								<input
									type="hidden"
									name="_subject"
									value="Landing Page Contact Form"
								/>
								<input
									type="hidden"
									name="_autoresponse"
									value="Hai, Terima kasih telah menghubungi kamu. Kami akan segera membalas email Anda."
								/>
								<div className="row">
									<div className="col-sm-12">
										<div className="input-group mb-3">
											<input
												type="text"
												className="form-control"
												placeholder="Name"
												aria-label="name"
												name="name"
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group mb-3">
											<input
												type="email"
												className="form-control"
												placeholder="Email"
												aria-label="work-Email"
												name="email"
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group mb-3">
											<input
												type="text"
												className="form-control"
												placeholder="Company website"
												aria-label="company-website"
												name="website"
											/>
										</div>
									</div>
									<div className="col-sm-12">
										<div className="input-group mb-3">
											<select
												className="form-control form-select"
												id="budget"
												required=""
												data-msg="Choose a topic, so we know who to send your request to:"
												name="topic"
											>
												<option value="">This question is about</option>
												<option value="Development">Development</option>
												<option value="Business Application">
													Business Application
												</option>
												<option value="IT Training">IT Training</option>
												<option value="Cloud Services">Cloud Services</option>
												<option value="Managed Services">
													Managed Services
												</option>
												<option value="Others">Others</option>
											</select>
										</div>
									</div>
									<div className="col-12">
										<div className="input-group mb-3">
											<textarea
												name="message"
												className="form-control"
												placeholder="Tell us more about your project, needs and budget"
												style={{ height: "120px" }}
											></textarea>
										</div>
									</div>
									<div className="col-12">
										<button
											type="submit"
											className="btn btn-primary mt-4 d-block w-100"
										>
											Submit Request
										</button>
									</div>
								</div>
							</form>
						</div>
						<div className="col-lg-5 col-md-10">
							<div className="contact-us-img">
								<LottiePlayer
									src="https://assets8.lottiefiles.com/packages/lf20_eroqjb7w.json"
									width="600px"
									height="600px"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactFormTwo;
