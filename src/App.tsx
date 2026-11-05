
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import Navbar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";

import GlobalScene from "./components/landing/GlobalScene";

import LandingPage from "./pages/LandingPage";
import CommunityPage from "./pages/CommunityPage";
import MarketplacePage from "./pages/MarketplacePage";
import DonatePage from "./pages/DonatePage";

import PregnancyCirclePage from "./components/community/circles/PregnancyCirclePage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ScrollToTop />

      {/* GLOBAL 3D FLOWER */}
      <GlobalScene />

      {/* NAVIGATION */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route
            path="/community/pregnancy"
            element={<PregnancyCirclePage />}
          />
        </Routes>
      </main>

      {/* GLOBAL FOOTER */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;

