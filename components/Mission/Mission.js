import React from "react";
import Image from "next/image";

import Shape13 from "../../public/img/shape/shape13.png";
import Shape9 from "../../public/img/shape/shape9.png";
import Shape11 from "../../public/img/shape/shape11.png";
import Shape12 from "../../public/img/shape/shape12.png";
import MissionImg from "../../public/img/mission-img.png";

export default function Mission() {
  return (
    <>
      {/* <!-- Mission Area --> */}
      <div class="mission-area pt-100">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="mission-content">
                <div class="section-title">
                  <span class="sp-before sp-after">Mission</span>
                  <h2 class="h2-color2">
                    We serve all IT Solutions at your door steps.
                  </h2>
                </div>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna tetur
                  adipisicing saliqua.
                </p> */}
                <div class="row">
                  <div class="col-lg-4 col-sm-6 pr-0">
                    <div class="mission-list">
                      <i class="bx bx-check"></i>
                      <span>01</span>
                      <p>Retail Solutions</p>
                    </div>
                  </div>

                  <div class="col-lg-4 col-sm-6 pr-0">
                    <div class="mission-list">
                      <i class="bx bx-check"></i>
                      <span>02</span>
                      <p>Expert Prepective</p>
                    </div>
                  </div>

                  <div class="col-lg-4 col-sm-6 pr-0">
                    <div class="mission-list">
                      <i class="bx bx-check"></i>
                      <span>03</span>
                      <p>User Prespective</p>
                    </div>
                  </div>

                  <div class="col-lg-4 col-sm-6 pr-0">
                    <div class="mission-list">
                      <i class="bx bx-check"></i>
                      <span>04</span>
                      <p>Global Experience</p>
                    </div>
                  </div>

                  <div class="col-lg-4 col-sm-6 pr-0">
                    <div class="mission-list">
                      <i class="bx bx-check"></i>
                      <span>05</span>
                      <p>Value for Results</p>
                    </div>
                  </div>

                  <div class="col-lg-4 col-sm-6 pr-0">
                    <div class="mission-list">
                      <i class="bx bx-check"></i>
                      <span>06</span>
                      <p>Business Vision</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="mission-img">
                <Image src={MissionImg} alt="Images" />
              </div>
            </div>
          </div>
        </div>
        <div class="mission-shape">
          <div class="shape1">
            <Image src={Shape13} alt="Images" />
          </div>
          <div class="shape2">
            <Image src={Shape11} alt="Images" />
          </div>
          <div class="shape3">
            <Image src={Shape12} alt="Images" />
          </div>
          <div class="shape4">
            <Image src={Shape9} alt="Images" />
          </div>
        </div>
      </div>
      {/* <!-- Mission Area End --> */}
    </>
  );
}
