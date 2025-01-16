import extra1 from "../../assets/images/extra1.jpg";
import extra2 from "../../assets/images/extra2.jpg";
import extra3 from "../../assets/images/extra4.png";
import extra4 from "../../assets/images/extra6.png";

const InfoSection = () => {
  return (
    <div className="bg-white text-center py-16 px-6">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto">
        <h4 className="text-purple-700 font-semibold uppercase text-sm mb-2">
          Designed for smarter property investments
        </h4>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Explore hassle-free real estate opportunities with maximum returns.
        </h1>
        <p className="text-gray-600 mb-12">
          Our platform connects you to high-quality properties, making property
          investments simple, transparent, and rewarding.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-blue-200 rounded-lg shadow-md p-6 flex items-center">
          <img
            src={extra1}
            alt="Diverse Property Options"
            className="w-16 h-16 mr-4 rounded-full"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-800">
              Diverse Property Options
            </h3>
            <p className="text-gray-600">
              Choose from a range of residential, commercial, and rental
              properties.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-200 rounded-lg shadow-md p-6 flex items-center">
          <img
            src={extra2}
            alt="Secure Transactions"
            className="w-16 h-16 mr-4 rounded-full"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-800">
              Secure Transactions
            </h3>
            <p className="text-gray-600">
              Ensure transparency and trust with legally compliant and secure
              transactions.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-blue-200 rounded-lg shadow-md p-6 flex items-center">
          <img
            src={extra3}
            alt="Detailed Insights"
            className="w-16 h-16 mr-4 rounded-full"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-800">
              Detailed Property Insights
            </h3>
            <p className="text-gray-600">
              Access complete property details and market data to make informed
              decisions.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-blue-200 rounded-lg shadow-md p-6 flex items-center">
          <img
            src={extra4}
            alt="Customer Support"
            className="w-16 h-16 mr-4 rounded-full"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-800">
              24/7 Customer Support
            </h3>
            <p className="text-gray-600">
              Get expert assistance for your investment journey at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
