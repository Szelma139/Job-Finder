import React from "react";

import "./Jobber.css";

export const Jobber = () => {
  return (
    <div className="mainer">
      <div className="left">
        <h2> Find jobs</h2>
        <span className="black bold-800">
          {" "}
          182 <span className="corben grey">jobs in </span>
          <span className="green corben">Warren, OH</span>
        </span>
      </div>
      <div className="right">
        <input className="corben green" type="text" list="data" value="RG-Specialist" />
        <datalist id="data">
          <option>Programmer</option>
          <option>It-Guy</option>
          <option>RG-Specialist</option>
        </datalist>
      </div>
    </div>
  );
};
