import React from "react";
import Image from "next/image";

import BannerShape1 from "../../public/img/inner-banner/banner-shape1.png";
import BannerShape2 from "../../public/img/inner-banner/banner-shape2.png";
import BannerShape3 from "../../public/img/inner-banner/banner-shape3.png";
import DotShape from "../../public/img/shape/dots-shape.png";

import Blog1 from "../../public/img/blog/blog1.png";
import Blog2 from "../../public/img/blog/blog2.png";
import Blog3 from "../../public/img/blog/blog3.png";
import Blog7 from "../../public/img/blog/blog7.png";
import Blog8 from "../../public/img/blog/blog8.png";
import Blog9 from "../../public/img/blog/blog9.png";

import Shape1 from "../../public/img/shape/shape1.png";
import Shape4 from "../../public/img/shape/shape4.png";
import Shape5 from "../../public/img/shape/shape5.png";
import Shape6 from "../../public/img/shape/shape6.png";

import BrandLogo1 from "../../public/img/brand/brand-logo1.png";
import BrandLogo2 from "../../public/img/brand/brand-logo2.png";
import BrandLogo3 from "../../public/img/brand/brand-logo3.png";
import BrandLogo4 from "../../public/img/brand/brand-logo4.png";
import BrandLogo5 from "../../public/img/brand/brand-logo5.png";
import BrandLogo6 from "../../public/img/brand/brand-logo6.png";

import BrandStyle1 from "../../public/img/brand/brand-style1.png";
import BrandStyle2 from "../../public/img/brand/brand-style2.png";
import BrandStyle3 from "../../public/img/brand/brand-style3.png";
import BrandStyle4 from "../../public/img/brand/brand-style4.png";
import BrandStyle5 from "../../public/img/brand/brand-style5.png";
import BrandStyle6 from "../../public/img/brand/brand-style6.png";

export default function BlogMultiple() {
  return (
    <>
      {/* <!-- Inner Banner Area --> */}
      <div class="inner-banner">
        <div class="container">
          <div class="inner-title text-center">
            <h3>Blog</h3>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
              </li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        <div class="inner-banner-shape">
          <div class="shape-one">
            <Image src={BannerShape1} alt="Images" />
          </div>

          <div class="shape-two">
            <Image src={BannerShape2} alt="Images" />
          </div>

          <div class="shape-three">
            <Image src={BannerShape3} alt="Images" />
          </div>

          <div class="inner-banner-dots-2">
            <Image src={DotShape} alt="Images" />
          </div>
        </div>
      </div>
      {/* <!-- Inner Banner Area End --> */}

      {/* <!-- Blog Area --> */}
      <div class="blog-area pt-50 pb-70">
        <div class="container">
          <div class="section-title text-center">
            <span class="sp-before sp-after">Our Blogs</span>
            <h2 class="h2-color2">Latest Valuable Insights</h2>
            <p class="margin-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
              minim
            </p>
          </div>
          <div class="row pt-45">
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

            <div class="col-lg-4 col-md-6">
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

            <div class="col-lg-4 col-md-6">
              <div class="blog-card">
                <a href="blog-details.html">
                  <Image src={Blog7} alt="Images" />
                </a>
                <div class="content">
                  <ul>
                    <li>
                      <i class="bx bx-time-five"></i>
                      14 July 2020
                    </li>
                    <li>
                      <i class="bx bx-purchase-tag-alt"></i>
                      <a href="#">SEO</a>
                    </li>
                  </ul>
                  <h3>
                    <a href="blog-details.html">
                      SEO Best Practice for Web Traffic
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="blog-card">
                <a href="blog-details.html">
                  <Image src={Blog8} alt="Images" />
                </a>
                <div class="content">
                  <ul>
                    <li>
                      <i class="bx bx-time-five"></i>
                      15 August 2020
                    </li>
                    <li>
                      <i class="bx bx-purchase-tag-alt"></i>
                      <a href="#">Marketing</a>
                    </li>
                  </ul>
                  <h3>
                    <a href="blog-details.html">
                      Best Guidelines for a Digital Marketing
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="blog-card">
                <a href="blog-details.html">
                  <Image src={Blog9} alt="Images" />
                </a>
                <div class="content">
                  <ul>
                    <li>
                      <i class="bx bx-time-five"></i>
                      19 April 2020
                    </li>
                    <li>
                      <i class="bx bx-purchase-tag-alt"></i>
                      <a href="#">Web</a>
                    </li>
                  </ul>
                  <h3>
                    <a href="blog-details.html">
                      Web Architecture Best Practices & Guides
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div class="col-lg-12 col-md-12">
              <div class="pagination-area text-center">
                <a href="#" class="prev page-numbers">
                  <i class="bx bx-chevron-left"></i>
                </a>

                <span class="page-numbers current" aria-current="page">
                  1
                </span>
                <a href="#" class="page-numbers">
                  2
                </a>
                <a href="#" class="page-numbers">
                  3
                </a>
                <a href="#" class="page-numbers">
                  4
                </a>

                <a href="#" class="next page-numbers">
                  <i class="bx bx-chevron-right"></i>
                </a>
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
      {/* <!-- Blog Area End --> */}
    </>
  );
}
