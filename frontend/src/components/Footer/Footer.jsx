import { Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hi, My name is <b>Devalsinh Zala</b>. I am a Reactjs Developer and future
          fullstack developer 😎.
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Me</Typography>
        </Link>
      </div>

      <div className="icons">
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/devalzala" target="black">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/devu_zala_12/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/devalsinh-zala/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
