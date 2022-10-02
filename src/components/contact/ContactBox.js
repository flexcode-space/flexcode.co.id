import React from "react";

const ContactBox = () => {
	return (
		<>
			<section className="contact-promo ptb-120">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
							<div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
								<span className="fad fa-comment-alt-lines fa-3x text-primary"></span>
								<div className="contact-promo-info mb-4">
									<h5>Chat with us</h5>
									<p>
										We've got live Social Experts waiting to help you{" "}
										<strong>monday to friday</strong> from
										<strong> 9am to 5pm GMT+7.</strong>
									</p>
								</div>
								<a
									href="https://wa.me/628888641170"
									className="btn btn-link mt-auto"
									target="_blank"
									rel="noreferrer"
								>
									Chat with us
								</a>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
							<div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
								<span className="fad fa-envelope fa-3x text-primary"></span>
								<div className="contact-promo-info mb-4">
									<h5>Email Us</h5>
									<p>
										Simple drop us an email at{" "}
										<strong>hello@flexcode.co.id </strong>
										and you'll receive a reply within 24 hours
									</p>
								</div>
								<a
									href="mailto:hello@flexcode.co.id"
									className="btn btn-primary mt-auto"
								>
									Email Us
								</a>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
							<div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
								<span className="fad fa-phone fa-3x text-primary"></span>
								<div className="contact-promo-info mb-4">
									<h5>Give us a call</h5>
									<p>
										Give us a ring.Our Experts are standing by{" "}
										<strong>monday to friday</strong> from
										<strong>9am to 5pm GMT+7.</strong>
									</p>
								</div>
								<a href="tel:+62217989671" className="btn btn-link mt-auto">
									(021) 798-9671
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactBox;
