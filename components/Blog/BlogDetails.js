import React from "react";

import Image from "next/image";

import BannerShape1 from "../../public/img/inner-banner/banner-shape1.png";
import BannerShape2 from "../../public/img/inner-banner/banner-shape2.png";
import BannerShape3 from "../../public/img/inner-banner/banner-shape3.png";
import DotShape from "../../public/img/shape/dots-shape.png";

import BlogDetailsImg from "../../public/img/blog/blog-details.jpg";
import BlogDetailsImg2 from "../../public/img/blog/blog-details2.jpg";
import BlogDetailsImg3 from "../../public/img/blog/blog-details3.jpg";

import BlogProfile1 from "../../public/img/blog/blog-profile1.png";
import BlogShape from "../../public/img/blog/blog-shape.png";
import BlogShape2 from "../../public/img/blog/blog-shape2.png";
import BlogDots from "../../public/img/blog/blog-dots.png";

import BlogProfile2 from "../../public/img/blog/blog-profile2.png";
import Link from "next/link";

export default function BlogDetails() {
  return (
    <>
      {/* <!-- Inner Banner Area --> */}
      <div class="inner-banner">
        <div class="container">
          <div class="inner-title text-center">
            <h3>15 SEO Best Practices: Website Traffic</h3>
            <ul class="inner-list">
              <li>
                <i class="bx bx-user"></i>
                Tom black
              </li>
              <li>
                <i class="bx bx-calendar"></i>
                november 21, 2020
              </li>
              <li>
                <i class="bx bxs-chat"></i>3 Comments
              </li>
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

      {/* <!-- Blog Details Area --> */}
      <div class="blog-details-area pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="blog-article">
                <div class="blog-article-img">
                  <Image src={BlogDetailsImg} alt="Images" />
                </div>
                <div class="article-content">
                  <h2>SEO Best Practice for Web Traffic</h2>
                  <div class="content-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incidunt ut labore et dolore
                      plicabo. Nemo enim ipsam voluptatem quia voluptas sit
                      aspertur aut odit aut quia consequuntur magni
                    </p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    plicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>

                  <blockquote class="blockquote">
                    <p>
                      I see SEO becoming a normalized marketing tactic, the same
                      way TV, radio, and print are traditionally
                    </p>
                    <span>HERBERT BAYARD SWOPE</span>
                  </blockquote>
                </div>

                <div class="another-content">
                  <h2>SEO is Cost-Effective Strategy</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui offi
                  </p>
                  <p>
                    cia deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem tem quia voluptas
                    sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Neque porro quisquam est.
                  </p>
                  <div class="content-img">
                    <div class="row">
                      <div class="col-6">
                        <Image src={BlogDetailsImg2} alt="Images" />
                      </div>
                      <div class="col-6">
                        <Image src={BlogDetailsImg3} alt="Images" />
                      </div>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    plicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>
                </div>

                <div class="blog-article-share">
                  <div class="row align-items-center">
                    <div class="col-lg-7 col-sm-6 col-md-7">
                      <div class="blog-tag">
                        <ul>
                          <li>Tags:</li>
                          <li>
                            <Link href="/a">SEO</Link>
                          </li>
                          <li>
                            <Link href="/aa">#Business</Link>
                          </li>
                          <li>
                            <Link href="/aaa">#Internet</Link>
                          </li>
                          <li>
                            <Link href="/aaaa">#Property</Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-lg-5 col-sm-6 col-md-5">
                      <ul class="social-icon">
                        <li>
                          <Link href="/s">
                            <i class="bx bxl-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ss">
                            <i class="bx bxl-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/sss">
                            <i class="bx bxl-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ssss">
                            <i class="bx bxl-linkedin"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/sa">
                            <i class="bx bxl-youtube"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="article-author">
                  <ul>
                    <li>
                      <Image src={BlogProfile1} alt="Image" />
                      <h3>Devit Killer</h3>
                      <span>Author, Writer</span>
                      <p>
                        I’m devit hack from an initial feasibility study,
                        continuing through sucessl implna business you have to
                        be But we know there
                      </p>
                    </li>
                  </ul>
                  <div class="author-social-link">
                    <ul class="social-icon">
                      <li>
                        <Link href="/saa">
                          <i class="bx bxl-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/ssaa">
                          <i class="bx bxl-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/ssa">
                          <i class="bx bxl-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/sssa">
                          <i class="bx bxl-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/ssssa">
                          <i class="bx bxl-youtube"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div class="author-shape">
                    <div class="shape1">
                      <Image src={BlogShape} alt="Images" />
                    </div>
                    <div class="shape2">
                      <Image src={BlogShape2} alt="Images" />
                    </div>
                    <div class="shape-dots">
                      <Image src={BlogDots} alt="Images" />
                    </div>
                  </div>
                </div>

                <div class="article-post">
                  <div class="row">
                    <div class="col-lg-6 col-sm-6">
                      <div class="article-post-share">
                        <span>
                          Jun 12, 2020 / <Link href="/trw">SEO</Link>
                        </span>
                        <Link href="/d">
                          <a>
                            <h3>
                              Successful digital marketer does first to ensure
                              they get
                            </h3>
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div class="col-lg-6 col-sm-6">
                      <div class="article-post-share">
                        <span>
                          April 19, 2020 / <Link href="/dd">Web</Link>
                        </span>
                        <Link href="/ddd">
                          <a>
                            <h3 class="active">
                              Marketer who knows how to execute their campaigns
                            </h3>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="comments-wrap">
                  <h3 class="title">Comments (02)</h3>
                  <ul>
                    <li>
                      <Image src={BlogProfile1} alt="Image" />
                      <h3>Devit Killer</h3>
                      <span>Jnauary 12, 2020</span>
                      <p>
                        Software hack from an initial feasibility study,
                        continuing through l implna business you have to be But
                        we know theres a better
                      </p>
                      <Link href="/f"> Reply</Link>
                    </li>

                    <li class="ml-30">
                      <Image src={BlogProfile2} alt="Image" />
                      <h3>Morah Jein </h3>
                      <span>July 12, 2020</span>
                      <p>
                        Software hack from an initial feasibility study,
                        continuing through l implna business you have to be But
                        we know theres a better
                      </p>
                      <Link href="/ff"> Reply</Link>
                    </li>
                  </ul>
                </div>

                <div class="comments-form">
                  <div class="contact-form">
                    <h3>Leave a Comment</h3>
                    <form id="contactForm">
                      <div class="row">
                        <div class="col-lg-6 col-sm-6">
                          <div class="form-group">
                            <i class="bx bx-user"></i>
                            <input
                              type="text"
                              name="name"
                              class="form-control"
                              required
                              data-error="Please enter name"
                              placeholder="Name*"
                            />
                          </div>
                        </div>

                        <div class="col-lg-6 col-sm-6">
                          <div class="form-group">
                            <i class="bx bx-user"></i>
                            <input
                              type="email"
                              name="name"
                              class="form-control"
                              required
                              data-error="Please enter email"
                              placeholder="Email*"
                            />
                          </div>
                        </div>

                        <div class="col-lg-6 col-sm-6">
                          <div class="form-group">
                            <i class="bx bx-phone"></i>
                            <input
                              type="text"
                              name="phone"
                              class="form-control"
                              required
                              data-error="Please enter your phone number"
                              placeholder="Phone"
                            />
                          </div>
                        </div>

                        <div class="col-lg-6 col-sm-6">
                          <div class="form-group">
                            <i class="bx bx-copy-alt"></i>
                            <input
                              type="text"
                              name="website"
                              class="form-control"
                              required
                              data-error="Please enter your website"
                              placeholder="Website"
                            />
                          </div>
                        </div>

                        <div class="col-lg-12 col-md-12">
                          <div class="form-group">
                            <i class="bx bx-envelope"></i>
                            <textarea
                              name="message"
                              class="form-control"
                              id="message"
                              cols="30"
                              rows="8"
                              required
                              data-error="Write your message"
                              placeholder="Your Message"
                            ></textarea>
                          </div>
                        </div>

                        <div class="col-lg-12 col-md-12">
                          <button type="submit" class="default-btn">
                            Post A Comment
                            <i class="bx bx-plus"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="blog-widget-left">
                <div class="blog-widget ">
                  <h3 class="title">Search</h3>
                  <div class="search-widget">
                    <form class="search-form">
                      <input
                        type="search"
                        class="form-control"
                        placeholder="Search..."
                      />
                      <button type="submit">
                        <i class="bx bx-search"></i>
                      </button>
                    </form>
                  </div>
                </div>

                <div class="blog-widget">
                  <h3 class="title">Recent Posts</h3>
                  <div class="widget-popular-post">
                    <Link class="item" href="blog-details.html">
                      <a>
                        <Link href="blog-details.html" class="thumb">
                          <span class="full-image cover bg1" role="img"></span>
                        </Link>
                        <div class="info">
                          <span>January 12, 2020</span>

                          <Link href="blog-details.html">
                            <h4 class="title-text"> A Guide to Google SEO</h4>
                          </Link>

                          <p>Jhon hack from an iitial feaity study</p>
                        </div>
                      </a>
                    </Link>

                    <Link href="blog-details.html" class="item">
                      <a>
                        <Link href="blog-details.html" class="thumb">
                          <span class="full-image cover bg2" role="img"></span>
                        </Link>
                        <div class="info">
                          <span>June 30, 2020</span>

                          <Link href="blog-details.html">
                            <h4 class="title-text"> 15 SEO Best Practices </h4>
                          </Link>

                          <p>Jhon hack from an iitial feaity study</p>
                        </div>
                      </a>
                    </Link>

                    <Link class="item" href="blog-details.html">
                      <a>
                        <Link href="blog-details.html" class="thumb">
                          <span class="full-image cover bg3" role="img"></span>
                        </Link>
                        <div class="info">
                          <span>April 09, 2020</span>

                          <Link href="blog-details.html">
                            <h4 class="title-text"> Website Architecture</h4>
                          </Link>

                          <p>Jhon hack from an iitial feaity study</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div class="blog-widget">
                  <h3 class="title">Categories</h3>
                  <div class="widget_categories">
                    <ul>
                      <li>
                        <Link href="/g">
                          <a>
                            Design <span>(1)</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/gg">
                          <a>
                            Lifestyle <span>(4)</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/ggg">
                          <a>
                            Camping <span>(3)</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/gggg">
                          <a>
                            {" "}
                            Support <span>(2)</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/ggggg">
                          <a>
                            Device <span>(6)</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/ga">
                          <a>
                            Internet <span>(18)</span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="blog-widget">
                  <h3 class="title">News Tags</h3>
                  <ul class="blog-widget-tag">
                    <li>
                      <Link href="/gs">#SEO</Link>
                    </li>
                    <li>
                      <Link href="/gs">#Internet</Link>
                    </li>
                    <li>
                      <Link href="/gqs">#Web</Link>
                    </li>
                    <li>
                      <Link href="/gfgf">#Sass</Link>
                    </li>
                    <li>
                      <Link href="/dfg">#It & Support</Link>
                    </li>
                    <li>
                      <Link href="/rwer">#Tik</Link>
                    </li>
                    <li>
                      <Link href="/dfgdsd">#Tips</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Blog Details Area End --> */}
    </>
  );
}
