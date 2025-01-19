import { Link } from "react-router-dom";
import banner from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="bg-gray-50 md:flex items-center justify-between md:-mt-2">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Real Estate Investment For{" "}
          <span className="text-purple-600">Everyone</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 pl-2">
          Buy shares of rental properties, earn monthly income, and watch your
          money grow.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700">
            <Link to="/all-property"> Start Exploring</Link>
          </button>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg shadow-md border border-purple-600 hover:bg-purple-50">
            Get Funding
          </button>
        </div>
      </div>

      <div className="md:mt-0 mt-3">
        <img src={banner} alt="Real Estate Illustration" className="w-full " />
      </div>
    </div>
  );
};

export default Banner;
