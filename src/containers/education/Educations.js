import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";
import atm from "../../components/Videos/atm.mp4";
import cash from "../../components/Videos/cash.mp4";
import banking from "../../components/Videos/banking.mp4";

function Educations(props) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            Sooper CU Outdoor Monument Sign
          </h1>
        </Fade>
        <div>
          <video
            autoPlay
            loop
            style={{
              position: "center",
              width: "100%",
            }}
          >
            <source src={banking} type="video/mp4" />
          </video>

          <video
            autoPlay
            loop
            style={{
              position: "center",
              width: "100%",
            }}
          >
            <source src={cash} type="video/mp4" />
          </video>
          <video
            autoPlay
            loop
            style={{
              position: "center",
              width: "100%",
            }}
          >
            <source src={atm} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Educations;
