import React from "react";

import "./Header.css";

import { NavLink } from "react-router-dom";

export const Header = () => {

  const handleChange=(e)=>{
console.log(e.target.value)
  }
  return (
    <div className="header">
      <div className="header-main-container">
        <div className="header-left-container">
          <div className="logo corben">
            <span className="green logo">ServiceMe</span>
          </div>
          <div className="input">
            <span className="fas fa-search green"></span>
            <input
              className="corben green"
              type="text"
              id="fname"
              name="fname"
              onChange={(e)=>handleChange(e)}
            />
          </div>
        </div>
        <div className="empty"></div>

        <div className="header-links corben">
          <ul className="green">
            <li>
              <NavLink className="first" to="/home">Home</NavLink>
            </li>
            <li className="other-links">
            <NavLink to="/about"> <i className="circle">3</i>About</NavLink>
            </li>
            <li className="other-links">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="other-links">
            <NavLink to="/contact">Contact</NavLink>

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
