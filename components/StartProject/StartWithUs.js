import React from "react";
import Image from "next/image";

import DataTable from "../../public/img/data-table-img.png";
import Link from "next/link";

export default function StartWithUs() {
  return (
    <>
      {/* <!-- Data Table Area --> */}
      <div class="data-table-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="data-table-content">
                <h2>We Like to Start Your Project With Us</h2>
                <Link href="contact">
                  <a class="default-btn">
                    Get started <i class="bx bx-plus"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="data-table-img">
                <img src={DataTable} alt="Images" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Data Table Area End --> */}
    </>
  );
}
