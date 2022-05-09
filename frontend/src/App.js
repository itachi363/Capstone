// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SurveyPage from "./pages/SurveyPage/SurveyPage";
import SeasonalBox from "./pages/SnackBoxes/SeasonalBox";
import SavoryBox from "./pages/SnackBoxes/SavoryBox";
import SweetBox from "./pages/SnackBoxes/SweetBox";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/sweet" element={<SweetBox />} />
        <Route path="/seasonal" element={<SeasonalBox />} />
        <Route path="/savory" element={<SavoryBox />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
