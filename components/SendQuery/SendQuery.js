import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import styles from "./SendQuery.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const slide1 = <>1</>;
const slide2 = <>2</>;
const slide3 = <>3</>;
const slide4 = <>4</>;
const slide5 = <>5</>;
const slide6 = <>6</>;

const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

export default function SendQuery() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: false,
          type: "bullets",
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((component, id) => (
          <SwiperSlide id={id}> {component}</SwiperSlide>
        ))}
        <div className={styles.slide_button}>
          <button className={styles.slide_button}>up</button>
          <button>down</button>
        </div>
      </Swiper>
    </>
  );
}
