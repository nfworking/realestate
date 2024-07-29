import React from "react";
import './Companies.css';
import company1 from "../public/equinix.png";
import company2 from "../public/prologis.png";
import company3 from "../public/realty.png";
import company4 from "../public/tower.png";
const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={company4} alt="" />
        <img src={company3} alt="" />
        <img src={company2} alt="" />
        <img src={company1} alt="" />
      </div>
    </section>
  );
};

export default Companies;
