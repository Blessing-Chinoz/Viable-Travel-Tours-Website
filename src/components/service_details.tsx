import React from "react";
import {
  Plane,
  Building,
  Calendar,
  Shield,
  ArrowRight,
  Star,
  CheckCircle,
  Phone,
  Mail,
  Globe,
  Users,
  ArrowLeft,
  MessageCircle,
  Share2,
  Bookmark,
  Eye,
  Calendar as CalendarIcon,
  CreditCard,
  Headphones,
  Zap,
  Target,
  Gift,
  Sparkles,
  Camera,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { useTheme } from "../components/ThemeContext";

const ServiceDetails = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = React.useState("overview");
  const [selectedPackage, setSelectedPackage] = React.useState(0);
  const { isDarkMode, setIsDarkMode, themeClasses } = useTheme();

  React.useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const servicesData = {
    1: {
      id: 1,
      title: "Flight Bookings",
      icon: Plane,
      category: "Travel Essentials",
      rating: 4.9,
      reviews: 156,
      heroImage:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      shortDescription:
        "Book flights to destinations worldwide with competitive rates",
      fullDescription:
        "Our comprehensive flight booking service connects you to destinations across the globe with access to major airlines and competitive pricing. We handle everything from domestic flights within Zimbabwe to international connections, ensuring you get the best deals and most convenient schedules. Our experienced team works around the clock to secure the most favorable rates and flight times that suit your travel preferences.",
      features: [
        {
          icon: Globe,
          title: "Global Network",
          description: "Access to 500+ airlines worldwide",
        },
        {
          icon: Shield,
          title: "Best Price Guarantee",
          description: "We match any competitor's price",
        },
        {
          icon: Headphones,
          title: "24/7 Support",
          description: "Round-the-clock booking assistance",
        },
        {
          icon: Calendar,
          title: "Flexible Options",
          description: "Easy date changes and cancellations",
        },
        {
          icon: Users,
          title: "Group Discounts",
          description: "Special rates for group bookings",
        },
        {
          icon: Zap,
          title: "Real-time Tracking",
          description: "Live flight status updates",
        },
        {
          icon: Target,
          title: "Personalized Service",
          description: "Tailored recommendations for you",
        },
        {
          icon: Gift,
          title: "Loyalty Rewards",
          description: "Earn points with every booking",
        },
      ],
      packages: [
        {
          name: "Essential",
          price: "$25",
          period: "booking fee",
          description: "Perfect for simple flight bookings",
          features: [
            "Flight booking",
            "Email confirmation",
            "Basic support",
            "Mobile boarding pass",
          ],
          popular: false,
        },
        {
          name: "Premium",
          price: "$45",
          period: "booking fee",
          description: "Enhanced service with additional benefits",
          features: [
            "Everything in Essential",
            "Priority support",
            "Seat selection assistance",
            "Flight change support",
            "Travel insurance options",
          ],
          popular: true,
        },
        {
          name: "VIP",
          price: "$75",
          period: "booking fee",
          description: "Full-service travel concierge experience",
          features: [
            "Everything in Premium",
            "Dedicated travel consultant",
            "Airport lounge access help",
            "Meal preferences",
            "24/7 personal support",
            "Complimentary changes",
          ],
          popular: false,
        },
      ],
      benefits: [
        "Save time with our expert flight booking service",
        "Access to exclusive airline partnerships and deals",
        "Comprehensive travel insurance options",
        "Flexible booking policies with easy modifications",
      ],
    },
    2: {
      id: 2,
      title: "Hotel Bookings",
      icon: Building,
      category: "Accommodation",
      rating: 4.8,
      reviews: 203,
      heroImage:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      shortDescription: "From luxury resorts to budget-friendly accommodations",
      fullDescription:
        "Whether you're looking for a luxury resort experience or comfortable budget accommodation, our extensive network of hotel partners ensures you find the perfect place to stay. We offer personalized recommendations based on your preferences and budget, with access to exclusive deals and room upgrades.",
      features: [
        {
          icon: Building,
          title: "Luxury Hotels & Resorts",
          description: "Premium accommodations worldwide",
        },
        {
          icon: CreditCard,
          title: "Budget-Friendly Options",
          description: "Quality stays at great prices",
        },
        {
          icon: Sparkles,
          title: "Boutique Accommodations",
          description: "Unique and charming properties",
        },
        {
          icon: Gift,
          title: "All-Inclusive Packages",
          description: "Everything included deals",
        },
        {
          icon: Target,
          title: "Room Upgrades Available",
          description: "Complimentary upgrade opportunities",
        },
        {
          icon: Zap,
          title: "Instant Confirmation",
          description: "Immediate booking confirmation",
        },
        {
          icon: Users,
          title: "Group Rates",
          description: "Special pricing for groups",
        },
        {
          icon: Headphones,
          title: "Concierge Support",
          description: "Personal assistance throughout stay",
        },
      ],
      packages: [
        {
          name: "Standard",
          price: "$15",
          period: "booking fee",
          description: "Basic hotel booking service",
          features: [
            "Hotel reservation",
            "Confirmation details",
            "Basic customer support",
            "Mobile check-in assistance",
          ],
          popular: false,
        },
        {
          name: "Premium",
          price: "$35",
          period: "booking fee",
          description: "Enhanced booking with perks",
          features: [
            "Everything in Standard",
            "Room upgrade requests",
            "Special amenity coordination",
            "Priority support",
            "Flexible cancellation",
          ],
          popular: true,
        },
        {
          name: "Luxury",
          price: "$65",
          period: "booking fee",
          description: "VIP treatment and exclusive access",
          features: [
            "Everything in Premium",
            "Guaranteed room upgrades",
            "Welcome amenities",
            "Concierge services",
            "Late checkout arrangements",
            "Exclusive property access",
          ],
          popular: false,
        },
      ],
      benefits: [
        "Handpicked accommodations for every budget and preference",
        "Exclusive partnerships with top hotel chains",
        "Complimentary room upgrades when available",
        "24/7 support for any accommodation issues",
      ],
    },
    3: {
      id: 3,
      title: "Activities & Tours",
      icon: Camera,
      category: "Experiences",
      rating: 4.9,
      reviews: 189,
      heroImage:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      shortDescription:
        "Curated experiences and guided tours for memorable adventures",
      fullDescription:
        "Discover the beauty and culture of your destination with our carefully curated activities and tours. From wildlife safaris in Zimbabwe to cultural experiences and adventure activities, we offer unforgettable experiences that create lasting memories with expert local guides.",
      features: [
        {
          icon: Camera,
          title: "Wildlife Safaris",
          description: "Incredible wildlife viewing experiences",
        },
        {
          icon: Globe,
          title: "Cultural Tours",
          description: "Authentic local cultural immersion",
        },
        {
          icon: Zap,
          title: "Adventure Activities",
          description: "Thrilling outdoor adventures",
        },
        {
          icon: Building,
          title: "City Sightseeing",
          description: "Comprehensive city exploration",
        },
        {
          icon: Users,
          title: "Private Guided Tours",
          description: "Personalized tour experiences",
        },
        {
          icon: Gift,
          title: "Group Experiences",
          description: "Fun activities for groups",
        },
        {
          icon: Target,
          title: "Expert Local Guides",
          description: "Knowledgeable local expertise",
        },
        {
          icon: Sparkles,
          title: "Unique Access",
          description: "Exclusive experiences not available elsewhere",
        },
      ],
      packages: [
        {
          name: "Explorer",
          price: "$20",
          period: "per activity",
          description: "Standard tour booking service",
          features: [
            "Activity booking",
            "Basic tour information",
            "Standard group tours",
            "Email confirmation",
          ],
          popular: false,
        },
        {
          name: "Adventure",
          price: "$50",
          period: "per activity",
          description: "Enhanced tour experience",
          features: [
            "Everything in Explorer",
            "Small group tours",
            "Expert guide selection",
            "Photo package included",
            "Priority booking",
          ],
          popular: true,
        },
        {
          name: "Exclusive",
          price: "$100",
          period: "per activity",
          description: "Private, luxury tour experience",
          features: [
            "Everything in Adventure",
            "Private tours only",
            "Luxury transportation",
            "Gourmet meals included",
            "Professional photographer",
            "Customized itinerary",
          ],
          popular: false,
        },
      ],
      benefits: [
        "Expert local guides and unique experiences you won't find elsewhere",
        "Small group sizes for more personal experiences",
        "Flexible itineraries tailored to your interests",
        "Safety-first approach with fully licensed operators",
      ],
    },
  };

  const service =
    servicesData[serviceId as unknown as keyof typeof servicesData] ||
    servicesData[1];

  const tabs = [
    { id: "overview", label: "Overview", icon: Eye },
    { id: "features", label: "Features", icon: Sparkles },
    { id: "pricing", label: "Pricing", icon: CreditCard },
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

      {/* Back Navigation */}
      <div className="relative z-10 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/services")}
            className={`inline-flex items-center px-4 py-2 rounded-xl backdrop-blur-sm border ${
              isDarkMode
                ? "bg-white/5 border-white/10 hover:bg-white/10"
                : "bg-white/50 border-gray-200/50 hover:bg-white/70"
            } transition-all group`}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-blue-500 text-sm font-semibold uppercase tracking-wide">
                      {service.category}
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">
                        {service.rating}
                      </span>
                      <span className={`text-sm ${themeClasses.textSecondary}`}>
                        ({service.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold">
                  <span className={themeClasses.text}>{service.title}</span>
                </h1>

                <p
                  className={`text-lg lg:text-xl ${themeClasses.textSecondary} leading-relaxed`}
                >
                  {service.shortDescription}
                </p>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-4">
                <button
                  className={`bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 ${themeClasses.glowEffect} flex items-center group`}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Quote Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  className={`px-6 py-4 rounded-2xl font-semibold border ${
                    isDarkMode
                      ? "border-white/20 text-white hover:bg-white/10"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  } transition-all flex items-center`}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Live Chat
                </button>

                <div className="flex gap-2">
                  <button
                    className={`p-4 rounded-2xl border ${
                      isDarkMode
                        ? "border-white/20 text-white hover:bg-white/10"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    } transition-all hover:scale-105`}
                  >
                    <Bookmark className="w-5 h-5" />
                  </button>
                  <button
                    className={`p-4 rounded-2xl border ${
                      isDarkMode
                        ? "border-white/20 text-white hover:bg-white/10"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    } transition-all hover:scale-105`}
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">500+</div>
                  <div
                    className={`text-sm ${themeClasses.textSecondary} uppercase tracking-wide`}
                  >
                    Airlines
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">24/7</div>
                  <div
                    className={`text-sm ${themeClasses.textSecondary} uppercase tracking-wide`}
                  >
                    Support
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">98%</div>
                  <div
                    className={`text-sm ${themeClasses.textSecondary} uppercase tracking-wide`}
                  >
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image & Gallery */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {service.gallery.slice(0, 4).map((image, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-xl aspect-square cursor-pointer group"
                  >
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex overflow-x-auto scrollbar-hide backdrop-blur-sm rounded-2xl border ${
              isDarkMode
                ? "bg-white/5 border-white/10"
                : "bg-white/70 border-gray-200/50"
            }`}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 flex items-center px-6 py-4 text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "text-blue-500 bg-blue-500/10 border-b-2 border-blue-500"
                    : `${themeClasses.textSecondary} hover:text-blue-500`
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-12 animate-fadeIn">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      About This Service
                    </h3>
                    <p
                      className={`${themeClasses.textSecondary} text-lg leading-relaxed`}
                    >
                      {service.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-6">Key Benefits</h4>
                    <div className="grid gap-4">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className={themeClasses.textSecondary}>
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`p-8 rounded-2xl backdrop-blur-sm border ${
                    isDarkMode
                      ? "bg-white/5 border-white/10"
                      : "bg-white/70 border-gray-200/50"
                  } h-fit`}
                >
                  <h4 className="text-xl font-bold mb-6">Quick Contact</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-blue-500" />
                      <div>
                        <div className="font-semibold">+263 123 456 789</div>
                        <div
                          className={`text-sm ${themeClasses.textSecondary}`}
                        >
                          Available 24/7
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3 text-blue-500" />
                      <div>
                        <div className="font-semibold">bookings@travel.com</div>
                        <div
                          className={`text-sm ${themeClasses.textSecondary}`}
                        >
                          Quick response
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-5 h-5 mr-3 text-blue-500" />
                      <div>
                        <div className="font-semibold">Live Chat</div>
                        <div
                          className={`text-sm ${themeClasses.textSecondary}`}
                        >
                          Instant support
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    className={`w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-semibold transition-all transform hover:scale-105 ${themeClasses.glowEffect} mt-6`}
                  >
                    Start Booking
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === "features" && (
            <div className="animate-fadeIn">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Service Features</h3>
                <p
                  className={`text-lg ${themeClasses.textSecondary} max-w-2xl mx-auto`}
                >
                  Discover what makes our {service.title.toLowerCase()} service
                  exceptional
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl backdrop-blur-sm border ${
                      isDarkMode
                        ? "bg-white/5 border-white/10 hover:bg-white/10"
                        : "bg-white/70 border-gray-200/50 hover:bg-white/90"
                    } transition-all hover:scale-105 group`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pricing Tab */}
          {activeTab === "pricing" && (
            <div className="animate-fadeIn">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Choose Your Package</h3>
                <p
                  className={`text-lg ${themeClasses.textSecondary} max-w-2xl mx-auto`}
                >
                  Select the perfect package for your travel needs
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {service.packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all hover:scale-105 ${
                      pkg.popular
                        ? `bg-gradient-to-b from-blue-500/10 to-blue-600/10 border-blue-500/30 ${themeClasses.glowEffect}`
                        : isDarkMode
                        ? "bg-white/5 border-white/10 hover:bg-white/10"
                        : "bg-white/70 border-gray-200/50 hover:bg-white/90"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h4 className="text-2xl font-bold mb-2">{pkg.name}</h4>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-blue-500">
                          {pkg.price}
                        </span>
                        <span
                          className={`text-sm ${themeClasses.textSecondary} ml-1`}
                        >
                          {pkg.period}
                        </span>
                      </div>
                      <p className={`${themeClasses.textSecondary} text-sm`}>
                        {pkg.description}
                      </p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span
                            className={`text-sm ${themeClasses.textSecondary}`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full py-3 rounded-xl font-semibold transition-all ${
                        pkg.popular
                          ? `bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white ${themeClasses.glowEffect}`
                          : isDarkMode
                          ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                      }`}
                      onClick={() => setSelectedPackage(index)}
                    >
                      {selectedPackage === index ? "Selected" : "Choose Plan"}
                    </button>
                  </div>
                ))}
              </div>

              {/* Additional Pricing Info */}
              <div className="mt-12 text-center">
                <div
                  className={`inline-block p-6 rounded-2xl backdrop-blur-sm border ${
                    isDarkMode
                      ? "bg-white/5 border-white/10"
                      : "bg-white/70 border-gray-200/50"
                  }`}
                >
                  <h5 className="font-semibold mb-2">
                    Need a Custom Solution?
                  </h5>
                  <p className={`${themeClasses.textSecondary} text-sm mb-4`}>
                    Contact us for enterprise packages and group discounts
                  </p>
                  <button className="text-blue-500 hover:text-blue-600 font-semibold text-sm">
                    Contact Sales →
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div
            className={`p-12 rounded-3xl backdrop-blur-sm border ${
              isDarkMode
                ? "bg-white/5 border-white/10"
                : "bg-white/70 border-gray-200/50"
            }`}
          >
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p
              className={`text-lg ${themeClasses.textSecondary} mb-8 max-w-2xl mx-auto`}
            >
              Join thousands of satisfied customers who trust us with their
              travel plans. Get started today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className={`bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 ${themeClasses.glowEffect} flex items-center`}
              >
                <CalendarIcon className="w-5 h-5 mr-2" />
                Book Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                className={`px-8 py-4 rounded-2xl font-semibold border ${
                  isDarkMode
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                } transition-all`}
              >
                <Phone className="w-5 h-5 mr-2 inline" />
                Call Us: +263 123 456 789
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

export default ServiceDetails;
