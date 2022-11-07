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
                      We analyse your processes & requirements <span>1</span>
                    </h3>
                    {/* <p>
                      Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia
                      consequuntur{" "}
                    </p> */}
                  </li>

                  <li class="text-right">
                    <h3>
                      We assess possibilities of automation on requirements{" "}
                      <span>2</span>
                    </h3>
                    {/* <p>
                      Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia
                      consequuntur{" "}
                    </p> */}
                  </li>

                  <li class="text-right">
                    <h3>
                      We choose and recommend the best technologies suited to
                      the solution <span>3</span>
                    </h3>
                    {/* <p>
                      Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia
                      consequuntur{" "}
                    </p> */}
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="work-img-2">
                <img src={WorkImg} alt="Images" />
              </div>
            </div>

            <div class="col-lg-4">
              <div class="work-item-list-2">
                <ul>
                  <li>
                    <h3>
                      <span>4</span>We then create a prototype/visual interface
                      of the solution
                    </h3>
                    {/* <p>
                      Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia
                      consequuntur{" "}
                    </p> */}
                  </li>

                  <li>
                    <h3>
                      <span>5</span>We deliver a solution that works for you
                    </h3>
                    {/* <p>
                      Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia
                      consequuntur{" "}
                    </p> */}
                  </li>

                  <li>
                    <h3>
                      <span>6</span>We provide support and help maintain the
                      project
                    </h3>
                    {/* <p>
                      Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia
                      consequuntur{" "}
                    </p> */}
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
