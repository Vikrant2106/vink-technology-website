import React from "react";
import SearchOverlay from "../../Common/Navbar/SearchOverlay";
import { NavbarData } from "../../../StaticData/NavbarData";
import Image from "next/image";
import Logo1 from "../../../public/img/logo/logo1.png";
import Logo2 from "../../../public/img/logo/logo2.png";

export default function NavbarOuter() {
  return (
    <>
      <SearchOverlay />
      {/* <!-- Start Navbar Area --> */}
      <div class="navbar-area">
        {/* <!-- Menu For Mobile Device --> */}
        <div class="mobile-nav">
          <a href="/" class="logo">
            <Image src={Logo1} class="logo-one" alt="Logo" />
            <Image src={Logo2} class="logo-two" alt="Logo" />
          </a>
        </div>

        {/* <!-- Menu For Desktop Device --> */}
        <div class="main-nav nav-bar-two">
          <div class="container-fluid">
            <nav class="container-max-2 navbar navbar-expand-md navbar-light ">
              <a class="navbar-brand" href="/">
                <Image src={Logo2} alt="Logo" />
              </a>

              <div
                class="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto">
                  {NavbarData.map((data, i) => (
                    <>
                      <li className="nav-item">
                        <a href={data.url} className="nav-link">
                          {data.name} {data.icon && data.icon}
                        </a>
                        {data.child.length > 0 ? (
                          <ul className="dropdown-menu">
                            {data.child.length > 0
                              ? data.child.map((d) => (
                                  <li className="nav-item">
                                    <a href={data.url} className="nav-link">
                                      {d.name}
                                    </a>
                                  </li>
                                ))
                              : ""}
                          </ul>
                        ) : (
                          ""
                        )}
                      </li>
                    </>
                  ))}
                </ul>
                <div class="side-nav d-in-line align-items-center">
                  <div class="side-item">
                    <div class="search-box">
                      <i class="flaticon-loupe"></i>
                    </div>
                  </div>

                  <div class="side-item">
                    <div class="user-btn">
                      <a href="#">
                        <i class="flaticon-contact"></i>
                      </a>
                    </div>
                  </div>

                  <div class="side-item">
                    <div class="nav-add-btn">
                      <a href="contact" class="nav-menu-btn">
                        Contact us
                        <i class="bx bx-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div class="side-nav-responsive">
          <div class="container">
            <div class="dot-menu">
              <div class="circle-inner">
                <div class="circle circle-one"></div>
                <div class="circle circle-two"></div>
                <div class="circle circle-three"></div>
              </div>
            </div>

            <div class="container">
              <div class="side-nav-inner">
                <div class="side-nav justify-content-center  align-items-center">
                  <div class="side-item">
                    <div class="search-box">
                      <i class="flaticon-loupe"></i>
                    </div>
                  </div>

                  <div class="side-item">
                    <div class="user-btn">
                      <a href="#">
                        <i class="flaticon-contact"></i>
                      </a>
                    </div>
                  </div>

                  <div class="side-item">
                    <div class="nav-add-btn">
                      <a href="contact" class="nav-menu-btn border-radius">
                        Contact us
                        <i class="bx bx-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Navbar Area --> */}
    </>
  );
}
