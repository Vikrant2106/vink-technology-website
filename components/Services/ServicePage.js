import React from "react";
import Image from "next/image";

import BannerShape1 from "../../public/img/inner-banner/banner-shape1.png";
import BannerShape2 from "../../public/img/inner-banner/banner-shape2.png";
import BannerShape3 from "../../public/img/inner-banner/banner-shape3.png";
import DotShape from "../../public/img/shape/dots-shape.png";

import ServiceIcon1 from "../../public/img/service/service-icon1.png";
import ServiceIcon2 from "../../public/img/service/service-icon2.png";
import ServiceIcon3 from "../../public/img/service/service-icon3.png";
import ServiceIcon4 from "../../public/img/service/service-icon4.png";
import ServiceIcon5 from "../../public/img/service/service-icon5.png";
import ServiceIcon6 from "../../public/img/service/service-icon6.png";

import ServiceShape from "../../public/img/service/service-shape.png";

import BrandLogo1 from "../../public/img/brand/brand-logo1.png";
import BrandLogo2 from "../../public/img/brand/brand-logo2.png";
import BrandLogo3 from "../../public/img/brand/brand-logo3.png";
import BrandLogo4 from "../../public/img/brand/brand-logo4.png";
import BrandLogo5 from "../../public/img/brand/brand-logo5.png";
import BrandLogo6 from "../../public/img/brand/brand-logo6.png";

import BrandStyle1 from "../../public/img/brand/brand-style1.png";
import BrandStyle2 from "../../public/img/brand/brand-style2.png";
import BrandStyle3 from "../../public/img/brand/brand-style3.png";
import BrandStyle4 from "../../public/img/brand/brand-style4.png";
import BrandStyle5 from "../../public/img/brand/brand-style5.png";
import BrandStyle6 from "../../public/img/brand/brand-style6.png";
import Link from "next/link";
import { NavbarData } from "../../StaticData/NavbarData";
import { ServiceData } from "../../StaticData/ServiceData";
import ServiceDetails from "./ServiceDetails";

