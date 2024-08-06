import React, { useRef } from "react";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import github from "../images/github.png";

const Footer = () => {
  const socialLinks = useRef(null);

  return (
    <div className="hidden fixed pb-6 bottom-0 lg:flex w-full flex-col gap-2 font-[avenir-medium]">
      <h2 className="text-sm">Follow me:</h2>
      <div className="socials flex gap-2" ref={socialLinks}>
        <a
          href="www.linkedin.com/in/aadesh-kumar-baa223252"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} className="linkedin" alt="linkedin" />
        </a>

        <a
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} className="twitter" alt="twitter" />
        </a>

        <a
          href="https://github.com/AADESHak007"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} className="github h-10 w-10 object-fit" alt="github" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
