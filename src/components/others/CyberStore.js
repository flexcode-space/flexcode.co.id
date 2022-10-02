import React from "react";
import { Link } from "react-router-dom";

const CyberStore = () => {
	return (
		<section className="cyber-store-product">
			<div
				className="store-bg-header"
				style={{
					background: "url('/assets/img/shop_bg.png')no-repeat center center",
				}}
			>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-8 col-lg-6">
							<div className="section-heading text-center mb-5">
								<h5 className="h6 text-white">Online Store</h5>
								<h2 className="text-white">
									Our popular Cyber security products
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row product-row">
					<div className="col-lg-3 col-md-6 col-sm-12">
						<div className="single-product position-relative mb-30">
							<div className="product-img">
								<img
									src="/assets/img/store/pro-1.jpg"
									alt="product "
									className="img-fluid"
								/>
							</div>
							<div className="product-cart-wishlist-icon">
								<div className="cart">
									<i className="far fa-cart-shopping"></i>
								</div>
								<div className="heart">
									<i className="far fa-heart"></i>
								</div>
							</div>
							<div className="bg-white text-center shadow-sm py-4 product-info">
								<h6>
									<Link to="/single-product" className="text-decoration-none">
										Combination Padlock
									</Link>
								</h6>
								<span className="fw-bold">120.00$ </span>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12">
						<div className="single-product position-relative mb-30">
							<div className="product-img">
								<img
									src="/assets/img/store/pro-2.jpg"
									alt="product "
									className="img-fluid"
								/>
							</div>
							<span className="bg-primary text-white px-2 rounded sale-badge">
								Sale!
							</span>
							<div className="product-cart-wishlist-icon">
								<div className="cart">
									<i className="far fa-cart-shopping"></i>
								</div>
								<div className="heart">
									<i className="far fa-heart"></i>
								</div>
							</div>
							<div className="bg-white text-center shadow-sm py-4 product-info">
								<h6>
									<Link to="/single-product" className="text-decoration-none">
										Biometrics-Fingerprint
									</Link>
								</h6>
								<span className="fw-bold">56.00$ </span>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12">
						<div className="single-product position-relative mb-30">
							<div className="product-img">
								<img
									src="/assets/img/store/pro-3.jpg"
									alt="product "
									className="img-fluid"
								/>
							</div>

							<div className="product-cart-wishlist-icon">
								<div className="cart">
									<i className="far fa-cart-shopping"></i>
								</div>
								<div className="heart">
									<i className="far fa-heart"></i>
								</div>
							</div>
							<div className="bg-white text-center shadow-sm py-4 product-info">
								<h6>
									<Link to="/single-product" className="text-decoration-none">
										WeJupit Fingerprint Key
									</Link>
								</h6>
								<span className="fw-bold">175.00$ </span>
								<span className="text-decoration-line-through"> 150.00$</span>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12">
						<div className="single-product position-relative mb-30">
							<div className="product-img">
								<img
									src="/assets/img/store/pro-4.jpg"
									alt="product "
									className="img-fluid"
								/>
							</div>
							<div className="product-cart-wishlist-icon">
								<div className="cart">
									<i className="far fa-cart-shopping"></i>
								</div>
								<div className="heart">
									<i className="far fa-heart"></i>
								</div>
							</div>
							<div className="bg-white text-center shadow-sm py-4 product-info">
								<h6>
									<Link to="/single-product" className="text-decoration-none">
										Smart Fingerprint Lock
									</Link>
								</h6>
								<span className="fw-bold">175.00$ </span>
								<span className="text-decoration-line-through"> 150.00$</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CyberStore;
