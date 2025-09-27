import React from "react";
import { useNavigate } from 'react-router-dom';
import {
  Plane,
  Building,
  FileText,
  Shield,
  Car,
  MapPin,
  Route,
  Package,
  ArrowRight,
  Clock,
  Star,
  CheckCircle,
  Phone,
  Mail,
  Globe,
  Heart,
  Camera,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { useTheme } from "../components/ThemeContext";


const ServicesPage = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [activeService] = React.useState<number | null>(null);
  const { isDarkMode, setIsDarkMode, themeClasses } = useTheme();
const navigate = useNavigate();

  React.useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      id: 1,
      title: "Flight Bookings",
      icon: Plane,
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shortDescription:
        "Book flights to destinations worldwide with competitive rates",
      fullDescription:
        "Our flight booking service connects you to destinations across the globe with access to major airlines and competitive pricing. We handle everything from domestic flights within Zimbabwe to international connections, ensuring you get the best deals and most convenient schedules.",
      features: [
        "Access to 500+ airlines worldwide",
        "Best price guarantee",
        "24/7 booking support",
        "Flexible booking options",
        "Group booking discounts",
        "Real-time flight tracking",
      ],
      benefits: "Save time and money with our expert flight booking service",
      pricing: "Competitive rates with no hidden fees",
    },
    {
      id: 2,
      title: "Hotel Bookings",
      icon: Building,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shortDescription: "From luxury resorts to budget-friendly accommodations",
      fullDescription:
        "Whether you're looking for a luxury resort experience or comfortable budget accommodation, our extensive network of hotel partners ensures you find the perfect place to stay. We offer personalized recommendations based on your preferences and budget.",
      features: [
        "Luxury hotels & resorts",
        "Budget-friendly options",
        "Boutique accommodations",
        "All-inclusive packages",
        "Room upgrades available",
        "Instant confirmation",
      ],
      benefits: "Handpicked accommodations for every budget and preference",
      pricing: "Best available rates with exclusive deals",
    },
    {
      id: 3,
      title: "Activities & Tours",
      icon: Camera,
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shortDescription:
        "Curated experiences and guided tours for memorable adventures",
      fullDescription:
        "Discover the beauty and culture of your destination with our carefully curated activities and tours. From wildlife safaris in Zimbabwe to cultural experiences and adventure activities, we offer unforgettable experiences that create lasting memories.",
      features: [
        "Wildlife safaris",
        "Cultural tours",
        "Adventure activities",
        "City sightseeing",
        "Private guided tours",
        "Group experiences",
      ],
      benefits:
        "Expert local guides and unique experiences you won't find elsewhere",
      pricing: "Flexible packages from budget to premium experiences",
    },
    {
      id: 4,
      title: "Visa Applications",
      icon: FileText,
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shortDescription: "Complete visa assistance and documentation support",
      fullDescription:
        "Navigate the complex world of visa requirements with our comprehensive assistance service. Our experienced team guides you through the entire application process, ensuring all documentation is correct and submitted on time.",
      features: [
        "Visa requirement consultation",
        "Document preparation",
        "Application submission",
        "Status tracking",
        "Express processing options",
        "Embassy liaison services",
      ],
      benefits: "Stress-free visa processing with expert guidance",
      pricing: "Service fees vary by destination and visa type",
    },
    {
      id: 5,
      title: "Travel Insurance",
      icon: Shield,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shortDescription: "Comprehensive coverage for peace of mind",
      fullDescription:
        "Travel with confidence knowing you're protected with our comprehensive travel insurance options. We offer various coverage levels to protect against trip cancellations, medical emergencies, lost luggage, and more.",
      features: [
        "Medical coverage",
        "Trip cancellation protection",
        "Lost luggage coverage",
        "Emergency evacuation",
        "24/7 assistance hotline",
        "Flexible coverage options",
      ],
      benefits: "Complete peace of mind for any unexpected situations",
      pricing: "Affordable premiums starting from basic coverage",
    },
    {
      id: 6,
      title: "Airport Transfers",
      icon: Car,
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shortDescription: "Seamless transportation to and from airports",
      fullDescription:
        "Start and end your journey stress-free with our reliable airport transfer service. We offer comfortable, punctual transportation with professional drivers who know the best routes and will get you to your destination safely.",
      features: [
        "Professional drivers",
        "Luxury vehicles available",
        "Flight monitoring",
        "Meet & greet service",
        "Child seats available",
        "24/7 availability",
      ],
      benefits: "Reliable, comfortable, and hassle-free airport transportation",
      pricing: "Fixed rates with no surge pricing",
    },
    {
      id: 7,
      title: "Travel Itinerary",
      icon: Route,
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shortDescription: "Personalized travel planning and itinerary creation",
      fullDescription:
        "Let our travel experts create the perfect itinerary tailored to your interests, budget, and timeframe. We handle all the details so you can focus on enjoying your trip, with detailed day-by-day plans and local recommendations.",
      features: [
        "Personalized planning",
        "Day-by-day itineraries",
        "Local recommendations",
        "Restaurant reservations",
        "Activity scheduling",
        "Mobile-friendly format",
      ],
      benefits:
        "Expertly crafted itineraries that maximize your travel experience",
      pricing: "Custom pricing based on trip complexity and duration",
    },
    {
      id: 8,
      title: "Car Hire",
      icon: MapPin,
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shortDescription: "Reliable vehicle rentals for your travel convenience",
      fullDescription:
        "Explore your destination at your own pace with our reliable car rental service. We offer a wide range of vehicles from economy cars to luxury SUVs, all maintained to the highest standards with comprehensive insurance coverage.",
      features: [
        "Wide vehicle selection",
        "Comprehensive insurance",
        "GPS navigation included",
        "24/7 roadside assistance",
        "Flexible rental periods",
        "Airport pickup/drop-off",
      ],
      benefits: "Freedom to explore with reliable, well-maintained vehicles",
      pricing: "Competitive daily and weekly rates available",
    },
    {
      id: 9,
      title: "Holiday Packages",
      icon: Package,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shortDescription: "All-inclusive vacation packages for worry-free travel",
      fullDescription:
        "Enjoy hassle-free holidays with our all-inclusive packages that combine flights, accommodation, activities, and more. Perfect for families, couples, or solo travelers looking for a complete vacation solution with everything arranged in advance.",
      features: [
        "All-inclusive packages",
        "Family-friendly options",
        "Romantic getaways",
        "Adventure packages",
        "Cultural experiences",
        "Customizable add-ons",
      ],
      benefits: "Everything included for a stress-free vacation experience",
      pricing:
        "Package deals with significant savings over individual bookings",
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

      {/* Hero Banner Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Our Services - Comprehensive travel solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Heart className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm font-semibold text-blue-400 tracking-wide uppercase">
                Comprehensive Travel Solutions
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
              From flight bookings to complete holiday packages, we offer
              everything you need for an extraordinary travel experience
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}

      {/* Services Grid Section */}
      {/* Services Grid Section - Replace the existing services grid section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className={themeClasses.text}>Explore Our</span>
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent ml-2">
                Travel Services
              </span>
            </h2>
            <p
              className={`text-lg ${themeClasses.textSecondary} max-w-2xl mx-auto`}
            >
              Discover our comprehensive range of travel services designed to
              make your journey exceptional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`group relative overflow-hidden rounded-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer ${
                  isDarkMode
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-white/70 border-gray-200/50 hover:bg-white/90"
                }`}
               onClick={() => navigate(`/services/${service.id}`)}
              >
                {/* Background Image with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

                  {/* Floating Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Service Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed line-clamp-2">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  {activeService === service.id ? (
                    // Expanded Content
                    <div className="space-y-6 animate-fadeIn">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-500 mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Service Details
                        </h4>
                        <p
                          className={`${themeClasses.textSecondary} leading-relaxed text-sm mb-4`}
                        >
                          {service.fullDescription}
                        </p>
                      </div>

                      {/* Features Grid */}
                      <div>
                        <h5 className="font-semibold text-blue-500 mb-3 text-sm">
                          Key Features
                        </h5>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-sm"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                              <span className={themeClasses.textSecondary}>
                                {feature}
                              </span>
                            </div>
                          ))}
                          {service.features.length > 4 && (
                            <div className="flex items-center text-sm text-blue-500 font-medium mt-1">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                              +{service.features.length - 4} more features
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4">
                        <button
                          className={`flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all transform hover:scale-105 ${themeClasses.glowEffect} flex items-center justify-center group`}
                        >
                          Get Quote
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                          className={`px-4 py-2.5 rounded-xl text-sm font-semibold border ${
                            isDarkMode
                              ? "border-white/20 text-white hover:bg-white/10"
                              : "border-gray-300 text-gray-700 hover:bg-gray-50"
                          } transition-all flex items-center justify-center`}
                        >
                          <Phone className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    // Collapsed Content
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold text-blue-500 bg-blue-500/10 px-2 py-1 rounded-full">
                            AVAILABLE
                          </span>
                          <div className="flex items-center">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-yellow-400 ml-1">
                              Premium
                            </span>
                          </div>
                        </div>
                        <p
                          className={`text-xs ${themeClasses.textSecondary} leading-relaxed`}
                        >
                          Click to explore features and pricing
                        </p>
                      </div>
                      <button className="text-blue-500 hover:text-blue-600 transition-colors group">
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/30 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* View All Services Button */}
          <div className="text-center mt-12">
            <button
              className={`inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl font-semibold transition-all transform hover:scale-105 ${themeClasses.glowEffect} group`}
            >
              <Globe className="w-5 h-5 mr-2" />
              Explore All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`p-12 rounded-3xl backdrop-blur-sm border ${
              isDarkMode
                ? "bg-white/5 border-white/10"
                : "bg-white/50 border-gray-200/50"
            } shadow-2xl`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className={themeClasses.text}>Ready to start your</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                extraordinary journey?
              </span>
            </h2>

            <p
              className={`text-lg ${themeClasses.textSecondary} mb-8 leading-relaxed max-w-2xl mx-auto`}
            >
              Let our experienced team help you create unforgettable travel
              memories. Contact us today to discuss your travel needs and get a
              personalized quote.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className={`bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all transform hover:scale-110 ${themeClasses.glowEffect} flex items-center justify-center group`}
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                className={`px-8 py-4 rounded-2xl text-lg font-bold border-2 ${
                  isDarkMode
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                } transition-all transform hover:scale-105 flex items-center justify-center`}
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Quote
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-blue-500" />
                <span className={themeClasses.textSecondary}>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-blue-500" />
                <span className={themeClasses.textSecondary}>
                  Fully Licensed
                </span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-blue-500" />
                <span className={themeClasses.textSecondary}>
                  5-Star Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} themeClasses={themeClasses} />

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
        .group:hover .group-hover\\:translate-x-1 {
          transform: translateX(0.25rem);
        }
        .group:hover .group-hover\\:text-blue-200 {
          color: rgb(191 219 254);
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
