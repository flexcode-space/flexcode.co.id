import React from "react";

const RelatedProduct = () => {
	return (
		<section className="cyber-related-product pt-100">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-4 mb-5">
						<div className="text-center">
							<h2>Related Product</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="single-related-product mb-30 mb-lg-0">
							<div className="cyber-related-product-img position-relative">
								<img
									src="/assets/img/store/Bracelate.jpg"
									alt="product "
									className="img-fluid rounded-2"
								/>
								<div className="related-product-cart-wishlist-icon">
									<div className="cart">
										<i className="far fa-cart-shopping"></i>
									</div>
									<div className="heart">
										<i className="far fa-heart"></i>
									</div>
								</div>
							</div>
							<div className="text-center py-3">
								<h5 className="h6 mb-0">
									<a
										href="product-single.html"
										className="text-decoration-none text-dark"
									>
										Smart Bracelate
									</a>
								</h5>
								<span className="fw-medium">150.00$</span>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="single-related-product mb-30 mb-lg-0">
							<div className="cyber-related-product-img position-relative">
								<img
									src="/assets/img/store/smart_watch_red.jpg"
									alt="product "
									className="img-fluid rounded-2"
								/>
								<div className="related-product-cart-wishlist-icon">
									<div className="cart">
										<i className="far fa-cart-shopping"></i>
									</div>
									<div className="heart">
										<i className="far fa-heart"></i>
									</div>
								</div>
							</div>
							<div className="text-center py-3">
								<h5 className="h6 mb-0">
									<a
										href="product-single.html"
										className="text-decoration-none text-dark"
									>
										Amazefit Bip Watch
									</a>
								</h5>
								<span className="fw-medium">150.00$</span>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="single-related-product mb-30 mb-lg-0">
							<div className="cyber-related-product-img position-relative">
								<img
									src="/assets/img/store/smar_watch_maroon.jpg"
									alt="product "
									className="img-fluid rounded-2"
								/>
								<div className="related-product-cart-wishlist-icon">
									<div className="cart">
										<i className="far fa-cart-shopping"></i>
									</div>
									<div className="heart">
										<i className="far fa-heart"></i>
									</div>
								</div>
							</div>
							<div className="text-center py-3">
								<h5 className="h6 mb-0">
									<a
										href="product-single.html"
										className="text-decoration-none text-dark"
									>
										Amazefit Smart Watch
									</a>
								</h5>
								<span className="fw-medium">150.00$</span>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="single-related-product mb-30 mb-lg-0">
							<div className="cyber-related-product-img position-relative">
								<img
									src="/assets/img/store/password.jpg"
									alt="product "
									className="img-fluid rounded-2"
								/>
								<div className="related-product-cart-wishlist-icon">
									<div className="cart">
										<i className="far fa-cart-shopping"></i>
									</div>
									<div className="heart">
										<i className="far fa-heart"></i>
									</div>
								</div>
							</div>
							<div className="text-center py-3">
								<h5 className="h6 mb-0">
									<a
										href="product-single.html"
										className="text-decoration-none text-dark"
									>
										Biometrics-Fingerprint
									</a>
								</h5>
								<span className="fw-medium">56.00$</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RelatedProduct;
