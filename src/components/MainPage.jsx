import React, { useState } from "react";
import "../Styles/MainPage.css";
import Nav from "./Nav";

function MainPage() {
  const [formData, setFormData] =  useState({
    Location: "",
    Service: "",
    Cost: "",
    Quality: ""
  })

  const handleGetRecommendation = (e) =>{
    e.preventDefault()
    console.log(
      formData.Location,
      formData.Service,
      formData.Cost,
      formData.Quality
    )
    
  }
  return (
    <div className="main-page">
      <div className="inputs">
        <div className="left">
          <label>
            <p>Location(e.g Ikeja) </p> 
            <input type="text" value={formData.Location} onChange={(e) => setFormData({...formData, Location:e.target.value})}/>
          </label>
          <label>
            <p>Service(e.g General Medicine) </p> 
            <input type="text" value={formData.Service} onChange={(e) => setFormData({...formData, Service:e.target.value})}/>
          </label>
        </div>
        <div className="right">
          <h2>Preferences</h2>
          <div className="right-input">
            <label>
              <p>Cost</p>
              <select name="Cost" value={formData.Cost} onChange={(e) => setFormData({...formData, Cost:e.target.value})}>
                <option value="">Value</option>
                <option value="0">High</option>
                <option value="5">Medium</option>
                <option value="10">Low</option>
              </select>
            </label>
            <label>
              <p>Quality</p>
              <select name="Quality"value={formData.Quality} onChange={(e) => setFormData({...formData, Quality:e.target.value})}>
                <option value="">Value</option>
                <option value="0">High</option>
                <option value="5">Medium</option>
                <option value="10">Low</option>
              </select>
            </label>
          </div>
          </div>
          <button className="get" onClick={handleGetRecommendation}>Get Recommendation</button>
        </div>
        Recommendations
      </div>
  );
}

export default MainPage;
