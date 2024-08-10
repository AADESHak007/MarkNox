import React, { useEffect, useRef } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import rightArrow from "../../images/rightarrow.svg";
import premier from "../../images/premier.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

gsap.registerPlugin(ScrollTrigger);
const Easy = ({ openMenu, setOpenMenu }) => {
  const pageRef = useRef(null);
  const TextRef = useRef();
  const ImageRef = useRef(null);
  const ref = useRef(null);
  const onScreen = useIntersectionObserver(ref, 0.2);

  useEffect(()=>{
    if (onScreen) {
      console.log("onScreen")
      gsap.from(ref.current,{
        y:100,
        duration:0.5,
        delay:0.3,
        opacity:0,
        stagger:0.5
      })
    }
  },[onScreen])


  return (
    <div
      className="section flex py-4 lg:py-0 h-max lg:min-h-screen lg:h-screen flex-col w-[100vw]"
      data-scroll-section
      ref={pageRef}
    >
      <div className="flex flex-col-reverse lg:flex-row w-full h-full">
        <div className="flex flex-col w-full lg:w-6/12 lg:px-10 py-4">
          <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <div
            className="hero flex flex-col gap-4 lg:ml-16 h-full w-full justify-center px-2 lg:px-0"
            ref={ref}
          >
            <h2 className="text-3xl text-zinc-300 underline lg:no-underline">
              Website
            </h2>
            <h1 className="text-3xl lg:text-6xl font-bold font-[avenir-black]">
              PREMIER
            </h1>
            <p className="flex w-11/12">
            • Premiered a shopping website with a vibrant front-end design, showcasing creativity and UI/UX skills. <br />
            • Frontend: HTML and CSS for structure and styling. <br />
            • Animation: GSAP for dynamic animations. <br />
            • Features: Engaging and responsive design to enhance user experience. <br />
            </p>
            <p className="lg:hidden w-full text-justify">
             
            </p>
            <section className="flex justify-start w-96 gap-2 p-2">
            <a
              href="https://github.com/AADESHak007/Premier-layout"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-white text-[#222222] py-3 w-max flex items-center gap-2 px-8 font-[avenir-black] text-sm lg:text-base">
                GITHUB
                <img src={rightArrow} alt="right arrow" />
              </button>
            </a>
            <a
              href="https://aadeshak007.github.io/Premier-layout/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-white text-[#222222] py-3 w-max flex items-center gap-2 px-8 font-[avenir-black] text-sm lg:text-base">
                View Project
                <img src={rightArrow} alt="right arrow" />
              </button>
            </a>
            </section>
          </div>
          <Footer />
        </div>
        <div className="flex bg-zinc-800 flex-col justify-center w-full h-screen lg:w-6/12" ref={ImageRef}>
          <img src={premier} alt="premier" />
        </div>
      </div>
    </div>
  );
};

export default Easy;
