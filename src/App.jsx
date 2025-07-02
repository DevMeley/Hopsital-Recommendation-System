// import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router";
import Home from "./components/Home";
import MainPage from "./components/MainPage";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Recommendations from "./components/Recommendations";
import { useState } from "react";

function App() {
  const [recommendation, setRecommendation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: "",
    service_needed: "",
    cost_preference: "",
    quality_preference: "",
  });

  const handleGetRecommendation = async (e) => {
    e.preventDefault();
    console.log(
      formData.location,
      formData.service_needed,
      formData.cost_preference,
      formData.quality_preference
    );

    try {
      setIsLoading(true);
      const res = await fetch(
        "https://hospital-recommender-system.onrender.com/recommend",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      navigate("/recommend");
      console.log(data);
      setRecommendation(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  return (
    <>
      <div children="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/recommendation"
              element={
                <MainPage
                  formData={formData}
                  handleGetRecommendation={handleGetRecommendation}
                  setFormData={setFormData}
                />
              }
            />
            <Route
              path="/recommend"
              element={
                <Recommendations
                  isLoading={isLoading}
                  recommendation={recommendation}
                  error={error}
                />
              }
            />
          </Routes>
      </div>
    </>
  );
}

export default App;
