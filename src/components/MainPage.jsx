import React, { useState } from "react";
import "../Styles/MainPage.css";
import Nav from "./Nav";
import Recommendations from "./Recommendations";

function MainPage() {
  const [recommendation, setRecommendation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
      console.log(data);
      setRecommendation(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main-page">
      <div className="inputs">
        <div className="left">
          <label>
            <p>Location(e.g Ikeja) </p>
            <input
              type="text"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />
          </label>
          <label>
            <p>Service(e.g General Medicine) </p>
            <input
              type="text"
              value={formData.service_needed}
              onChange={(e) =>
                setFormData({ ...formData, service_needed: e.target.value })
              }
            />
          </label>
        </div>
        <div className="right">
          <h2>Preferences</h2>
          <div className="right-input">
            <label>
              <p>Cost</p>
              <select
                name="Cost"
                value={formData.cost_preference}
                onChange={(e) =>
                  setFormData({ ...formData, cost_preference: e.target.value })
                }
              >
                <option value="">Value</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </label>
            <label>
              <p>Quality</p>
              <select
                name="Quality"
                value={formData.quality_preference}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    quality_preference: e.target.value,
                  })
                }
              >
                <option value="">Value</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </label>
          </div>
        </div>
        <button className="get" onClick={handleGetRecommendation}>
          Get Recommendation
        </button>
      </div>
      <div className="Recommendation">
        <h3>Recommendation</h3>
        {isLoading ? (
          <img src="src\assets\Spinner@1x-2.8s-60px-60px.gif" alt="" />
        ) : (
          <div>
            {recommendation.map((recommend) => (
              <Recommendations key={recommend.name} recommend={recommend} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MainPage;
