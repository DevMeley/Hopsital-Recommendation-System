import React from "react";
import '../App.css'

function Recommendations({ recommendation, isLoading }) {
  return (
    <div>
      <div className="Recommendation">
        <h3>Recommendations</h3>
        {isLoading ? (
          <img src="assets/spinner.gif" alt="Loading..." />
        ) : (
          <div className="Table">
            <table>
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Services</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {recommendation.slice(0, 3).map((recommend, idx) => (
                  <tr key={recommend.name}>
                    <td>{idx + 1}</td>
                    <td>{recommend.name}</td>
                    <td>{recommend.services}</td>
                    <td>{recommend.full_address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Recommendations;
