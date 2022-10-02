import React from "react";

const DetailsTab = () => {
  return (
    <section className="review-tabs">
      <div className="container">
        <div className="border-top border-bottom ptb-120">
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <div className="cyber-product-tabs">
                <ul
                  className="nav nav-pills mb-3 d-flex justify-content-center"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item pe-4" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Description
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Reviews(0)
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="cyber-product-description">
                  <h5 className="mb-3">Description</h5>
                  <p>
                    Corrupti qui reprehenderit et quaerat dignissimos.
                    Voluptatem et cumque tempore quia ex adipisci. Aut incidunt
                    aliquid quo molestias sit nam laborum. Pariatur facere ut
                    perferendis numquam fugit molestiae voluptatibus.
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humor, or randomized words which don’t
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn’t
                    anything embarrassing hidden in the middle of the text. All
                    the Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humor, or non-characteristic words,
                    etc.
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="cyber-product-review-form">
                  <h5 className="mb-4">Reviews</h5>
                  <p>There are no reviews yet.</p>
                  <h4 className="fw-medium mb-0">
                    Be the first to review "Combination Padlock"
                  </h4>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <div className="row">
                    <div className="cyber-product-review-form-wrapper">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Name*
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email*
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="email"
                          />
                        </div>
                        <div className="mb-3">
                          <ul className="list-unstyled rating-list list-inline mb-0">
                            <li className="list-inline-item pe-2">
                              Your Ratings:
                            </li>
                            <li className="list-inline-item">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                          </ul>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="message" className="form-label">
                            Write Something *
                          </label>
                          <textarea
                            className="form-control py-5 bg-light border-0"
                            style={{ height: 20 + "%" }}
                            id="message"
                          ></textarea>
                        </div>
                        <div className="form-check nb-3">
                          <input
                            className="form-check-input border-2"
                            type="checkbox"
                            value=""
                            id="cyber-checkbox"
                          />
                          <label className="" htmlFor="cyber-checkbox">
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                        </div>
                        <div className="mt-4">
                          <button className="btn btn-primary" type="submit">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsTab;
