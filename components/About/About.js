import React from "react";

export default function About() {
  return (
    <>
      <div class="about-area pt-100 pb-70">
        <div class="container-fluid">
          <div class="container-max">
            <div class="row">
              <div class="col-lg-6">
                <div class="about-img">
                  <img src="img/about/about-img1.png" alt="Images" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="about-content">
                  <div class="section-title">
                    <span class="sp-after">About us</span>
                    <h2 class="h2-color">
                      Grow Your Business <b>With Our Agency</b>
                    </h2>
                  </div>
                  <h3>
                    We have 30 yearsOur strategy includes consistently evolving,
                    to ensure we’re producing exceptional SEO for business.
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas vitae tempor nisl. Etiam magna augue, tempus eget
                    suscipit et, maximus hendrerit nunc. Nunc elementum non
                    ipsum vitae molestie. Donec vestibulum lobortis congue.
                    Mauris sed tincidunt leo Suspendisse accumsan .
                  </p>

                  <div class="about-btn">
                    <a href="#" class="default-btn">
                      Learn more
                      <i class="bx bx-plus"></i>
                    </a>

                    <a
                      href="https://www.youtube.com/watch?v=07d2dXHYb94"
                      class="play-btn popup-btn"
                    >
                      <i class="flaticon-play-button"></i>
                      <span>
                        {" "}
                        Watch 1min <br />
                        Play demo
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="about-shape">
          <div class="shape-1">
            <img src="img/about/about-shape1.png" alt="Images" />
          </div>
          <div class="shape-2">
            <img src="img/shape/shape1.png" alt="Images" />
          </div>
          <div class="shape-3">
            <img src="img/shape/shape2.png" alt="Images" />
          </div>
          <div class="shape-4">
            <img src="img/shape/shape3.png" alt="Images" />
          </div>
          <div class="shape-5">
            <img src="img/shape/shape4.png" alt="Images" />
          </div>
        </div>
      </div>
    </>
  );
}
