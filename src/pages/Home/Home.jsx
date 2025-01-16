import { Helmet } from "react-helmet-async";
import Plants from "../../components/Home/Plants";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Elite Property | Buy Your Best Property</title>
      </Helmet>
      <Plants />
    </div>
  );
};

export default Home;
