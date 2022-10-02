import React from "react";

const Product = () => {
	return (
		<section className="ptb-120 single-product-page">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="product-bread-crumb mb-5">
							<ul className="list-unstyled">
								<li className="list-inline-item m-0">Home/</li>
								<li className="list-inline-item m-0">Shop/</li>
								<li className="list-inline-item m-0">Cyber Security/</li>
								<li className="list-inline-item">Biometrics-Fingerprint</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-md-6">
						<div className="cyber-product-image pe-lg-4 mb-4 mb-lg-0">
							<img
								src="/assets/img/product-b-1.jpg"
								alt="locker"
								className="img-fluid"
							/>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<h3>Combination Padlock</h3>
						<h4 className="text-primary fw-medium">120.00$</h4>
						<p className="py-2">
							Corrupti qui reprehenderit et quaerat dignissimos. Voluptatem et
							cumque tempore quia ex adipisci. Aut incidunt aliquid quo
							molestias sit nam laborum. Pariatur facere ut perferendis numquam
							fugit molestiae voluptatibus.
						</p>
						<div className="d-flex">
							<div className="cp-quantity border-2 border px-2 py-1 rounded d-flex align-items-center justify-content-between me-3">
								<button className="border-0 bg-transparent fw-bold pe-4">
									-
								</button>
								<span className="fw-bold">1</span>
								<button className="border-0 bg-transparent fw-bold ps-4">
									+
								</button>
							</div>
							<div>
								<button className="btn btn-primary">Add to cart</button>
							</div>
						</div>
						<div className="cp-wishlist-btn py-3 border-bottom">
							<button className="bg-transparent border-0">
								<i className="far fa-heart"></i> Add to wishlist
							</button>
						</div>
						<ul className="list-unstyled mt-4">
							<li>SKU: 29045-SB-89</li>
							<li>Category: Cyber Security</li>
							<li>Tags: Smart Watches, Watch</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Product;
