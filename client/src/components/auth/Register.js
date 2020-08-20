import React, { useState, useContext, useEffect } from "react";
import Logo from "../../images/logo.png";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className="container">
      <div className="contact-section">
        <h2 className="ct-section-head">SIGN UP</h2>
        <div className="row contact-fields">
          <div className="col-md-8 left-form">
            <img src={Logo} alt="..." />
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label className="sr-only" htmlFor="name">
                  Name *
                </label>
                <input
                  className="required form-control"
                  id="name"
                  name="name"
                  placeholder="Name*"
                  type="text"
                  value={name}
                  onChange={onChange}
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
                  placeholder="Email*"
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor="password">
                  Password *
                </label>
                <input
                  className="required form-control h5-phone"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password*"
                  value={password}
                  onChange={onChange}
                  required
                  minLength="6"
                />
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor="password2">
                  Confirm Password *
                </label>
                <input
                  className="required form-control"
                  id="password2"
                  type="password"
                  name="password2"
                  placeholder="Confirm Password*"
                  value={password2}
                  onChange={onChange}
                  required
                  minLength="6"
                />
              </div>
              <button className="btn btn-accent" value="Register" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
