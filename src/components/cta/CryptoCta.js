import React from "react";
import { Link } from "react-router-dom";

const CryptoCta = () => {
  return (
    <section className="crypto-cta ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center">
              <h2 className="text-white mb-4">Start Trading on Quiety</h2>
              <p className="text-muted mb-30">
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small.
              </p>
              <Link to="/about-us" className="btn rounded-pill btn-primary">
                Read Reviews <i className="far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoCta;
