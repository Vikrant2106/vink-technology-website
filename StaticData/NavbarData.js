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
    url: "/about",
    isActive: "active",
  },
  {
    name: "Services",
    url: "",
    isActive: "active",
    icon: <i className="bx bx-plus"></i>,
    child: [
      {
        name: "Mobile Application",
        id: 1,
        icon: "",
        url: "/Services/Mobile-Application",
        child: [],
        isActive: "active",
      },
      {
        name: "Website Development",
        icon: "",
        id: 2,

        url: "/Services/Website-Development",
        child: [],
        isActive: "active",
      },
      {
        name: "Designing",
        icon: "",
        id: 3,

        url: "/Services/Designing",
        child: [],
        isActive: "active",
      },
      {
        name: "Marketing",
        icon: "",
        id: 4,

        url: "/Services/Marketing",
        child: [],
        isActive: "active",
      },
      {
        name: "SEO",
        icon: "",
        id: 5,

        url: "/Services/SEO",
        child: [],
        isActive: "active",
      },
    ],
  },
  {
    name: "Blog",
    child: [],
    icon: "",
    url: "/blog",
    isActive: "active",
  },
  {
    name: "Contact",
    child: [],
    icon: "",
    url: "/contact",
    isActive: "active",
  },
];
