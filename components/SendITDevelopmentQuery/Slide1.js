import React from "react";

import Image from "next/image";

import ContactImg from "../../public/img/contact-img.png";

export default function Slide1({ slug }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div class="contact-img">
              <img src={ContactImg} alt="Images" />
            </div>
          </div>

          <div className="col-md-6">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
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
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
