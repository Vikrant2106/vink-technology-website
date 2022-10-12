import React, { useRef, useState } from "react";

import CustSwiper from "../Common/FormElements/CustSwiper";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import Slide6 from "./Slide6";

export default function SendQuery({ slug }) {
  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];
  return (
    <>
      <CustSwiper slides={slides} slug={slug} />
    </>
  );
}
