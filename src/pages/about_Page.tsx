import React from "react";
import {
  Award,
  Users,
  Globe,
  MapPin,
  Plane,
  Heart,
  Shield,
  Star,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Clock,
  Headphones,
  CreditCard,
  Compass,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { useTheme } from "../components/ThemeContext";

const AboutPage = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const { isDarkMode, setIsDarkMode, themeClasses } = useTheme();

  React.useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { number: "500+", label: "Happy Travelers", icon: Users },
    { number: "50+", label: "Destinations", icon: Globe },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "98%", label: "Satisfaction Rate", icon: Star },
  ];

  const whyChooseUsFeatures = [
    {
      icon: Shield,
      title: "Trusted & Reliable",
      description:
        "Fully licensed travel company with years of proven track record in delivering exceptional travel experiences.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support to assist you before, during, and after your journey.",
    },
    {
      icon: CreditCard,
      title: "Best Price Guarantee",
      description:
        "We offer competitive pricing and will match any legitimate lower price you find elsewhere.",
    },
    {
      icon: Compass,
      title: "Expert Planning",
      description:
        "Our experienced travel consultants create personalized itineraries tailored to your preferences.",
    },
    {
      icon: Clock,
      title: "Quick Response",
      description:
        "Fast booking confirmations and immediate assistance for any travel-related queries.",
    },
    {
      icon: Heart,
      title: "Personalized Service",
      description:
        "Every trip is crafted with care, attention to detail, and your unique needs in mind.",
    },
  ];

  const services = [
    {
      name: "Airline Tickets",
      icon: Plane,
      description:
        "Book flights to destinations worldwide with competitive rates",
    },
    {
      name: "Hotel Bookings",
      icon: MapPin,
      description: "From luxury resorts to budget-friendly accommodations",
    },
    {
      name: "Car Rental Services",
      icon: CheckCircle,
      description: "Reliable vehicle rentals for your travel convenience",
    },
    {
      name: "Activities & Tours",
      icon: Heart,
      description:
        "Curated experiences and guided tours for memorable adventures",
    },
    {
      name: "Airport Transfers",
      icon: ArrowRight,
      description: "Seamless transportation to and from airports",
    },
    {
      name: "Visa Applications",
      icon: Shield,
      description: "Complete visa assistance and documentation support",
    },
    {
      name: "Travel Insurance",
      icon: CheckCircle,
      description: "Comprehensive coverage for peace of mind",
    },
    {
      name: "Custom Packages",
      icon: Star,
      description: "Tailored travel packages designed just for you",
    },
  ];

  return (
    <div
      className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} overflow-hidden transition-colors duration-300`}
    >
      {/* Animated Background */}
      <div
        className={`fixed inset-0 ${themeClasses.backgroundGradient} transition-all duration-300`}
      >
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]"
              : "bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.05),transparent_50%)]"
          }`}
        ></div>
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-[radial-gradient(circle_at_70%_80%,rgba(147,197,253,0.1),transparent_50%)]"
              : "bg-[radial-gradient(circle_at_70%_80%,rgba(147,197,253,0.05),transparent_50%)]"
          }`}
        ></div>
        <div
          className={`absolute w-96 h-96 bg-gradient-to-r ${
            isDarkMode
              ? "from-blue-500/20 to-blue-600/20"
              : "from-blue-500/10 to-blue-600/10"
          } rounded-full blur-3xl transition-all duration-1000 ease-out`}
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Navigation */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Hero Banner Section - Half height like landing page */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="About Us - Beautiful travel destination"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
              Crafting extraordinary travel experiences across Zimbabwe and
              beyond
            </p>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div
                className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${
                  isDarkMode
                    ? "from-blue-500/20 to-blue-600/20 border-blue-500/30"
                    : "from-blue-500/10 to-blue-600/10 border-blue-500/20"
                } rounded-full border backdrop-blur-sm mb-6`}
              >
                <Award className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-sm font-semibold text-blue-400 tracking-wide uppercase">
                  Viable Travel & Tours
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                <span className={themeClasses.text}>
                  Your trusted partner in
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  extraordinary journeys
                </span>
              </h2>

              <p
                className={`text-lg ${themeClasses.textSecondary} mb-6 leading-relaxed`}
              >
                Viable Travel & Tours is a registered and licensed travel
                company based in Zimbabwe, dedicated to creating unforgettable
                travel experiences. We specialize in comprehensive travel
                solutions that cater to individual travelers, groups, and
                corporate clients.
              </p>

              <p
                className={`text-lg ${themeClasses.textSecondary} mb-8 leading-relaxed`}
              >
                Our comprehensive services include airline tickets, luxury hotel
                bookings, reliable car rental services, exciting activities and
                tours, seamless airport transfers, visa application assistance,
                and comprehensive travel insurance - all designed to make your
                journey smooth and memorable.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span
                    className={`text-sm font-medium ${themeClasses.textSecondary}`}
                  >
                    Licensed & Registered
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span
                    className={`text-sm font-medium ${themeClasses.textSecondary}`}
                  >
                    5+ Years Experience
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span
                    className={`text-sm font-medium ${themeClasses.textSecondary}`}
                  >
                    500+ Happy Clients
                  </span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Travel planning consultation"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-semibold">
                    Professional Travel Consultation
                  </p>
                  <p className="text-sm opacity-90">
                    Personalized service for every journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className={themeClasses.text}>Our</span>
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent ml-2">
                Foundation
              </span>
            </h2>
            <p
              className={`text-lg ${themeClasses.textSecondary} max-w-2xl mx-auto`}
            >
              Built on strong values and clear direction for the future
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div
              className={`p-8 rounded-3xl backdrop-blur-sm border ${
                isDarkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white/50 border-gray-200/50"
              } hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group`}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-500">Our Vision</h3>
              </div>
              <p
                className={`text-center ${themeClasses.textSecondary} leading-relaxed`}
              >
                To become the extraordinary provider of local and international
                trip planning and packages for individual travelers, group
                travelers, and corporates, setting new standards in the travel
                industry.
              </p>
            </div>

            <div
              className={`p-8 rounded-3xl backdrop-blur-sm border ${
                isDarkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white/50 border-gray-200/50"
              } hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group`}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-500">
                  Our Mission
                </h3>
              </div>
              <p
                className={`text-center ${themeClasses.textSecondary} leading-relaxed`}
              >
                Crafting successful trips with extraordinary memories that last
                a lifetime, while providing exceptional service and personalized
                attention to every traveler's unique needs.
              </p>
            </div>

            <div
              className={`p-8 rounded-3xl backdrop-blur-sm border ${
                isDarkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white/50 border-gray-200/50"
              } hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group`}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-500">
                  Our Experience
                </h3>
              </div>
              <p
                className={`text-center ${themeClasses.textSecondary} leading-relaxed`}
              >
                Our founders bring extensive experience in the travel industry,
                ensuring we provide excellent services tailored to your unique
                travel needs with deep market knowledge and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className={themeClasses.text}>Why Choose</span>
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent ml-2">
                Viable Travel & Tours?
              </span>
            </h2>
            <p
              className={`text-lg ${themeClasses.textSecondary} max-w-2xl mx-auto`}
            >
              Discover what sets us apart and makes us your ideal travel partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsFeatures.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-3xl backdrop-blur-sm border ${
                  isDarkMode
                    ? "bg-white/5 border-white/10"
                    : "bg-white/50 border-gray-200/50"
                } hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-500 mb-3">
                    {feature.title}
                  </h3>
                  <p
                    className={`${themeClasses.textSecondary} text-sm leading-relaxed`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner Section - Similar to first banner */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Statistics background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Journey in Numbers
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Trusted by hundreds of travelers worldwide, creating unforgettable
              experiences
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/15 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-white group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold mb-2 text-white">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-white/80 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Updated Design */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className={themeClasses.text}>Our</span>
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent ml-2">
                Services
              </span>
            </h2>
            <p
              className={`text-lg ${themeClasses.textSecondary} max-w-2xl mx-auto`}
            >
              Comprehensive travel solutions designed to meet all your travel
              needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl backdrop-blur-sm border ${
                  isDarkMode
                    ? "bg-white/5 border-white/10"
                    : "bg-white/50 border-gray-200/50"
                } hover:shadow-xl transition-all duration-300 transform hover:scale-105 group`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-500 mb-2">
                    {service.name}
                  </h3>
                  <p
                    className={`${themeClasses.textSecondary} text-xs leading-relaxed`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`p-10 rounded-3xl backdrop-blur-sm border ${
              isDarkMode
                ? "bg-white/5 border-white/10"
                : "bg-white/50 border-gray-200/50"
            } shadow-2xl`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              <span className={themeClasses.text}>Ready to start your</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                extraordinary journey?
              </span>
            </h2>

            <p
              className={`text-base ${themeClasses.textSecondary} mb-8 leading-relaxed`}
            >
              Let our experienced team help you create unforgettable travel
              memories. Contact us today to start planning your perfect trip.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className={`relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-2xl text-base font-bold transition-all transform hover:scale-110 shadow-2xl ${themeClasses.glowEffect} overflow-hidden group`}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-500/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
              </button>

              <button
                className={`px-8 py-3 rounded-2xl text-base font-bold border-2 ${
                  isDarkMode
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                } transition-all transform hover:scale-105`}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} themeClasses={themeClasses} />
    </div>
  );
};

export default AboutPage;
