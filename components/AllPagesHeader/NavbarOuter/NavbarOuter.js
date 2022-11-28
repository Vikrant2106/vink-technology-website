import React from "react";
import SearchOverlay from "../../Common/Navbar/SearchOverlay";
import { NavbarData } from "../../../StaticData/NavbarData";
import Image from "next/image";
import Logo1 from "../../../public/img/logo/logo1.png";
import Logo2 from "../../../public/img/logo/logo2.png";
import Link from "next/link";

export default function NavbarOuter() {
  return (
    <>
      <SearchOverlay />
      {/* <!-- Start Navbar Area --> */}
      <div class="navbar-area">
        {/* <!-- Menu For Mobile Device --> */}
        <div class="mobile-nav">
          <a href="/" class="logo">
            {/* <Image src={Logo1} class="logo-one" alt="Logo" />
              <Image src={Logo2} class="logo-two" alt="Logo" /> */}
            <img src="/img/logo/logo1.png" className="logo-one" alt="Logo" />
            <img src="/img/logo/logo2.png" className="logo-two" alt="Logo" />
          </a>
        </div>

        {/* <!-- Menu For Desktop Device --> */}
        <div class="main-nav nav-bar-two">
          <div class="container-fluid">
            <nav class="container-max-2 navbar navbar-expand-md navbar-light ">
              <Link class="navbar-brand" href="/">
                <Image src={Logo2} alt="Logo" />
              </Link>

              <div
                class="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto">
                  {NavbarData.map((data, i) => (
                    <>
                      <li className="nav-item">
                        <Link href={data.url} className="nav-link">
                          <a className="nav-link">
                            {data.name}
                            {data.icon && data.icon}
                          </a>
                        </Link>

                        {data.child.length > 0 ? (
                          <ul className="dropdown-menu">
                            {data.child.length > 0
                              ? data.child.map((d, kk) => (
                                  <li className="nav-item" key={kk}>
                                    <Link href={d.url} className="nav-link">
                                      {d.name}
                                    </Link>
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
                  {/* <div class="side-item">
                    <div class="search-box">
                      <i class="flaticon-loupe"></i>
                    </div>
                  </div>

                  <div class="side-item">
                    <div class="user-btn">
                      <Link href="#">
                        <i class="flaticon-contact"></i>
                      </Link>
                    </div>
                  </div> */}

                  <div class="side-item">
                    <div class="nav-add-btn">
                      <Link href="/contact" class="nav-menu-btn">
                        <a class="nav-menu-btn">
                          Contact us
                          <i class="bx bx-plus"></i>
                        </a>
                      </Link>
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
                    <div class="nav-add-btn">
                      <a
                        href="/contact"
                        class="nav-menu-btn border-radius nav-menu-btn border-radius"
                      >
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
