"use client"; // Ensure this is at the top for client-side behavior

import React from "react";
import { MagicButton } from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  // Function to handle button click and redirect to Topmate
  const handleTopmateClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://topmate.io/kushagra_agrawal15", "_blank");
    }
  };

  return (
    <footer className="w-full pb-9 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[43vw]">
          Ready to take <span className="text-purple">your </span>digital
          presence to the level?
        </h1>
        <p className="text-cyan-200 md:mt-10 my-5 text-center">
          Reach out to me today and let's discuss how I can help you in giving
          perfect insights.
        </p>
        <div onClick={handleTopmateClick}>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Kushagra
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 rounded-lg bg-opacity-75 bg-black-200 border border-black-300"
            >
              <img
                src={profile.img}
                alt={`Social icon ${profile.id}`}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
