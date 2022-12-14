import React from "react";
import Image from "next/image";

import BannerShape1 from "../../public/img/inner-banner/banner-shape1.png";
import BannerShape2 from "../../public/img/inner-banner/banner-shape2.png";
import BannerShape3 from "../../public/img/inner-banner/banner-shape3.png";
import BannerDot from "../../public/img/shape/dots-shape.png";

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
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <>
      {/* <!-- Inner Banner Area --> */}
      <div class="inner-banner">
        <div class="container">
          <div class="inner-title text-center">
            <h3>Terms & Conditions</h3>
            <ul>
              <li>
                <Link href="index.html">Home</Link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
              </li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div class="inner-banner-shape">
          <div class="shape-one">
            <img src={BannerShape1} alt="Images" />
          </div>

          <div class="shape-two">
            <img src={BannerShape2} alt="Images" />
          </div>

          <div class="shape-three">
            <img src={BannerShape3} alt="Images" />
          </div>

          <div class="inner-banner-dots-2">
            <img src={BannerDot} alt="Images" />
          </div>
        </div>
      </div>
      {/* <!-- Inner Banner Area End --> */}

      {/* <!-- Terms & Conditions Area --> */}
      <div class="terms-conditions-area pt-50 pb-70">
        <div class="container">
          <div class="single-content">
            <h3>Welcome to Zinka Terms & Conditions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              venenatis purus arcu. Sed vitae porttitor lectus. Aenean ac odio
              quis est suscipit vehicula nec eget arcu. Mauris malesuada libero
              eu ex pharetra, ac aliquam justo vestibulum. Fusce vulputate est
              sed orci cursus efficitur. Sed volutpat sit amet mauris eget
              posuere. Donec a mi eu dolor tincidunt pulvinar quis eleifend
              diam. Vestibulum diam diam, ultricies id cursus ac, bibendum ac
              quam.Donec posuere diam eget consequat facilisis. Vestibulum
              turpis mauris, hendrerit ut risus euismod, maximus iaculis nulla.
              Quisque tincidunt augue nunc, non pretium nibh consequat vel.
              Morbi ornare quam neque, nec pharetra magna dapibus quis.
              Curabitur vehicula ultricies faucibus.
            </p>

            <p>
              Integer mattis magna at nibh semper vulputate. Nunc eu gravida
              risus, at lobortis ipsum. Suspendisse tempus metus vitae interdum
              luctus. Pellentesque lectus lorem, laoreet in semper vitae,
              pellentesque sit amet sapien. Morbi ut nibh a massa suscipit
              posuere. Nam venenatis eget justo id pulvinar. Quisque dignissim
              eget turpis nec pulvinar. Vestibulum fermentum lacus sed dignissim
              mattis. Aenean porttitor vitae lacus nec pellentesque. Nulla
              sodales vehicula scelerisque. Vestibulum sed auctor arcu, vitae
              finibus dolor. Nam ultrices consequat odio at gravida.
            </p>
          </div>

          <div class="single-content">
            <h3>Welcome to Product Zinka Privacy</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              venenatis purus arcu. Sed vitae porttitor lectus. Aenean ac odio
              quis est suscipit vehicula nec eget arcu. Mauris malesuada libero
              eu ex pharetra, ac aliquam justo vestibulum. Fusce vulputate est
              sed orci cursus efficitur. Sed volutpat sit amet mauris eget
              posuere. Donec a mi eu dolor tincidunt pulvinar quis eleifend
              diam. Vestibulum diam diam, ultricies id cursus ac, bibendum ac
              quam.Donec posuere diam eget consequat facilisis. Vestibulum
              turpis mauris, hendrerit ut risus euismod, maximus iaculis nulla.
              Quisque tincidunt augue nunc, non pretium nibh consequat vel.
              Morbi ornare quam neque, nec pharetra magna dapibus quis.
              Curabitur vehicula ultricies faucibus.
            </p>
            <p>
              Integer mattis magna at nibh semper vulputate. Nunc eu gravida
              risus, at lobortis ipsum. Suspendisse tempus metus vitae interdum
              luctus. Pellentesque lectus lorem, laoreet in semper vitae,
              pellentesque sit amet sapien. Morbi ut nibh a massa suscipit
              posuere. Nam venenatis eget justo id pulvinar. Quisque dignissim
              eget turpis nec pulvinar. Vestibulum fermentum lacus sed dignissim
              mattis. Aenean porttitor vitae lacus nec pellentesque. Nulla
              sodales vehicula scelerisque. Vestibulum sed auctor arcu, vitae
              finibus dolor. Nam ultrices consequat odio at gravida.
            </p>
          </div>

          <div class="single-content">
            <h3>Welcome to Services Zinka Conditions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              venenatis purus arcu. Sed vitae porttitor lectus. Aenean ac odio
              quis est suscipit vehicula nec eget arcu. Mauris malesuada libero
              eu ex pharetra, ac aliquam justo vestibulum. Fusce vulputate est
              sed orci cursus efficitur. Sed volutpat sit amet mauris eget
              posuere. Donec a mi eu dolor tincidunt pulvinar quis eleifend
              diam. Vestibulum diam diam, ultricies id cursus ac, bibendum ac
              quam.Donec posuere diam eget consequat facilisis. Vestibulum
              turpis mauris, hendrerit ut risus euismod, maximus iaculis nulla.
              Quisque tincidunt augue nunc, non pretium nibh consequat vel.
              Morbi ornare quam neque, nec pharetra magna dapibus quis.
              Curabitur vehicula ultricies faucibus.
            </p>
            <p>
              Integer mattis magna at nibh semper vulputate. Nunc eu gravida
              risus, at lobortis ipsum. Suspendisse tempus metus vitae interdum
              luctus. Pellentesque lectus lorem, laoreet in semper vitae,
              pellentesque sit amet sapien. Morbi ut nibh a massa suscipit
              posuere. Nam venenatis eget justo id pulvinar. Quisque dignissim
              eget turpis nec pulvinar. Vestibulum fermentum lacus sed dignissim
              mattis. Aenean porttitor vitae lacus nec pellentesque. Nulla
              sodales vehicula scelerisque. Vestibulum sed auctor arcu, vitae
              finibus dolor. Nam ultrices consequat odio at gravida.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Terms & Conditions Area End --> */}

      {/* <!-- Brand Logo Area --> */}
      <div class="brand-logo-area  pt-100">
        <div class="container-fluid">
          <div class="container-max">
            <div class="brand-logo-slider owl-carousel owl-theme">
              <div class="brand-logo-item">
                <img src={BrandLogo1} class="brand-logo1" alt="Images" />
                <img src={BrandStyle1} class="brand-logo2" alt="Images" />
              </div>
              <div class="brand-logo-item">
                <img src={BrandLogo2} class="brand-logo1" alt="Images" />
                <img src={BrandStyle2} class="brand-logo2" alt="Images" />
              </div>
              <div class="brand-logo-item">
                <img src={BrandLogo3} class="brand-logo1" alt="Images" />
                <img src={BrandStyle3} class="brand-logo2" alt="Images" />
              </div>
              <div class="brand-logo-item">
                <img src={BrandLogo4} class="brand-logo1" alt="Images" />
                <img src={BrandStyle4} class="brand-logo2" alt="Images" />
              </div>
              <div class="brand-logo-item">
                <img src={BrandLogo5} class="brand-logo1" alt="Images" />
                <img src={BrandStyle5} class="brand-logo2" alt="Images" />
              </div>
              <div class="brand-logo-item">
                <img src={BrandLogo6} class="brand-logo1" alt="Images" />
                <img src={BrandStyle6} class="brand-logo2" alt="Images" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Brand Logo Area End --> */}
    </>
  );
}
