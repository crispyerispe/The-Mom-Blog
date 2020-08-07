import React, { Fragment } from "react";

const Contact = () => {
  return (
    <Fragment>
      <div class="container">
        <div class="contact-section">
          <h2 class="ct-section-head">CONTACT US</h2>
          <div class="row contact-fields">
            <div class="col-md-8 left-form">
              <form method="post" action="https://formspree.io/mgennynj">
                <div class="form-group">
                  <label class="sr-only" for="fname">
                    First Name *
                  </label>
                  <input
                    class="required form-control"
                    id="fname"
                    name="name"
                    placeholder="First Name*"
                    type="text"
                    required
                  />
                </div>
                <div class="form-group">
                  <label class="sr-only" for="contactEmail">
                    Email *
                  </label>
                  <input
                    class="required form-control h5-email"
                    id="contactEmail"
                    name="_replyto"
                    placeholder="Email*"
                    type="text"
                    required
                  />
                </div>
                <div class="form-group">
                  <label class="sr-only" for="contactPhone">
                    Phone *
                  </label>
                  <input
                    class="required form-control h5-phone"
                    id="contactPhone"
                    name="contactPhone"
                    placeholder="Phone*"
                    type="text"
                    required
                  />
                </div>
                <div class="form-group">
                  <label class="sr-only" for="comment">
                    Type your message here
                  </label>
                  <textarea
                    class="required form-control"
                    id="comment"
                    name="comment"
                    placeholder="Your Message Here*"
                    rows="6"
                    required
                  ></textarea>
                </div>
                <button class="btn btn-accent" type="submit">
                  Submit
                </button>
              </form>
            </div>
            <div class="col-md-4 contact-info">
              <div class="phone">
                <h2>Call</h2>
                <a href="084 860 4537">084 860 4537</a>
              </div>
              <div class="email">
                <h2>Email</h2>
                <a href="chelseaerispe3@gmail.com">chelseaerispe3@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
