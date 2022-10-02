import React from "react";
import SectionTitle from "../common/SectionTitle";
import ContactsForm from "./ContactsForm";

const ContactFormThree = () => {
	return (
		<>
			<section className="contact-us ptb-80 position-relative overflow-hidden">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-xl-5 col-lg-5 col-md-12">
							<SectionTitle
								subtitle="Get in Touch"
								title="Let's work together!"
								description="Don't hesitate to contact us, we are very happy to help you"
							/>
							<div className="row justify-content-between pb-5">
								<div
									className="col-sm-6 mb-4 mb-md-0 mb-lg-0"
									data-aos="fade-up"
									data-aos-delay="50"
								>
									<div className="icon-box d-inline-block rounded-circle bg-primary-soft">
										<i className="fas fa-phone fa-2x text-primary"></i>
									</div>
									<div className="contact-info">
										<h5>Call Us</h5>
										<p>
											Questions about our services or others? Call for support
										</p>
										<a
											href="tel:+62217989671"
											className="read-more-link text-decoration-none"
										>
											<i className="far fa-phone me-2"></i> (021) 798-9671
										</a>
									</div>
								</div>
								<div
									className="col-sm-6"
									data-aos="fade-up"
									data-aos-delay="100"
								>
									<div className="icon-box d-inline-block rounded-circle bg-danger-soft">
										<i className="fas fa-comment-alt-lines fa-2x text-danger"></i>
									</div>
									<div className="contact-info">
										<h5>Chat Us</h5>
										<p>
											Our support will help you from
											<strong> 9am to 5pm EST.</strong>
										</p>
										<a
											href="https://wa.me/628888641170"
											className="read-more-link text-decoration-none"
											target="_blank"
											rel="noreferrer"
										>
											<i className="fab fa-whatsapp me-2"></i> Chat Now
										</a>
									</div>
								</div>
							</div>
						</div>
						<ContactsForm />
					</div>
				</div>
				<div
					className="bg-dark position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z--1 pt-5"
					style={{
						background:
							" url('/assets/img/shape/dot-dot-wave-shape.svg') no-repeat center",
					}}
				>
					<div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div>
					<div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5"></div>
				</div>
			</section>
		</>
	);
};
export default ContactFormThree;
