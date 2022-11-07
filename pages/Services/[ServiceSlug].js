import Header from "../../components/AllPagesHeader/Header/Header";
import Footer from "../../components/Common/Footer/Footer";
import { useRouter } from "next/router";
import ServiceDetails from "../../components/Services/ServiceDetails";
import ServicePage from "../../components/Services/ServicePage";

function ServiceSlug() {
  const router = useRouter();
  return (
    <>
      <Header />
      <ServicePage slug={router.query.ServiceSlug} />
      <Footer />
    </>
  );
}

export default ServiceSlug;
