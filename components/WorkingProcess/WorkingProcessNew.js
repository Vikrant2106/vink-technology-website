import React from "react";
import Image from "next/image";

import WorkImg from "../../public/img/work-img.png";

export default function WorkingProcessNew() {
  return (
    <>
      {/* <!-- Work Area Two --> */}
      <div class="work-area-two pt-100 pb-70">
        <div class="container">
          <div class="section-title text-center">
            <span class="sp-before sp-after">Working Process</span>
            <h2 class="h2-color2">Simple & Clean Work Process</h2>
          </div>

          <div class="row pt-45">
            <div class="col-lg-4">
              <div class="work-item-list">
                <ul>
                  <li class="text-right">
                    <h3>
                      Frame the Problem <span>1</span>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia
                      consequuntur{" "}
                    </p>
                  </li>

                  <li class="text-right">
                    <h3>
                      Collect the Raw Data <span>2</span>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia
                      consequuntur{" "}
                    </p>
                  </li>

                  <li class="text-right">
                    <h3>
                      Process the Data <span>3</span>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia
                      consequuntur{" "}
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="work-img-2">
                <Image src={WorkImg} alt="Images" />
              </div>
            </div>

            <div class="col-lg-4">
              <div class="work-item-list-2">
                <ul>
                  <li>
                    <h3>
                      <span>4</span>Explore the Data
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia
                      consequuntur{" "}
                    </p>
                  </li>

                  <li>
                    <h3>
                      <span>5</span>Perform Analysis
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia
                      consequuntur{" "}
                    </p>
                  </li>

                  <li>
                    <h3>
                      <span>6</span>Communicate Results
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia
                      consequuntur{" "}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Work Area Two End --> */}
    </>
  );
}
