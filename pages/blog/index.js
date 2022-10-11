import React from "react";
import BlogMultiple from "../../components/Blog/BlogMultiple";
import Footer from "../../components/Common/Footer/Footer";
import Header from "../../components/AllPagesHeader/Header/Header";

export default function index() {
  return (
    <div>
      <Header />
      <BlogMultiple />
      <Footer />
    </div>
  );
}
