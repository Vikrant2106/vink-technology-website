import Link from "next/link";

export const NavbarData = [
  {
    name: "Home",
    child: [],
    icon: "",
    url: "/",
    isActive: "active",
  },
  {
    name: "About",
    child: [],
    icon: "",
    url: "about",
    isActive: "active",
  },
  {
    name: "Services",
    url: "",
    isActive: "active",
    icon: <i className="bx bx-plus"></i>,
    child: [
      {
        name: "Service",
        icon: "",
        url: "Services",
        child: [],
        isActive: "active",
      },
      {
        name: "Service Details",
        icon: "",
        url: "Service_details",
        child: [],
        isActive: "active",
      },
      {
        name: "Service with icon",
        icon: <i className="bx bx-plus"></i>,
        url: "service_with_icon",
        child: [],
        isActive: "active",
      },
    ],
  },
  {
    name: "Blog",
    child: [],
    icon: "",
    url: "blog",
    isActive: "active",
  },
  {
    name: "Contact",
    child: [],
    icon: "",
    url: "contact",
    isActive: "active",
  },
];

export const defaultNavWithHTML = (
  <ul className="navbar-nav m-auto">
    <li className="nav-item">
      <Link href="/" className="nav-link">
        Home
        {/* <i className="bx bx-plus"></i> */}
      </Link>
      {/* <ul className="dropdown-menu">
    <li className="nav-item">
      <Link href="index.html" className="nav-link active">
        SEO Agency
      </Link>
    </li>
    <li className="nav-item">
      <Link href="index-2.html" className="nav-link">
        {" "}
        AI Startup{" "}
      </Link>
    </li>
    <li className="nav-item">
      <Link href="index-3.html" className="nav-link">
        Machine Learning
      </Link>
    </li>
  </ul> */}
    </li>
    <li className="nav-item">
      <Link href="about" className="nav-link">
        {" "}
        About{" "}
      </Link>
    </li>
    {/* <li className="nav-item">
  <Link href="/" className="nav-link">
    Pages
    <i className="bx bx-plus"></i>
  </Link>
  <ul className="dropdown-menu">
    <li className="nav-item">
      <Link href="team.html" className="nav-link">
        {" "}
        Team{" "}
      </Link>
    </li>
    <li className="nav-item">
      <Link href="pricing.html" className="nav-link">
        Pricing Table
      </Link>
    </li>
    <li className="nav-item">
      <Link href="faq.html" className="nav-link">
        {" "}
        FAQ{" "}
      </Link>
    </li>
    <li className="nav-item">
      <Link href="/" className="nav-link">
        Courses
        <i className="bx bx-plus"></i>
      </Link>
      <ul className="dropdown-menu">
        <li className="nav-item">
          <Link href="courses.html" className="nav-link">
            {" "}
            Courses{" "}
          </Link>
        </li>
        <li className="nav-item">
          <Link href="course-details.html" className="nav-link">
            Course Details
          </Link>
        </li>
      </ul>
    </li>
    <li className="nav-item">
      <Link href="testimonials.html" className="nav-link">
        Testimonials
      </Link>
    </li>
    <li className="nav-item">
      <Link href="/" className="nav-link">
        Case study
        <i className="bx bx-plus"></i>
      </Link>
      <ul className="dropdown-menu">
        <li className="nav-item">
          <Link href="case-study.html" className="nav-link">
            Case study
          </Link>
        </li>
        <li className="nav-item">
          <Link href="case-details.html" className="nav-link">
            Case study Details
          </Link>
        </li>
      </ul>
    </li>
    <li className="nav-item">
      <Link href="404.html" className="nav-link">
        {" "}
        404 page{" "}
      </Link>
    </li>
    <li className="nav-item">
      <Link href="sign-in.html" className="nav-link">
        {" "}
        Sign In{" "}
      </Link>
    </li>
    <li className="nav-item">
      <Link href="sign-up.html" className="nav-link">
        {" "}
        Sign Up{" "}
      </Link>
    </li>
    <li className="nav-item">
      <Link href="terms-condition.html" className="nav-link">
        Terms & Conditions
      </Link>
    </li>
    <li className="nav-item">
      <Link href="privacy-policy.html" className="nav-link">
        Privacy Policy
      </Link>
    </li>
    <li className="nav-item">
      <Link href="coming-soon.html" className="nav-link">
        Coming Soon
      </Link>
    </li>
  </ul>
</li> */}
    <li className="nav-item">
      <Link href="services" className="nav-link">
        Services
        {/* <i className="bx bx-plus"></i> */}
      </Link>
      {/* <ul className="dropdown-menu">
    <li className="nav-item">
      <Link href="services.html" className="nav-link">
        {" "}
        Services{" "}
      </Link>
    </li>
    <li className="nav-item">
      <Link href="service-details.html" className="nav-link">
        Service Details
      </Link>
    </li>
  </ul> */}
    </li>

    <li className="nav-item">
      <Link href="blog" className="nav-link">
        Blog
        {/* <i className="bx bx-plus"></i> */}
      </Link>
      {/* <ul className="dropdown-menu">
    <li className="nav-item">
      <Link href="blog.html" className="nav-link">
        {" "}
        Blog{" "}
      </Link>
    </li>
    <li className="nav-item">
      <Link href="blog-details.html" className="nav-link">
        Blog Details
      </Link>
    </li>
  </ul> */}
    </li>
    <li className="nav-item">
      <Link href="contact" className="nav-link">
        Contact{" "}
      </Link>
    </li>
  </ul>
);

