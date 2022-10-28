import Head from "next/head";
import Image from "next/image";
import About from "../components/About/About";
import Area from "../components/Area/Area";
import Blog from "../components/Blog/Blog";
import Brand from "../components/Brand/Brand";
import Footer from "../components/Common/Footer/Footer";
import Header from "../components/Common/Header/Header";
import Hero from "../components/Hero/Hero";
import Mission from "../components/Mission/Mission";
import PricingPlan from "../components/PricingPlan/PricingPlan";
import Progress from "../components/Progress/Progress";
import SeoScore from "../components/SeoScore/SeoScore";
import Service from "../components/Service/Service";
import Specilist from "../components/Specilist/Specilist";
import StartWithUs from "../components/StartProject/StartWithUs";
import WorkingProcess from "../components/WorkingProcess/WorkingProcess";
import WorkingProcessNew from "../components/WorkingProcess/WorkingProcessNew";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Brand />
      <About />
      <Area />
      <Progress />
      <SeoScore />
      <Service />
      <WorkingProcess />
      <WorkingProcessNew />
      {/* <PricingPlan /> */}
      <Specilist />
      <Blog />
      <Mission />
      <StartWithUs />
      <Footer />
    </>
  );
}
