import React from "react";
import {
  MapPin,
  Phone,
  ArrowRight,
  Star,
  Plane,
  Calendar,
  Users,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { useTheme } from "../components/ThemeContext";

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const { isDarkMode, setIsDarkMode, themeClasses } = useTheme();
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

 
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
              ? "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"
              : "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"
          }`}
        ></div>
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-[radial-gradient(circle_at_80%_20%,rgba(147,197,253,0.1),transparent_50%)]"
              : "bg-[radial-gradient(circle_at_80%_20%,rgba(147,197,253,0.05),transparent_50%)]"
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

      {/* Hero Section */}
      <section id="hero" className="relative h-screen mt- overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {/* Slide 1 Background */}
          <div
            className={`w-full h-full transition-opacity duration-1000 ${
              currentSlide === 0 ? "opacity-100" : "opacity-0"
            } absolute inset-0`}
          >
            <div
              className={`w-full h-full bg-gradient-to-r ${
                isDarkMode
                  ? "from-gray-900/80 via-gray-800/60 to-gray-900/80"
                  : "from-gray-100/80 via-white/60 to-gray-100/80"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop"
                alt="Zimbabwe Travel Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`absolute inset-0 ${
                isDarkMode
                  ? "bg-gradient-to-r from-black/70 via-black/50 to-black/70"
                  : "bg-gradient-to-r from-white/70 via-white/50 to-white/70"
              }`}
            ></div>
          </div>

          {/* Slide 2 Background */}
          <div
            className={`w-full h-full transition-opacity duration-1000 ${
              currentSlide === 1 ? "opacity-100" : "opacity-0"
            } absolute inset-0`}
          >
            <div
              className={`w-full h-full bg-gradient-to-r ${
                isDarkMode
                  ? "from-gray-900/80 via-gray-800/60 to-gray-900/80"
                  : "from-gray-100/80 via-white/60 to-gray-100/80"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop"
                alt="Airplane Travel Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`absolute inset-0 ${
                isDarkMode
                  ? "bg-gradient-to-r from-black/70 via-black/50 to-black/70"
                  : "bg-gradient-to-r from-white/70 via-white/50 to-white/70"
              }`}
            ></div>
          </div>

          {/* Slide 3 Background */}
          <div
            className={`w-full h-full transition-opacity duration-1000 ${
              currentSlide === 2 ? "opacity-100" : "opacity-0"
            } absolute inset-0`}
          >
            <div
              className={`w-full h-full bg-gradient-to-r ${
                isDarkMode
                  ? "from-gray-900/80 via-gray-800/60 to-gray-900/80"
                  : "from-gray-100/80 via-white/60 to-gray-100/80"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop"
                alt="Beach Travel Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`absolute inset-0 ${
                isDarkMode
                  ? "bg-gradient-to-r from-black/70 via-black/50 to-black/70"
                  : "bg-gradient-to-r from-white/70 via-white/50 to-white/70"
              }`}
            ></div>
          </div>
        </div>

        {/* Slides Container */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Slide 1 */}
            <div
              className={`text-center transition-all duration-1000 ${
                currentSlide === 0
                  ? "opacity-100 transform translate-x-0"
                  : "opacity-0 transform translate-x-full absolute inset-0 flex items-center justify-center"
              }`}
            >
              <div className="max-w-4xl">
                <div
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${
                    isDarkMode
                      ? "from-blue-500/20 to-blue-600/20 border-blue-500/30"
                      : "from-blue-500/10 to-blue-600/10 border-blue-500/20"
                  } rounded-full border backdrop-blur-sm mb-8`}
                >
                  <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-sm font-semibold text-blue-400 tracking-wide uppercase">
                    Zimbabwe & Worldwide
                  </span>
                </div>

                <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                  <span className={themeClasses.text}>
                    Crafting extraordinary
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
                    travel memories
                  </span>
                </h1>

                <p
                  className={`text-xl ${themeClasses.textSecondary} mb-10 leading-relaxed max-w-3xl mx-auto`}
                >
                  Your trusted travel partner in Zimbabwe. We specialize in
                  creating unforgettable experiences with complete travel
                  packages, from flights to accommodations and everything in
                  between.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button
                    className={`relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-2xl text-lg font-bold transition-all transform hover:scale-110 shadow-2xl ${themeClasses.glowEffect} overflow-hidden group`}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Explore Packages
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>

                  <button
                    className={`border-2 ${
                      isDarkMode
                        ? "border-white/20 hover:border-white/40 text-white hover:bg-white/10"
                        : "border-gray-300 hover:border-gray-500 text-gray-900 hover:bg-gray-100/50"
                    } px-10 py-4 rounded-2xl text-lg font-semibold transition-all backdrop-blur-sm flex items-center justify-center`}
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Get Quote
                  </button>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div
              className={`text-center transition-all duration-1000 ${
                currentSlide === 1
                  ? "opacity-100 transform translate-x-0"
                  : "opacity-0 transform translate-x-full absolute inset-0 flex items-center justify-center"
              }`}
            >
              <div className="max-w-4xl">
                <div
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${
                    isDarkMode
                      ? "from-blue-500/20 to-blue-600/20 border-blue-500/30"
                      : "from-blue-500/10 to-blue-600/10 border-blue-500/20"
                  } rounded-full border backdrop-blur-sm mb-8`}
                >
                  <Plane className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-sm font-semibold text-blue-400 tracking-wide uppercase">
                    Worldwide Destinations
                  </span>
                </div>

                <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                  <span className={themeClasses.text}>Discover the world</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
                    with confidence
                  </span>
                </h1>

                <p
                  className={`text-xl ${themeClasses.textSecondary} mb-10 leading-relaxed max-w-3xl mx-auto`}
                >
                  From the majestic Victoria Falls to exotic international
                  destinations. Our expert team handles all your travel needs,
                  ensuring seamless journeys and unforgettable experiences.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button
                    className={`relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-2xl text-lg font-bold transition-all transform hover:scale-110 shadow-2xl ${themeClasses.glowEffect} overflow-hidden group`}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Book Now
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>

                  <button
                    className={`border-2 ${
                      isDarkMode
                        ? "border-white/20 hover:border-white/40 text-white hover:bg-white/10"
                        : "border-gray-300 hover:border-gray-500 text-gray-900 hover:bg-gray-100/50"
                    } px-10 py-4 rounded-2xl text-lg font-semibold transition-all backdrop-blur-sm flex items-center justify-center`}
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    View Itineraries
                  </button>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div
              className={`text-center transition-all duration-1000 ${
                currentSlide === 2
                  ? "opacity-100 transform translate-x-0"
                  : "opacity-0 transform translate-x-full absolute inset-0 flex items-center justify-center"
              }`}
            >
              <div className="max-w-4xl">
                <div
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${
                    isDarkMode
                      ? "from-blue-500/20 to-blue-600/20 border-blue-500/30"
                      : "from-blue-500/10 to-blue-600/10 border-blue-500/20"
                  } rounded-full border backdrop-blur-sm mb-8`}
                >
                  <Users className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-sm font-semibold text-blue-400 tracking-wide uppercase">
                    Trusted by Travelers
                  </span>
                </div>

                <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                  <span className={themeClasses.text}>Join</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
                    500+ happy travelers
                  </span>
                </h1>

                <p
                  className={`text-xl ${themeClasses.textSecondary} mb-10 leading-relaxed max-w-3xl mx-auto`}
                >
                  Hundreds of satisfied customers have trusted us with their
                  dream vacations. From honeymoons to family adventures,
                  business trips to solo explorations - we make every journey
                  extraordinary.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button
                    className={`relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-2xl text-lg font-bold transition-all transform hover:scale-110 shadow-2xl ${themeClasses.glowEffect} overflow-hidden group`}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Read Reviews
                      <Star className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>

                  <button
                    className={`border-2 ${
                      isDarkMode
                        ? "border-white/20 hover:border-white/40 text-white hover:bg-white/10"
                        : "border-gray-300 hover:border-gray-500 text-gray-900 hover:bg-gray-100/50"
                    } px-10 py-4 rounded-2xl text-lg font-semibold transition-all backdrop-blur-sm`}
                  >
                    Start Planning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {[0, 1, 2].map((slide) => (
            <button
              key={slide}
              onClick={() => setCurrentSlide(slide)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === slide
                  ? "bg-gradient-to-r from-blue-400 to-blue-600 w-8"
                  : isDarkMode
                  ? "bg-white/30 hover:bg-white/50"
                  : "bg-gray-400/50 hover:bg-gray-600/70"
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)}
          className={`absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full ${
            isDarkMode
              ? "bg-black/30 hover:bg-black/50 text-white"
              : "bg-white/30 hover:bg-white/50 text-gray-900"
          } backdrop-blur-sm border ${themeClasses.border} hover:${
            themeClasses.borderHover
          } transition-all duration-300 flex items-center justify-center z-20 group`}
        >
          <ArrowRight className="w-5 h-5 rotate-180 group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)}
          className={`absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full ${
            isDarkMode
              ? "bg-black/30 hover:bg-black/50 text-white"
              : "bg-white/30 hover:bg-white/50 text-gray-900"
          } backdrop-blur-sm border ${themeClasses.border} hover:${
            themeClasses.borderHover
          } transition-all duration-300 flex items-center justify-center z-20 group`}
        >
          <ArrowRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      </section>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} themeClasses={themeClasses} />
    </div>
  );
};

export default LandingPage;
