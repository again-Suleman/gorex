
import { Routes, Route } from "react-router";

// Pages
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import Home from "./pages/home/home";
import About from './pages/about-us/aboutPage'
import Contact from "./pages/contact-us/contactPage";
import Offers from "./pages/offers/offersPage";
import Patnerships from "./pages/patnerships/patnershipsPage";
import Services from "./pages/sevices/servicesPage";
import Solutions from "./pages/solution/solutionPage";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Box sx={{pt:{xs: 8.5, sm:9.5}}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/patnerships" element={<Patnerships />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact us" element={<Contact />} />
      </Routes>
      </Box>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
