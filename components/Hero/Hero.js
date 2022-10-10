import React from "react";

export default function Hero() {
  return (
    <>
      {/* <!-- Banner Area --> */}
      <div class="banner-area">
        <div class="container-fluid">
          <div class="container-max-2">
            <div class="col-lg-7">
              <div class="banner-content">
                <div class="title">
                  <i class="flaticon-idea"></i>
                  <span>The Generator</span>
                </div>

                <h1>
                  Possible to Link <b>Actual Customer</b>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor avida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis.
                </p>

                <div class="banner-btn">
                  <a href="#" class="get-btn">
                    Get started
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="tel:+123-098-456-098" class="call-btn">
                    <i class="bx bx-plus"></i>
                    +123-098-456-098
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="banner-shape-right">
          <img src="img/home1/home-one-shape.png" alt="Images" />
        </div>
        <div class="banner-img">
          <img src="img/home1/home1.png" alt="Images" />
        </div>
        <div class="banner-shape">
          <div class="shape1">
            <img src="img/home1/home-one-shape3.png" alt="Images" />
          </div>
          <div class="shape2">
            <img src="img/home1/home-one-shape1.png" alt="Images" />
          </div>
          <div class="shape3">
            <img src="img/home1/home-one-shape2.png" alt="Images" />
          </div>
          <div class="shape4">
            <img src="img/home1/home-one-shape4.png" alt="Images" />
          </div>
          <div class="shape5">
            <img src="img/home1/home-one-shape5.png" alt="Images" />
          </div>
        </div>
      </div>
      {/* <!-- Banner Area End --> */}
    </>
  );
}
