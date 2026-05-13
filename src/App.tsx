import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/layout/NavBar";
import LandingPage from "./pages/LandingPage";
import GlobalScene from "./components/landing/GlobalScene";
import FloatingLabels from "./components/landing/FloatingLabels";

function App() {
  return (
    <>
      <GlobalStyles />
      <GlobalScene />
      <FloatingLabels />
      <Navbar />
      <LandingPage />
    </>
  );
}

export default App;
