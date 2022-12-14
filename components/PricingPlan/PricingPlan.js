import React from "react";
import Image from "next/image";

import Shape4 from "../../public/img/shape/shape4.png";
import Shape5 from "../../public/img/shape/shape5.png";
import Shape6 from "../../public/img/shape/shape6.png";
import Shape7 from "../../public/img/shape/shape7.png";
import Shape8 from "../../public/img/shape/shape8.png";
import Link from "next/link";

export default function PricingPlan() {
  return (
    <>
      <div class="pricing-area ptb-100">
        <div class="container-fluid">
          <div class="section-title text-center">
            <span class="sp-after">Pricing Plan</span>
            <h2 class="h2-color">
              Price & Plans <b>Packages</b>
            </h2>
          </div>

          <div class="price-width">
            <div class="row">
              <div class="col-lg-4 col-sm-6">
                <div class="pricing-card">
                  <div class="pricing-card-into color-bg1">
                    <i class="flaticon-banner pricing-icon color-1"></i>
                    <h3 class="color-1">STANDARD</h3>
                    <div class="price-rate">
                      <h2 class="color-1">$ 69.99</h2>
                      <span class="color-1">Monthly Package</span>
                    </div>
                    <ul>
                      <li>
                        <i class="bx bx-check"></i> Social Media Marketing
                      </li>
                      <li>
                        <i class="bx bx-check"></i> 2.100 Keywords
                      </li>
                      <li>
                        <i class="bx bx-check"></i> One Way Link Building
                      </li>
                      <li>
                        <del>5 Free Optimization</del>
                      </li>
                      <li>
                        <del>3 Press Releases</del>
                      </li>
                    </ul>
                    <Link href="/asdfs" class="purchase-btn button-bg1">
                      PURCHASE NOW
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-sm-6">
                <div class="pricing-card">
                  <div class="pricing-card-into color-bg2">
                    <i class="flaticon-mortgage-loan pricing-icon color-2"></i>
                    <h3 class="color-2">ECONOMY</h3>
                    <div class="price-rate">
                      <h2 class="color-2">$ 79.99</h2>
                      <span class="color-2">Monthly Package</span>
                    </div>
                    <ul>
                      <li>
                        <i class="bx bx-check"></i> Social Media Marketing
                      </li>
                      <li>
                        <i class="bx bx-check"></i> 2.100 Keywords
                      </li>
                      <li>
                        <i class="bx bx-check"></i> One Way Link Building
                      </li>
                      <li>
                        <i class="bx bx-check"></i> 5 Free Optimization
                      </li>
                      <li>
                        <del>3 Press Releases</del>
                      </li>
                    </ul>
                    <Link href="/aasd" class="purchase-btn button-bg2">
                      PURCHASE NOW
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                <div class="pricing-card">
                  <div class="pricing-card-into color-bg3">
                    <i class="flaticon-processing pricing-icon color-3"></i>
                    <h3 class="color-3">EXECUTIVE</h3>
                    <div class="price-rate">
                      <h2 class="color-3">$ 89.99</h2>
                      <span class="color-3">Monthly Package</span>
                    </div>
                    <ul>
                      <li>
                        <i class="bx bx-check"></i> Social Media Marketing
                      </li>
                      <li>
                        <i class="bx bx-check"></i> 2.100 Keywords
                      </li>
                      <li>
                        <i class="bx bx-check"></i> One Way Link Building
                      </li>
                      <li>
                        <i class="bx bx-check"></i> 5 Free Optimization
                      </li>
                      <li>
                        <i class="bx bx-check"></i> 3 Press Releases
                      </li>
                    </ul>
                    <Link href="/a" class="purchase-btn button-bg3">
                      PURCHASE NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pricing-shape">
          <div class="shape1">
            <img src={Shape7} alt="Images" />
          </div>
          <div class="shape2">
            <img src={Shape4} alt="Images" />
          </div>
          <div class="shape3">
            <img src={Shape5} alt="Images" />
          </div>
          <div class="shape4">
            <img src={Shape6} alt="Images" />
          </div>
          <div class="shape5">
            <img src={Shape4} alt="Images" />
          </div>
          <div class="shape6">
            <img src={Shape8} alt="Images" />
          </div>
        </div>
      </div>
    </>
  );
}
