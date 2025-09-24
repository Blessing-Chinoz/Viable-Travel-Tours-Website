import React from "react";
import { Star, Shield, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../components/ThemeContext";

// Import the logo from assets
import Logo from "../assets/images/tours.png";

interface FooterProps {
  isDarkMode: boolean;
  themeClasses: {
    cardBg: string;
    border: string;
    text: string;
    textSecondary: string;
    textMuted: string;
    glowEffect: string;
  };
}

const Footer: React.FC<FooterProps> = () => {
  const { isDarkMode, themeClasses } = useTheme()
  const navigate = useNavigate();

  return (
    <footer
      className={`${themeClasses.cardBg} backdrop-blur-xl border-t ${themeClasses.border} py-8`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Company Name Section */}
        <div className="flex items-center justify-center mb-8">
          <img
            src={Logo}
            alt="Viable Travel Tours Logo"
            className="h-12 w-auto mr-3"
          />
          <span
            className={`text-2xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Viable Travel Tours
          </span>
        </div>

        {/* Company Description */}
        <div className="text-center mb-8">
          <p
            className={`${themeClasses.textSecondary} max-w-xl mx-auto leading-relaxed`}
          >
            Creating unforgettable travel experiences and memories that last a
            lifetime.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <Star className="w-4 h-4" />, label: "4.9 Rating" },
              {
                icon: <Shield className="w-4 h-4" />,
                label: "Trusted & Secure",
              },
              {
                icon: <Clock className="w-4 h-4" />,
                label: "24/7 Support",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 ${themeClasses.textMuted} text-sm`}
              >
                <div className="text-blue-500">{item.icon}</div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className={`text-lg font-semibold ${themeClasses.text} mb-4`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms of Service", path: "/terms" },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(link.path)}
                    className={`${themeClasses.textSecondary} hover:${themeClasses.text} hover:text-blue-500 transition-colors duration-300 text-sm`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className={`text-lg font-semibold ${themeClasses.text} mb-4`}>
              Services
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Flight Bookings", path: "/services/flights" },
                { name: "Hotel Bookings", path: "/services/hotels" },
                { name: "Activities", path: "/services/activities" },
                { name: "Visa Applications", path: "/services/visa" },
              ].map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(service.path)}
                    className={`${themeClasses.textSecondary} hover:${themeClasses.text} hover:text-blue-500 transition-colors duration-300 text-sm`}
                  >
                    {service.name}
                  </button>
                </li>
              ))}
              <li>
                <span className={`${themeClasses.textMuted} text-sm italic`}>
                  And many more...
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className={`text-lg font-semibold ${themeClasses.text} mb-4`}>
              Contact & Support
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate("/contact")}
                  className={`${themeClasses.textSecondary} hover:${themeClasses.text} hover:text-blue-500 transition-colors duration-300 text-sm`}
                >
                  Contact Support
                </button>
              </li>
              <li className="pt-2">
                <div className={`${themeClasses.textMuted} text-xs space-y-1`}>
                  <div>
                    <span className="font-medium">Email:</span> viabletravels@gmail.com
                  </div>
                  <div>
                    <span className="font-medium">Phone:</span> +263773640506
                  </div>
                  <div>
                    <span className="font-medium">Alt:</span> +263783689114 / +263713484663
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          className={`border-t ${themeClasses.border} mt-8 pt-4 text-center`}
        >
          <p className={`${themeClasses.textMuted} text-xs`}>
            © 2025 Viable Travel Tours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;