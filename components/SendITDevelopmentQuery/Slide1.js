import React from "react";

export default function Slide1({ slug }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div class="contact-img">
              <img src="/img/contact-img.png" alt="Images" />
            </div>
          </div>
          <div
            className="col-md-6"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div class="row">
              <div class="col-lg-12 col-sm-12">slpe</div>
            </div>
            <div class="col-lg-12 col-sm-12">
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="form-control"
                  required=""
                  data-error="Please enter your name"
                  placeholder="Your Name*"
                />
                <div class="help-block with-errors"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
