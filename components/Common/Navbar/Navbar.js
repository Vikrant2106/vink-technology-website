import React from "react";
import SearchOverlay from "./SearchOverlay";
import { NavbarData } from "../../../StaticData/NavbarData";

import Image from "next/image";
import Logo1 from "../../../public/img/logo/logo1.png";
import Logo2 from "../../../public/img/logo/logo2.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <SearchOverlay />
      {/* <!-- Start Navbar Area --> */}
      <div className="navbar-area">
        {/* <!-- Menu For Mobile Device --> */}
        <div className="mobile-nav">
          <a href="index.html" className="logo">
            {/* <Image src={Logo1} className="logo-one" alt="Logo" /> */}
            {/* <Image src={Logo2} className="logo-two" alt="Logo" /> */}

            <img src="/img/logo/logo1.png" className="logo-one" alt="Logo" />
            <img src="/img/logo/logo2.png" className="logo-two" alt="Logo" />
          </a>
        </div>

        {/* <!-- Menu For Desktop Device --> */}
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="container-max-2 navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" href="/jh">
                <Image src={Logo1} className="logo-one" alt="Logo" />
              </Link>

              <div
                className="collapse navbar-collapse mean-menu"
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
                <div className="side-nav d-in-line align-items-center">
                  {/* <div className="side-item">
                    <div className="search-box">
                      <i className="flaticon-loupe"></i>
                    </div>
                  </div> */}

                  {/* <div className="side-item">
                    <div className="user-btn">
                      <Link href="#">
                        <i className="flaticon-contact"></i>
                      </Link>
                    </div>
                  </div> */}

                  <div className="side-item">
                    <div className="nav-add-btn">
                      <Link href="/contact" className="nav-menu-btn">
                        <a className="nav-menu-btn">
                          Contact us
                          <i className="bx bx-plus"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="side-nav-responsive">
          <div className="container">
            <div className="dot-menu">
              <div className="circle-inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div>

            <div className="container">
              <div className="side-nav-inner">
                <div className="side-nav justify-content-center align-items-center">
                  {/* <div className="side-item">
                    <div className="search-box">
                      <i className="flaticon-loupe"></i>
                    </div>
                  </div> */}

                  {/* <div className="side-item">
                    <div className="user-btn">
                      <Link href="#">
                        <i className="flaticon-contact"></i>
                      </Link>
                    </div>
                  </div> */}

                  <div className="side-item">
                    <div className="nav-add-btn">
                      {/* <a href="/contact" className="nav-menu-btn border-radius"> */}
                      <a
                        href="/contact"
                        className="nav-menu-btn border-radius nav-menu-btn border-radius"
                      >
                        Contact us
                        <i className="bx bx-plus"></i>
                      </a>
                      {/* </a> */}
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
