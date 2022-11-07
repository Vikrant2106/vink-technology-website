import React from "react";
import Image from "next/image";
import Logo1 from "../../../public/img/logo/logo1.png";
import Logo2 from "../../../public/img/logo/logo1.png";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer class="footer-area footer-bg pt-100 pb-70">
        <div class="container">
          <div class="footer-top">
            <div class="row align-items-center">
              <div class="col-lg- col-sm-6">
                <div class="footer-img">
                  <Image src={Logo1} class="footer-img1" alt="Images" />
                </div>
              </div>

              <div class="col-lg-6 col-sm-6">
                <div class="footer-social-icon">
                  {/* <ul class="social-link">
                    <li>
                      <Link
                        href="https://www.facebook.com/profile.php?id=100086482363397"
                        target="_blank"
                      >
                        <i class="bx bxl-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/twitter" target="_blank">
                        <i class="bx bxl-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/instagram" target="_blank">
                        <i class="bx bxl-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" target="_blank">
                        <i class="bx bxl-pinterest-alt"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/youtube" target="_blank">
                        <i class="bx bxl-youtube"></i>
                      </Link>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>

          <div class="footer-midal pt-45 pb-70">
            <div class="row">
              <div class="col-lg-3 col-sm-12">
                <div class="footer-widget">
                  <h3>Vink Technology Pvt Ltd.</h3>
                  <ul class="footer-list">
                    <li>
                      <a>
                        WZ-1370, Third Floor
                        <br /> Nangal Raya
                        <br /> New Delhi-110046
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-2 col-sm-12">
                <div class="footer-widget">
                  <h3>Useful Links</h3>
                  <ul class="footer-list">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="/Services">Services</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-3 col-sm-12">
                <div class="footer-widget">
                  <h3>Useful Links</h3>
                  <ul class="footer-list">
                    <li>
                      <a href="/blog">Blog</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                    <li>
                      <a href="/contact">Carrier</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-4 col-sm-12">
                <div class="footer-widget">
                  <h3>Newsletter</h3>
                  <p>To get the latest news and latest up- dates from us</p>
                  <div class="newsletter-area">
                    <form
                      class="newsletter-form"
                      data-toggle="validator"
                      method="POST"
                    >
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Your Email*"
                        name="EMAIL"
                        required
                        autoComplete="off"
                      />
                      <button class="default-btn" type="submit">
                        Subscribe
                      </button>
                      <div id="validator-newsletter" class="form-result"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="copy-right-area">
            <div class="copy-right-text text-center">
              <p>
                Copyright @2022 All Rights Reserved by{"  "}
                <Link
                  rel="noreferrer"
                  href="https://www.vinktechnology.com/"
                  target="_blank"
                >
                  Vink Technology Pvt ltd.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
