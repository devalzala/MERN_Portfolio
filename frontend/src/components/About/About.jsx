import React from "react";
import "./About.css";
import { Typography } from "@mui/material";
// import profile from "../../Images/profile.jpg";

const About = ({ about }) => {
  // console.log(about, "tttt");
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>{about?.quote}</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src={about?.avatar?.url} alt="Deval" className="aboutAvatar" />
          <Typography
            variant="h4"
            style={{
              margin: "1vmax 0",
              color: "black",
            }}
            className="name"
          >
            {about?.name}
          </Typography>
          <Typography style={{ margin: "1vmax 0" }}>
            {about?.title }💻
          </Typography>
          <Typography style={{ margin: "0.5vmax 0", textAlign: "center"}}>{about?.subtitle}</Typography>
        </div>
        <div className="description">
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            {about?.description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
