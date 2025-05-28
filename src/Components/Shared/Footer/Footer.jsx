import logo from "../../../assets/images/logo.jpg";
// className="px-4 divide-y  text-gray-800 relative bottom-0 left-0"
const Footer = () => {
  return (
    <footer className="bg-purple-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div>
            <img className="w-60 h-24 rounded-xl" src={logo} alt="logo" />
            {/* <h2 className="text-2xl font-bold text-white">ELITE PROPERTY</h2> */}
            <p className="mt-4 text-start">
              ELITE PROPERTY is a platform offering anyone the ability to invest
              and potentially earn money from property at the click of a button
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons */}
              <a href="#" className="hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Affiliate
                </a>
              </li>
            </ul>
          </div>

          {/* Invest Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Invest</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Browse Properties
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Loan Application
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Property Alerts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Insights Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Insights</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  List Your Property
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Loyalty Program
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Key Risks
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; ELITE PROPERTY | Designed by{" "}
            <a href="#" className="text-white text-xl hover:underline">
              Tonmoy Sutradhar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
