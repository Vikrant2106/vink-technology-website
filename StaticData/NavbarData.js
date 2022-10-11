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
    url: "#",
    isActive: "active",
    icon: <i className="bx bx-plus"></i>,
    child: [
      {
        name: "Service",
        icon: "",
        url: "service",
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
      <a href="/" className="nav-link">
        Home
        {/* <i className="bx bx-plus"></i> */}
      </a>
      {/* <ul className="dropdown-menu">
    <li className="nav-item">
      <a href="index.html" className="nav-link active">
        SEO Agency
      </a>
    </li>
    <li className="nav-item">
      <a href="index-2.html" className="nav-link">
        {" "}
        AI Startup{" "}
      </a>
    </li>
    <li className="nav-item">
      <a href="index-3.html" className="nav-link">
        Machine Learning
      </a>
    </li>
  </ul> */}
    </li>
    <li className="nav-item">
      <a href="about" className="nav-link">
        {" "}
        About{" "}
      </a>
    </li>
    {/* <li className="nav-item">
  <a href="#" className="nav-link">
    Pages
    <i className="bx bx-plus"></i>
  </a>
  <ul className="dropdown-menu">
    <li className="nav-item">
      <a href="team.html" className="nav-link">
        {" "}
        Team{" "}
      </a>
    </li>
    <li className="nav-item">
      <a href="pricing.html" className="nav-link">
        Pricing Table
      </a>
    </li>
    <li className="nav-item">
      <a href="faq.html" className="nav-link">
        {" "}
        FAQ{" "}
      </a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link">
        Courses
        <i className="bx bx-plus"></i>
      </a>
      <ul className="dropdown-menu">
        <li className="nav-item">
          <a href="courses.html" className="nav-link">
            {" "}
            Courses{" "}
          </a>
        </li>
        <li className="nav-item">
          <a href="course-details.html" className="nav-link">
            Course Details
          </a>
        </li>
      </ul>
    </li>
    <li className="nav-item">
      <a href="testimonials.html" className="nav-link">
        Testimonials
      </a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link">
        Case study
        <i className="bx bx-plus"></i>
      </a>
      <ul className="dropdown-menu">
        <li className="nav-item">
          <a href="case-study.html" className="nav-link">
            Case study
          </a>
        </li>
        <li className="nav-item">
          <a href="case-details.html" className="nav-link">
            Case study Details
          </a>
        </li>
      </ul>
    </li>
    <li className="nav-item">
      <a href="404.html" className="nav-link">
        {" "}
        404 page{" "}
      </a>
    </li>
    <li className="nav-item">
      <a href="sign-in.html" className="nav-link">
        {" "}
        Sign In{" "}
      </a>
    </li>
    <li className="nav-item">
      <a href="sign-up.html" className="nav-link">
        {" "}
        Sign Up{" "}
      </a>
    </li>
    <li className="nav-item">
      <a href="terms-condition.html" className="nav-link">
        Terms & Conditions
      </a>
    </li>
    <li className="nav-item">
      <a href="privacy-policy.html" className="nav-link">
        Privacy Policy
      </a>
    </li>
    <li className="nav-item">
      <a href="coming-soon.html" className="nav-link">
        Coming Soon
      </a>
    </li>
  </ul>
</li> */}
    <li className="nav-item">
      <a href="services" className="nav-link">
        Services
        {/* <i className="bx bx-plus"></i> */}
      </a>
      {/* <ul className="dropdown-menu">
    <li className="nav-item">
      <a href="services.html" className="nav-link">
        {" "}
        Services{" "}
      </a>
    </li>
    <li className="nav-item">
      <a href="service-details.html" className="nav-link">
        Service Details
      </a>
    </li>
  </ul> */}
    </li>

    <li className="nav-item">
      <a href="blog" className="nav-link">
        Blog
        {/* <i className="bx bx-plus"></i> */}
      </a>
      {/* <ul className="dropdown-menu">
    <li className="nav-item">
      <a href="blog.html" className="nav-link">
        {" "}
        Blog{" "}
      </a>
    </li>
    <li className="nav-item">
      <a href="blog-details.html" className="nav-link">
        Blog Details
      </a>
    </li>
  </ul> */}
    </li>
    <li className="nav-item">
      <a href="contact" className="nav-link">
        Contact{" "}
      </a>
    </li>
  </ul>
);

export const outerNavbarHTML = (
  <ul class="navbar-nav m-auto">
    <li class="nav-item">
      <a href="/" class="nav-link">
        Home
        {/* <i class="bx bx-plus"></i> */}
      </a>
      {/* <ul class="dropdown-menu">
    <li class="nav-item">
      <a href="index.html" class="nav-link">
        SEO Agency
      </a>
    </li>
    <li class="nav-item">
      <a href="index-2.html" class="nav-link">
        AI Startup
      </a>
    </li>
    <li class="nav-item">
      <a href="index-3.html" class="nav-link">
        Machine Learning
      </a>
    </li>
  </ul> */}
    </li>
    <li class="nav-item">
      <a href="about" class="nav-link active">
        About
      </a>
    </li>
    {/* <li class="nav-item">
  <a href="#" class="nav-link">
    Pages
    <i class="bx bx-plus"></i>
  </a>
  <ul class="dropdown-menu">
    <li class="nav-item">
      <a href="team.html" class="nav-link">
        Team
      </a>
    </li>
    <li class="nav-item">
      <a href="pricing.html" class="nav-link">
        Pricing Table
      </a>
    </li>
    <li class="nav-item">
      <a href="faq.html" class="nav-link">
        FAQ
      </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">
        Courses
        <i class="bx bx-plus"></i>
      </a>
      <ul class="dropdown-menu">
        <li class="nav-item">
          <a href="courses.html" class="nav-link">
            Courses
          </a>
        </li>
        <li class="nav-item">
          <a href="course-details.html" class="nav-link">
            Course Details
          </a>
        </li>
      </ul>
    </li>
    <li class="nav-item">
      <a href="testimonials.html" class="nav-link">
        Testimonials
      </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">
        Case study
        <i class="bx bx-plus"></i>
      </a>
      <ul class="dropdown-menu">
        <li class="nav-item">
          <a href="case-study.html" class="nav-link">
            Case study
          </a>
        </li>
        <li class="nav-item">
          <a href="case-details.html" class="nav-link">
            Case study Details
          </a>
        </li>
      </ul>
    </li>
    <li class="nav-item">
      <a href="404.html" class="nav-link">
        404 page
      </a>
    </li>
    <li class="nav-item">
      <a href="sign-in.html" class="nav-link">
        Sign In
      </a>
    </li>
    <li class="nav-item">
      <a href="sign-up.html" class="nav-link">
        Sign Up
      </a>
    </li>
    <li class="nav-item">
      <a href="terms-condition.html" class="nav-link">
        Terms & Conditions
      </a>
    </li>
    <li class="nav-item">
      <a href="privacy-policy.html" class="nav-link">
        Privacy Policy
      </a>
    </li>
    <li class="nav-item">
      <a href="coming-soon.html" class="nav-link">
        Coming Soon
      </a>
    </li>
  </ul>
</li> */}
    <li class="nav-item">
      <a href="Services" class="nav-link">
        Services
        {/* <i class="bx bx-plus"></i> */}
      </a>
      {/* <ul class="dropdown-menu">
    <li class="nav-item">
      <a href="services" class="nav-link">
        Services
      </a>
    </li>
    <li class="nav-item">
      <a href="service-details.html" class="nav-link">
        Service Details
      </a>
    </li>
  </ul> */}
    </li>

    <li class="nav-item">
      <a href="blog" class="nav-link">
        Blog
        {/* <i class="bx bx-plus"></i> */}
      </a>
      {/* <ul class="dropdown-menu">
    <li class="nav-item">
      <a href="blog.html" class="nav-link">
        Blog
      </a>
    </li>
    <li class="nav-item">
      <a href="blog-details.html" class="nav-link">
        Blog Details
      </a>
    </li>
  </ul> */}
    </li>
    <li class="nav-item">
      <a href="contact" class="nav-link">
        Contact
      </a>
    </li>
  </ul>
);
