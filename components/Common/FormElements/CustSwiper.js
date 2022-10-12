import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import styles from "./SendQuery.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function CustSwiper({ slides, slug }) {
  console.log(slug);
  function fncUP(e) {
    console.log(e);
  }
  function fncDown(e) {
    console.log(e);
  }
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: false,
          type: "bullets",
        }}
        speed={1200}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        slidesPerView={1}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
      >
        {slides.map((Component, id) => (
          <SwiperSlide key={id}>
            <Component slug={slug} />
          </SwiperSlide>
        ))}
        <div className={styles.slide_button}>
          <div className="side-item">
            <div className="nav-add-btn">
              <button className="nav-menu-btn prev" onClick={(e) => fncUP()}>
                Up
              </button>
            </div>
          </div>
          <div className="side-item">
            <div className="nav-add-btn">
              <button className="nav-menu-btn next" onClick={(e) => fncDown()}>
                Down
              </button>
            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
}
