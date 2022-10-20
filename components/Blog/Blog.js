import React from "react";
import Image from "next/image";
import Blog1 from "../../public/img/blog/blog1.png";
import Blog2 from "../../public/img/blog/blog2.png";
import Blog3 from "../../public/img/blog/blog3.png";

import Shape1 from "../../public/img/shape/shape1.png";
import Shape5 from "../../public/img/shape/shape5.png";
import Shape4 from "../../public/img/shape/shape4.png";
import Shape6 from "../../public/img/shape/shape6.png";

export default function Blog() {
  return (
    <>
      <div class="blog-area blog-bg pt-100 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="blog-title">
                <div class="section-title">
                  <span class="sp-after">Our Blogs</span>
                  <h2 class="h2-color">
                    Latest Valuable <b>Insights</b>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua enim ad minim
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="blog-btn">
                <a href="blog.html" class="default-btn">
                  See all news
                  <i class="bx bx-plus"></i>
                </a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="blog-card">
                <a href="blog-details.html">
                  <Image src={Blog1} alt="Images" />
                </a>
                <div class="content">
                  <ul>
                    <li>
                      <i class="bx bx-time-five"></i>
                      09 April 2020
                    </li>
                    <li>
                      <i class="bx bx-purchase-tag-alt"></i>
                      <a href="#">Marketing</a>
                    </li>
                  </ul>
                  <h3>
                    <a href="blog-details.html">
                      The Home of Technology is in Front of You
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="blog-card">
                <a href="blog-details.html">
                  <Image src={Blog2} alt="Images" />
                </a>
                <div class="content">
                  <ul>
                    <li>
                      <i class="bx bx-time-five"></i>
                      10 July 2020
                    </li>
                    <li>
                      <i class="bx bx-purchase-tag-alt"></i>
                      <a href="#">SEO</a>
                    </li>
                  </ul>
                  <h3>
                    <a href="blog-details.html">
                      SEO Best Practices Mobile Friendliness
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div class="blog-card">
                <a href="blog-details.html">
                  <Image src={Blog3} alt="Images" />
                </a>
                <div class="content">
                  <ul>
                    <li>
                      <i class="bx bx-time-five"></i>
                      19 June 2020
                    </li>
                    <li>
                      <i class="bx bx-purchase-tag-alt"></i>
                      <a href="#">SEO & Marketing</a>
                    </li>
                  </ul>
                  <h3>
                    <a href="blog-details.html">
                      15 SEO Practices Website Architecture
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="blog-shape">
          <div class="shape1">
            <Image src={Shape1} alt="Images" />
          </div>
          <div class="shape2">
            <Image src={Shape5} alt="Images" />
          </div>
          <div class="shape3">
            <Image src={Shape4} alt="Images" />
          </div>
          <div class="shape4">
            <Image src={Shape6} alt="Images" />
          </div>
        </div>
      </div>
    </>
  );
}
