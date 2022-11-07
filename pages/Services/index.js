import React from "react";
import Header from "../../components/AllPagesHeader/Header/Header";
import Footer from "../../components/Common/Footer/Footer";
import { useRouter } from "next/router";
import ServiceDetails from "../../components/Services/ServiceDetails";
import ServicePage from "../../components/Services/ServicePage";
export default function index() {
  const router = useRouter();
  return (
    <>
      <Header />
      <ServicePage slug={router.query.ServiceSlug} />
      <Footer />
    </>
  );
}
