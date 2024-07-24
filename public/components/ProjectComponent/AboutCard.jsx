"use client";
import "./ProjectsCard.css";
import Image from "next/image";
import logo from "./ImagesProjects/link-outline.svg";

import React from "react";

export default function AboutCard() {
  return (
    <div>
      <div className="each-card">
        {/* <ion-icon name="barbell-outline" className="icon-darbell"></ion-icon> */}
        <h1>Contact Information</h1>
        <p className="each-card-p">Contact Info like Email address.</p>
        <a href="https://tailwindcss.com/docs/fill" className="link-show">
          <Image src={logo} alt="" className="link-icon" />
          <p>https://www.linkedin.com/</p>
        </a>
      </div>
    </div>
  );
}
