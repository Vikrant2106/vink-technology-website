import React from "react";
import Image from "next/image";
import AboutImage from "../../public/img/about/about-img1.png";
import AboutShape1 from "../../public/img/about/about-shape1.png";
import Shape1 from "../../public/img/shape/shape1.png";
import Shape2 from "../../public/img/shape/shape2.png";
import Shape3 from "../../public/img/shape/shape3.png";
import Shape4 from "../../public/img/shape/shape4.png";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div class="about-area pt-100 pb-70">
        <div class="container-fluid">
          <div class="container-max">
            <div class="row">
              <div class="col-lg-6">
                <div class="about-img">
                  {/* <img src={AboutImage} layout="fill" alt="Images" /> */}
                  <img
                    src="/img/about/about-img1.png"
                    layout="fill"
                    alt="Images"
                  />
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
                    We are a global leading Information Technology company
                    providing various Services, Products and Solutions to a wide
                    range of industries.
                  </h3>
                  <p>
                    At Vink Technology, We are continually undergoing a
                    transformation and reorientation in response to the rapidly
                    evolving needs of our clients.Vink has formed relationships
                    with various clients around the world.
                  </p>

                  <div class="about-btn">
                    <Link href="/" class="default-btn">
                      <a class="default-btn">
                        Learn more
                        <i class="bx bx-plus"></i>
                      </a>
                    </Link>

                    {/* <Link
                      href="https://www.youtube.com/watch?v=07d2dXHYb94"
                      class="play-btn popup-btn"
                    >
                      <a class="play-btn popup-btn">
                        <i class="flaticon-play-button"></i>
                        <span>
                          {" "}
                          Watch 1min <br />
                          Play demo
                        </span>
                      </a>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="about-shape">
          <div class="shape-1">
            <img src={AboutShape1} layout="fill" alt="Images" />
          </div>
          <div class="shape-2">
            <img src={Shape1} layout="fill" alt="Images" />
          </div>
          <div class="shape-3">
            <img src={Shape2} layout="fill" alt="Images" />
          </div>
          <div class="shape-4">
            <img src={Shape3} layout="fill" alt="Images" />
          </div>
          <div class="shape-5">
            <img src={Shape4} layout="fill" alt="Images" />
          </div>
        </div>
      </div>
    </>
  );
}