export const outerNavbarHTML = (
  <ul class="navbar-nav m-auto">
    <li class="nav-item">
      <Link href="/" class="nav-link">
        Home
        {/* <i class="bx bx-plus"></i> */}
      </Link>
      {/* <ul class="dropdown-menu">
    <li class="nav-item">
      <Link href="index.html" class="nav-link">
        SEO Agency
      </Link>
    </li>
    <li class="nav-item">
      <Link href="index-2.html" class="nav-link">
        AI Startup
      </Link>
    </li>
    <li class="nav-item">
      <Link href="index-3.html" class="nav-link">
        Machine Learning
      </Link>
    </li>
  </ul> */}
    </li>
    <li class="nav-item">
      <Link href="about" class="nav-link active">
        About
      </Link>
    </li>
    {/* <li class="nav-item">
  <Link href="/" class="nav-link">
    Pages
    <i class="bx bx-plus"></i>
  </Link>
  <ul class="dropdown-menu">
    <li class="nav-item">
      <Link href="team.html" class="nav-link">
        Team
      </Link>
    </li>
    <li class="nav-item">
      <Link href="pricing.html" class="nav-link">
        Pricing Table
      </Link>
    </li>
    <li class="nav-item">
      <Link href="faq.html" class="nav-link">
        FAQ
      </Link>
    </li>
    <li class="nav-item">
      <Link href="/" class="nav-link">
        Courses
        <i class="bx bx-plus"></i>
      </Link>
      <ul class="dropdown-menu">
        <li class="nav-item">
          <Link href="courses.html" class="nav-link">
            Courses
          </Link>
        </li>
        <li class="nav-item">
          <Link href="course-details.html" class="nav-link">
            Course Details
          </Link>
        </li>
      </ul>
    </li>
    <li class="nav-item">
      <Link href="testimonials.html" class="nav-link">
        Testimonials
      </Link>
    </li>
    <li class="nav-item">
      <Link href="/" class="nav-link">
        Case study
        <i class="bx bx-plus"></i>
      </Link>
      <ul class="dropdown-menu">
        <li class="nav-item">
          <Link href="case-study.html" class="nav-link">
            Case study
          </Link>
        </li>
        <li class="nav-item">
          <Link href="case-details.html" class="nav-link">
            Case study Details
          </Link>
        </li>
      </ul>
    </li>
    <li class="nav-item">
      <Link href="404.html" class="nav-link">
        404 page
      </Link>
    </li>
    <li class="nav-item">
      <Link href="sign-in.html" class="nav-link">
        Sign In
      </Link>
    </li>
    <li class="nav-item">
      <Link href="sign-up.html" class="nav-link">
        Sign Up
      </Link>
    </li>
    <li class="nav-item">
      <Link href="terms-condition.html" class="nav-link">
        Terms & Conditions
      </Link>
    </li>
    <li class="nav-item">
      <Link href="privacy-policy.html" class="nav-link">
        Privacy Policy
      </Link>
    </li>
    <li class="nav-item">
      <Link href="coming-soon.html" class="nav-link">
        Coming Soon
      </Link>
    </li>
  </ul>
</li> */}
    <li class="nav-item">
      <Link href="Services" class="nav-link">
        Services
        {/* <i class="bx bx-plus"></i> */}
      </Link>
      {/* <ul class="dropdown-menu">
    <li class="nav-item">
      <Link href="services" class="nav-link">
        Services
      </Link>
    </li>
    <li class="nav-item">
      <Link href="service-details.html" class="nav-link">
        Service Details
      </Link>
    </li>
  </ul> */}
    </li>

    <li class="nav-item">
      <Link href="blog" class="nav-link">
        Blog
        {/* <i class="bx bx-plus"></i> */}
      </Link>
      {/* <ul class="dropdown-menu">
    <li class="nav-item">
      <Link href="blog.html" class="nav-link">
        Blog
      </Link>
    </li>
    <li class="nav-item">
      <Link href="blog-details.html" class="nav-link">
        Blog Details
      </Link>
    </li>
  </ul> */}
    </li>
    <li class="nav-item">
      <Link href="contact" class="nav-link">
        Contact
      </Link>
    </li>
  </ul>
);
