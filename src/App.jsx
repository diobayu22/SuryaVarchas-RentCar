import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './pages/About'
import HomePage from "./pages/Home";
import GarasiPage from "./pages/Garasi";
import LoginPage from "./pages/Login";




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/garasi" element={<GarasiPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;