// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext";
import LandingPage from "./pages/landing_Page";
import NotFound from "./pages/Error";
import AboutPage from "./pages/about_Page";
import ServicePage from "./pages/service_Page";
import ServiceDetails from "./components/service_details";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
           <Route path="/services" element={<ServicePage />} />
            <Route path="/services/:serviceId" element={<ServiceDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
