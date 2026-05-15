import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/layout/NavBar";
import ScrollToTop from "./components/layout/ScrollToTop";
import RouteFloatingLabels from "./components/layout/RouteFloatingLabels";

import GlobalScene from "./components/landing/GlobalScene";

import LandingPage from "./pages/LandingPage";
import CommunityPage from "./pages/CommunityPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ScrollToTop />

      <GlobalScene />
      <RouteFloatingLabels />
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
