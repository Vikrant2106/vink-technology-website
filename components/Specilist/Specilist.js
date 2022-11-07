import React from "react";

import Image from "next/image";

import TeamImg1 from "../../public/img/team/team-img1.jpg";
import TeamImg2 from "../../public/img/team/team-img2.jpg";
import TeamImg3 from "../../public/img/team/team-img3.jpg";
import TeamImg4 from "../../public/img/team/team-img4.jpg";
import TeamImg5 from "../../public/img/team/team-img5.jpg";
import TeamImg6 from "../../public/img/team/team-img6.jpg";

import TeamShape from "../../public/img/shape/team-shape.png";
import Shape7 from "../../public/img/shape/shape7.png";
import Shape6 from "../../public/img/shape/shape6.png";
import Shape2 from "../../public/img/shape/shape2.png";
import Link from "next/link";

export default function Specilist() {
  return (
    <>
      <div class="team-area pt-100 pb-70">
        <div class="container-fluid p-0 m-0">
          <div class="section-title text-center">
            <span class="sp-after">Our Specialists</span>
            <h2 class="h2-color">
              Meet Our <b>Leadership Team</b>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
          </div>
          <div class="team-slider owl-carousel owl-theme pt-45">
            <div class="team-item">
              <Link href="team.html" class="team-img team-bg-before">
                <img src={TeamImg1} alt="Images" />
              </Link>
              <div class="team-content">
                <h3>
                  <Link href="team.html">Hobler Jeain</Link>
                </h3>
                <span>General Manager</span>
                <ul class="social-link">
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-pinterest-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="team-item">
              <Link href="team.html" class="team-img team-bg-before-2">
                <img src={TeamImg2} alt="Images" />
              </Link>
              <div class="team-content">
                <h3>
                  <Link href="team.html">Jermin Jekson</Link>
                </h3>
                <span>Marketing Manager</span>
                <ul class="social-link">
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-pinterest-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="team-item">
              <Link href="team.html" class="team-img team-bg-before-3">
                <img src={TeamImg3} alt="Images" />
              </Link>
              <div class="team-content">
                <h3>
                  <Link href="team.html">Cristiono Kopper</Link>
                </h3>
                <span>Web Developer</span>
                <ul class="social-link">
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-pinterest-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="team-item">
              <Link href="team.html" class="team-img team-bg-before">
                <img src={TeamImg4} alt="Images" />
              </Link>
              <div class="team-content">
                <h3>
                  <Link href="team.html">Julfiker Jeain</Link>
                </h3>
                <span>CEO At Ostino</span>
                <ul class="social-link">
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-pinterest-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="team-item">
              <Link href="team.html" class="team-img team-bg-before-2">
                <img src={TeamImg5} alt="Images" />
              </Link>
              <div class="team-content">
                <h3>
                  <Link href="team.html">Rickey poltin</Link>
                </h3>
                <span>Area Manager</span>
                <ul class="social-link">
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-pinterest-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="team-item">
              <Link href="team.html" class="team-img team-bg-before-3">
                <img src={TeamImg6} alt="Images" />
              </Link>
              <div class="team-content">
                <h3>
                  <Link href="team.html">Jeck Keplin</Link>
                </h3>
                <span>Web Developer</span>
                <ul class="social-link">
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-pinterest-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <i class="bx bxl-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="team-shape">
          <div class="team-shape1">
            <img src={TeamShape} alt="Images" />
          </div>
          <div class="team-shape2">
            <img src={Shape7} alt="Images" />
          </div>
          <div class="team-shape3">
            <img src={Shape6} alt="Images" />
          </div>
          <div class="team-shape4">
            <img src={Shape2} alt="Images" />
          </div>
        </div>
      </div>
    </>
  );
}
