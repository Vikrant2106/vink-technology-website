import React from "react";

import Image from "next/image";

import ProgressIcon1 from "../../public/img/progress-icon/progress-icon1.png";
import ProgressIcon2 from "../../public/img/progress-icon/progress-icon2.png";
import ProgressIcon3 from "../../public/img/progress-icon/progress-icon3.png";

export default function Progress() {
  return (
    <>
      <div class="progress-area pt-100 pb-70">
        <div class="container">
          <div class="section-title text-center">
            <span class="sp-after">Real Progress</span>
            <h2 class="h2-color">
              Super Great Things From <b>Your Desire Wishes</b>
            </h2>
          </div>
          <div class="row pt-45">
            <div class="col-lg-4 col-sm-6">
              <div class="progress-card pr-bg-color-1">
                <img src={ProgressIcon1} alt="Images" />
                <h3>28,998</h3>
                <p>RANKING KEYWORDS</p>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6">
              <div class="progress-card pr-bg-color-2">
                <img src={ProgressIcon2} alt="Images" />
                <h3>600%</h3>
                <p>ANNUAL ORGANIC TRAFFIC</p>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div class="progress-card pr-bg-color-3">
                <img src={ProgressIcon3} alt="Images" />
                <h3>50,234</h3>
                <p>RANKING KEYWORDS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