export default function ServicePage({ slug }) {
  return (
    <>
      <div class="inner-banner">
        <div class="container">
          <div class="inner-title text-center">
            <h3>{slug}</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
              </li>
              <li>{slug}</li>
            </ul>
          </div>
        </div>

        <div class="inner-banner-shape">
          <div class="shape-one">
            <Image src={BannerShape1} alt="Images" />
          </div>

          <div class="shape-two">
            <Image src={BannerShape2} alt="Images" />
          </div>

          <div class="shape-three">
            <Image src={BannerShape3} alt="Images" />
          </div>

          <div class="inner-banner-dots-2">
            <Image src={DotShape} alt="Images" />
          </div>
        </div>
      </div>

      <div class="service-widget-area pt-50 pb-70">
        <div class="container">
          <div class="section-title text-center">
            <span class="sp-before sp-after">Services</span>
            <h2 class="h2-color">
              We’re Flexible to <b>Provide You Best</b> {slug}
            </h2>
          </div>
          <div class="row pt-45">
            {slug
              ? ServiceData.map((data) => (
                  <>
                    {data.slug == slug &&
                      data.service.map((d) => (
                        <div class="col-lg-4 col-md-6" key={d.slugurl}>
                          <div class="service-card">
                            {/* <Link href={d.slugurl}> */}
                            <Image src={ServiceIcon1} alt="Images" />
                            {/* </Link> */}
                            <h3>
                              {d.name}
                              {/* <Link href={"/" + d.slugurl}>{d.name}</Link> */}
                            </h3>
                            <div class="service-card-shape">
                              <Image src={ServiceShape} alt="Images" />
                            </div>
                          </div>
                        </div>
                      ))}
                  </>
                ))
              : NavbarData[2].child.map((d) => (
                  <div class="col-lg-4 col-md-6" key={d.id}>
                    <div class="service-card">
                      <Link href={d.url}>
                        <Image src={ServiceIcon1} alt="Images" />
                      </Link>
                      <h3>
                        <Link href={"/" + d.url}>{d.name}</Link>
                      </h3>
                      <div class="service-card-shape">
                        <Image src={ServiceShape} alt="Images" />
                      </div>
                    </div>
                  </div>
                ))}

            {/* <div class="col-lg-4 col-md-6">
             <div class="service-card">
               <Link href="service-details.html">
                 <Image src={ServiceIcon2} alt="Images" />
               </Link>
               <h3>
                 <Link href="service-details.html">
                   Social Media Marketing
                 </Link>
               </h3>
               <p>
                 Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                 iste natus odit aut fugitsed quia consequuntur alquam quaerat
                 voluptatem
               </p>
               <div class="service-card-shape">
                 <Image src={ServiceShape} alt="Images" />
               </div>
             </div>
           </div>

           <div class="col-lg-4 col-md-6">
             <div class="service-card">
               <Link href="service-details.html">
                 <Image src={ServiceIcon3} alt="Images" />
               </Link>
               <h3>
                 <Link href="service-details.html">Content Marketing</Link>
               </h3>
               <p>
                 Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                 iste natus odit aut fugitsed quia consequuntur alquam quaerat
                 voluptatem
               </p>
               <div class="service-card-shape">
                 <Image src={ServiceShape} alt="Images" />
               </div>
             </div>
           </div>

           <div class="col-lg-4 col-md-6">
             <div class="service-card">
               <Link href="service-details.html">
                 <Image src={ServiceIcon4} alt="Images" />
               </Link>
               <h3>
                 <Link href="service-details.html">SEO Optimization</Link>
               </h3>
               <p>
                 Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                 iste natus odit aut fugitsed quia consequuntur alquam quaerat
                 voluptatem
               </p>
               <div class="service-card-shape">
                 <Image src={ServiceShape} alt="Images" />
               </div>
             </div>
           </div>

           <div class="col-lg-4 col-md-6">
             <div class="service-card">
               <Link href="service-details.html">
                 <Image src={ServiceIcon5} alt="Images" />
               </Link>
               <h3>
                 <Link href="service-details.html">Web Development</Link>
               </h3>
               <p>
                 Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                 iste natus odit aut fugitsed quia consequuntur alquam quaerat
                 voluptatem
               </p>
               <div class="service-card-shape">
                 <Image src={ServiceShape} alt="Images" />
               </div>
             </div>
           </div>

           <div class="col-lg-4 col-md-6">
             <div class="service-card">
               <Link href="service-details.html">
                 <Image src={ServiceIcon6} alt="Images" />
               </Link>
               <h3>
                 <Link href="service-details.html">PPC Advertising</Link>
               </h3>
               <p>
                 Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                 iste natus odit aut fugitsed quia consequuntur alquam quaerat
                 voluptatem
               </p>
               <div class="service-card-shape">
                 <Image src={ServiceShape} alt="Images" />
               </div>
             </div>
           </div>

           <div class="col-lg-4 col-md-6">
             <div class="service-card">
               <Link href="service-details.html">
                 <Image src={ServiceIcon6} alt="Images" />
               </Link>
               <h3>
                 <Link href="service-details.html">PPC Advertising</Link>
               </h3>
               <p>
                 Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                 iste natus odit aut fugitsed quia consequuntur alquam quaerat
                 voluptatem
               </p>
               <div class="service-card-shape">
                 <Image src={ServiceShape} alt="Images" />
               </div>
             </div>
           </div>

           <div class="col-lg-4 col-md-6">
             <div class="service-card">
               <Link href="service-details.html">
                 <Image src={ServiceIcon6} alt="Images" />
               </Link>
               <h3>
                 <Link href="service-details.html">PPC Advertising</Link>
               </h3>
               <p>
                 Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                 iste natus odit aut fugitsed quia consequuntur alquam quaerat
                 voluptatem
               </p>
               <div class="service-card-shape">
                 <Image src={ServiceShape} alt="Images" />
               </div>
             </div>
           </div>

           <div class="col-lg-4 col-md-6">
             <div class="service-card">
               <Link href="service-details.html">
                 <Image src={ServiceIcon6} alt="Images" />
               </Link>
               <h3>
                 <Link href="service-details.html">PPC Advertising</Link>
               </h3>
               <p>
                 Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                 iste natus odit aut fugitsed quia consequuntur alquam quaerat
                 voluptatem
               </p>
               <div class="service-card-shape">
                 <Image src={ServiceShape} alt="Images" />
               </div>
             </div>
           </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
