import { Banner } from "../../components/Banner/Banner";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ContentSection } from "../../components/ContentSection/ContentSection";

export const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <ContentSection />
      <Footer />
    </>
  );
};
