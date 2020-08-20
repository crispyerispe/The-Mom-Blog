import React, { Fragment } from "react";

const Contact = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="contact-section">
          <h2 className="ct-section-head">CONTACT US</h2>
          <div className="row contact-fields">
            <div className="col-md-8 left-form">
              <form method="post" action="https://formspree.io/mgennynj">
                <div className="form-group">
                  <label className="sr-only" htmlFor="fname">
                    First Name *
                  </label>
                  <input
                    className="required form-control"
                    id="fname"
                    name="name"
                    placeholder="First Name*"
                    type="text"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="email">
                    Email *
                  </label>
                  <input
                    className="required form-control h5-email"
                    id="email"
                    name="_replyto"
                    placeholder="Email*"
                    type="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="contactPhone">
                    Phone *
                  </label>
                  <input
                    className="required form-control h5-phone"
                    id="contactPhone"
                    name="contactPhone"
                    placeholder="Phone*"
                    type="text"
                    required
                    minLength="10"
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="comment">
                    Type your message here
                  </label>
                  <textarea
                    className="required form-control"
                    id="comment"
                    name="comment"
                    placeholder="Your Message Here*"
                    rows="6"
                    required
                  ></textarea>
                </div>
                <button className="btn btn-accent" type="submit">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-md-4 contact-info">
              <div className="phone">
                <h2>Call</h2>
                <a href="tel:084 860 4537">084 860 4537</a>
              </div>
              <div className="email">
                <h2>Email</h2>
                <a href="mailto:chelseaerispe3@gmail.com">
                  chelseaerispe3@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
