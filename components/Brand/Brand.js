import React from "react";
import Image from "next/image";

import Brand1 from "../../public/img/brand/brand1.png";
import Brand2 from "../../public/img/brand/brand2.png";
import Brand3 from "../../public/img/brand/brand3.png";
import Brand4 from "../../public/img/brand/brand4.png";
import Brand5 from "../../public/img/brand/brand5.png";
import Brand6 from "../../public/img/brand/brand6.png";
import Link from "next/link";

export default function Brand() {
  return (
    <>
      {/* <!-- Brand Area --> */}
      <div class="brand-area">
        <div class="container-fluid">
          <div class="brand-max">
            <div class="brand-title">
              <h3>
                Over <Link href="/sdfs">150.000</Link> supporter all ovet the
                world
              </h3>
            </div>
            <div class="brand-slider owl-carousel owl-theme">
              <div class="brand-item">
                <Link href="/sdf">
                  <img src={Brand1} alt="Images" />
                </Link>
              </div>

              <div class="brand-item">
                <Link href="/ad">
                  <img src={Brand2} alt="Images" />
                </Link>
              </div>

              <div class="brand-item">
                <Link href="/23">
                  <img src={Brand3} alt="Images" />
                </Link>
              </div>

              <div class="brand-item">
                <Link href="/sde">
                  <img src={Brand4} alt="Images" />
                </Link>
              </div>

              <div class="brand-item">
                <Link href="/ds">
                  <img src={Brand5} alt="Images" />
                </Link>
              </div>

              <div class="brand-item">
                <Link href="/as">
                  <img src={Brand6} alt="Images" />
                </Link>
              </div>

              <div class="brand-item">
                <Link href="/ds">
                  <img src={Brand2} alt="Images" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Brand Area End --> */}
    </>
  );
}
