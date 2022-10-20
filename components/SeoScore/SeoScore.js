import React from "react";
import Image from "next/image";

import SeoRank from "../../public/img/seo-rank.png";

export default function SeoScore() {
  return (
    <>
      {" "}
      <div class="seo-area">
        <div class="container-fluid">
          <div class="seo-width">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <div class="seo-form">
                  <h2>What is My SEO Score?</h2>
                  <div class="seo-form-area">
                    <form class="seo-form-option">
                      <div class="row">
                        <div class="col-lg-4 col-sm-6 col-md-4">
                          <div class="form-group">
                            <i class="flaticon-place"></i>
                            <input
                              class="form-control form-border"
                              type="text"
                              placeholder="Your Website URL"
                            />
                          </div>
                        </div>

                        <div class="col-lg-4 col-sm-6 col-md-4">
                          <div class="form-group">
                            <i class="flaticon-vision"></i>
                            <input
                              class="form-control"
                              type="email"
                              placeholder="Enter Your Email"
                            />
                          </div>
                        </div>

                        <div class="col-lg-4 col-sm-6 col-md-4 offset-sm-3 offset-md-0 offset-lg-0">
                          <button type="submit" class="default-btn">
                            Get started
                            <i class="bx bx-plus"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="seo-img">
                  <Image src={SeoRank} alt="Images" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
