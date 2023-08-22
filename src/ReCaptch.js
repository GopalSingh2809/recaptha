import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const ReCaptch = () => {
  const [verified, setVerified] = useState(false);
  function onChange(value) {
    setVerified(true);
  }
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100 mt-10">
      <h1 className="mb-3" style={{ color: "blue" }}>
        ReCaptha
      </h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange}
        />
        <center>
          <button
            type="submit"
            className="btn btn-primary mt-3"
            disabled={!verified}
          >
            Submit
          </button>
        </center>
      </form>
    </div>
  );
};

export default ReCaptch;
