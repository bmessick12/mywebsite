import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
// import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  // return <DesignImg theme={props.theme} />;
}

function SkillSection(props) {
  const theme = props.theme;
  return (
    <div>
      {skills.data.map((skill, index) => {
        if (index % 2 === 0) {
          return (
            <div className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <img src="https://media.istockphoto.com/photos/beautiful-sunset-over-the-tropical-sea-picture-id1172427455?k=20&m=1172427455&s=612x612&w=0&h=tL1ig4N68zXv9wKgZ3_tOeVP1qV3zSfjjS_jbyeyGCA="></img>
                  {/* <GetSkillSvg fileName={skill.fileName} theme={theme} /> */}
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        } else {
          return (
            <div className="skills-main-div">
              <div className="skills-text-div">
                <Fade left duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade left duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade left duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
              <Fade right duration={2000}>
                <div className="skills-image-div">
                  <img src="./accumed2.jpg"></img>
                  {/* <GetSkillSvg fileName={skill.fileName} theme={theme} /> */}
                </div>
              </Fade>
            </div>
          );
        }
      })}
    </div>
  );
}

export default SkillSection;
