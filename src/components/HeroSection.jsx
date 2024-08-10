import React, { useEffect } from "react";
import rightArrow from "../images/rightarrow.svg";
import { gsap } from "gsap";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HeroSection = ({ openMenu, setOpenMenu, isLoaded }) => {
  const tl = gsap.timeline();

  useEffect(() => {
    if (isLoaded) {
      const ctx = gsap.context(() => {
        gsap.from(".heroSection", {
          y: 200,
          duration: 0.5,
          opacity: 0,
          delay: 0.5,
        });
      });
      return () => ctx.revert();
    }
  }, [isLoaded]);

  const scrollToProject = () => {
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      className="section flex min-h-screen h-screen flex-col lg:px-10 py-4 w-[100vw]"
      id="home"
      data-scroll-section
    >
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <div className="h-full w-full flex flex-col justify-center py-2 px-4 lg:px-10 lg:py-6">
        <div className="heroSection flex flex-col gap-4 lg:ml-16">
          <h2 className="text-green-600 font-semibold text-4xl">MERN Developer</h2>
          <h1 className="text-6xl font-bold font-[avenir-black]">
           AADESH KUMAR
          </h1>
          <p className=" text-zinc-300 w-[50vw]">
          Hi, I am Aadesh Kumar, a 3rd-year B.Tech Computer Science student. I've built engaging front-end interfaces and robust back-end structures. Proficient in MongoDB, Express, React.js, and more, I excel at full-stack development. My expertise spans from creating dynamic user experiences to ensuring seamless server-side operations, enabling me to develop comprehensive and efficient web applications.
          </p>

          <button
            className="bg-white text-[#222222] my-7 py-3 w-max flex items-center gap-2 px-8"
            onClick={scrollToProject}
          >
            Projects
            <img src={rightArrow} alt="right arrow" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HeroSection;
