import { Helmet } from "react-helmet-async";
import Plants from "../../components/Home/Plants";
import Banner from "../../components/Home/Banner";
import InfoSection from "../../components/Home/InfoSection";
import InvestSection from "../../components/Home/InvestSection";
import TestimonialSection from "../../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Elite Property | Buy Your Best Property</title>
      </Helmet>
      <Banner></Banner>
      <InfoSection></InfoSection>
      <InvestSection></InvestSection>
      <TestimonialSection></TestimonialSection>
      <Plants></Plants>
    </div>
  );
};

export default Home;
