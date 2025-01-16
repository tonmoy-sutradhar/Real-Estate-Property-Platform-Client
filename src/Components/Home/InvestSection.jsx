import img from "../../assets/images/man.jpg";

const InvestSection = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left: Illustration */}
        <div className="md:w-1/2">
          <img
            src={img}
            alt="Real Estate Illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Right: Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h4 className="text-purple-700 font-semibold uppercase text-sm mb-2">
            Real exposure to the real estate market
          </h4>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
            You Invest. <span className="text-purple-700">Revest</span> Does the
            Rest
          </h1>
          <p className="text-gray-600 mb-8">
            Transparent Real Estate Investing Through Revest. Join us and
            experience a smarter, better way to invest in real estate.
          </p>
          <button className="bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md text-lg hover:bg-purple-800 transition">
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestSection;
