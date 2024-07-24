"use client";
import "./ProjectsCard.css";
import Image from "next/image";
import logo from "./ImagesProjects/link-outline.svg";

import React from "react";

export default function AboutCard() {
  return (
      <div>
        <div className="each-card about-each-card">
          <h1>Contact Information</h1>
          <div className="contact-info">
            <a href="mailto:ivarfl@gmail.com" className="contact-email">
              ivarfl@gmail.com
            </a>
          </div>
          <div className="contact-info">
            <a href="tel:+1 (801) 433-7646" className="contact-phone">
              +1 (801) 433-7646
            </a>
          </div>
          <a href="https://tailwindcss.com/docs/fill" className="link-show">
            <Image src={logo} alt="" className="link-icon"/>
            <p>https://www.linkedin.com/in/ivarfuentes/</p>
          </a>
        </div>
      </div>
  );
}
