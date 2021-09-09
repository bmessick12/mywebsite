import React from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

function CertificationCard(props) {
  const certificate = props.certificate;
  const theme = props.theme;
  const styles = style({
    boxShadow: `0px 2px 5px ${certificate.color_code}`,
    border: `1px solid ${certificate.color_code}`,
    ":hover": {
      boxShadow: `0 5px 15px ${certificate.color_code}`,
    },
  });

  return (
    <Fade left duration={2000}>
      <h2>{certificate.logo_path}</h2>
      <h3>{certificate.certificate_link}</h3>
    </Fade>
  );
}

export default CertificationCard;
