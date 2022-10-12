import React from "react";
import SearchOverlay from "./SearchOverlay";
import { NavbarData } from "../../../StaticData/NavbarData";

export default function Navbar() {
  return (
    <>
      <SearchOverlay />
      {/* <!-- Start Navbar Area --> */}
      <div className="navbar-area">
        {/* <!-- Menu For Mobile Device --> */}
        <div className="mobile-nav">
          <a href="index.html" className="logo">
            <img src="/img/logo/logo1.png" className="logo-one" alt="Logo" />
            <img src="/img/logo/logo2.png" className="logo-two" alt="Logo" />
          </a>
        </div>

        {/* <!-- Menu For Desktop Device --> */}
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="container-max-2 navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="/">
                <img
                  src="/img/logo/logo1.png"
                  className="logo-one"
                  alt="Logo"
                />
                <img
                  src="/img/logo/logo2.png"
                  className="logo-two"
                  alt="Logo"
                />
              </a>

              <div
                className="collapse navbar-collapse mean-menu"
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
                                    <a href={d.url} className="nav-link">
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
                <div className="side-nav d-in-line align-items-center">
                  <div className="side-item">
                    <div className="search-box">
                      <i className="flaticon-loupe"></i>
                    </div>
                  </div>

                  <div className="side-item">
                    <div className="user-btn">
                      <a href="#">
                        <i className="flaticon-contact"></i>
                      </a>
                    </div>
                  </div>

                  <div className="side-item">
                    <div className="nav-add-btn">
                      <a href="contact" className="nav-menu-btn">
                        Contact us
                        <i className="bx bx-plus"></i>
                      </a>
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
                  <div className="side-item">
                    <div className="search-box">
                      <i className="flaticon-loupe"></i>
                    </div>
                  </div>

                  <div className="side-item">
                    <div className="user-btn">
                      <a href="#">
                        <i className="flaticon-contact"></i>
                      </a>
                    </div>
                  </div>

                  <div className="side-item">
                    <div className="nav-add-btn">
                      <a href="contact" className="nav-menu-btn border-radius">
                        Contact us
                        <i className="bx bx-plus"></i>
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
