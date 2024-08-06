import React, { useEffect, useRef } from "react";

import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import behance from "../images/behance.svg";
import mail from "../images/mail.svg";
import { gsap } from "gsap";
import smile from "../images/smile.svg";
import Navbar from './Navbar'
import useIntersectionObserver from "./hooks/useIntersectionObserver";

const Contact = ({ openMenu, setOpenMenu }) => {
  const contactPageRef = useRef(null);
  const socialRef = useRef(null);

  const onScreen =useIntersectionObserver(contactPageRef, 0.125);

  useEffect(() => {
    if (onScreen) {
      const tl = gsap.timeline();
      const ctx = gsap.context(() => {
        tl.from(socialRef.current, {
          x: -600,
          y: 200,
          ease: "power3.inOut",
          duration: 1,
        });
      });
      return () => ctx.revert();
    }
  }, [onScreen]);

  return (
    <div
      className="section flex min-h-screen h-screen flex-col lg:px-10 py-4 w-[100vw]"
      id="contact"
      data-scroll-section
      ref={contactPageRef}
    >
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <div className="h-full w-full flex flex-col justify-center items-center py-2 lg:px-10 lg:py-6 gap-4">
        <h1 className="text-3xl lg:text-6xl font-[avenir-black]">
          LIKE WHAT YOU SEE?
        </h1>

        <div className="flex gap-2 items-center">
          <p>Get in touch and let's create magic!</p>
          <img src={smile} alt="smile" className="-rotate-90" />
        </div>

        <div className="contact-links flex gap-3" ref={socialRef}>
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
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <img src={behance} className="behance" alt="behance" />
          </a>

          <a href="mailto:aadeshkumar2723@gmail.com" target="_blank" rel="noreferrer">
            <img src={mail} alt="mail" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
