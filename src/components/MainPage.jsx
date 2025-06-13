import React from "react";
import "../Styles/MainPage.css";
import Nav from "./Nav";

function MainPage() {
  return (
    <div className="main-page">
      <Nav />
      <div className="inputs">
        <div className="left">
          <label>
            Select Symtom <br />
            <select name="symtoms">
              <option value="">Malaria</option>
              <option value="">Malaria</option>
              <option value="">Malaria</option>
              <option value="">Malaria</option>
              <option value="">Malaria</option>
            </select>
          </label>
          <label>
            Your Location
            <button>Use My Location</button>
          </label>
        </div>
        <div className="right">
          <h2>Preferences</h2>
          <div className="right-input">
            <label>
              Select Symtom
              <select name="symtoms">
                <option value="">Malaria</option>
                <option value="">Malaria</option>
                <option value="">Malaria</option>
                <option value="">Malaria</option>
                <option value="">Malaria</option>
              </select>
            </label>
            <label>
              Your Location
              <button>Use My Location</button>
            </label>
          </div>
          </div>
        </div>
        Our Recommendations
      </div>
  );
}

export default MainPage;
