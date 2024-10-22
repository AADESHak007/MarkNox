import React, { useEffect, useRef } from "react";
import kebab from "../images/kebab.svg";
import { gsap } from "gsap";

const Navbar = ({ openMenu, setOpenMenu }) => {
  const ref = useRef(null);
  const kebabRef = useRef(null);

  const tl = gsap.timeline();

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.from(kebabRef.current, {
        duration: 0.6,
        rotate: 45,
        opacity: 0,
      });
    });
    return () => ctx.revert();
  }, []);

  const scrollToHome = () => {
    document.querySelector("#home")?.scrollIntoView({
      behavior: "smooth",
    });
    setOpenMenu(false);
  };

  return (
    <div className="hidden lg:flex w-full " ref={ref}>
      <div className="flex w-full justify-between font-[avenir-medium]">
        <h1 className="text-lg cursor-pointer" onClick={scrollToHome}>
          AADESH
        </h1>

        <button
          className="top-6 right-6 cursor-pointer z-50 text-4xl"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          ref={kebabRef}
        >
          <img src={kebab} alt="kebab" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
