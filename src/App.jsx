// import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router";
import Home from "./components/Home";
import MainPage from "./components/MainPage";
import Nav from "./components/Nav";
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
    setError(""); // Clear previous errors
    setIsLoading(true);

    try {
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

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(
          errorData.message 
        );
      }

      const data = await res.json();
      setRecommendation(data);
      console.log(data);
      navigate("/recommend");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message || "Internal Server Error")
      console.log(error);
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
                error={error}
              />
            }
          />
          <Route
            path="/recommend"
            element={
              <Recommendations
                isLoading={isLoading}
                recommendation={recommendation}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
