import React, { useRef, useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from './Navbar';
import { gsap } from "gsap";
import useIntersectionObserver from "./hooks/useIntersectionObserver";

const Skills = ({ openMenu, setOpenMenu }) => {
  const ref = useRef(null);
  const onScreen = useIntersectionObserver(ref, 0.1);
  const SkillsRef = useRef(null);

  const radius = "30vh"; // Radius of the circle
  const center = "50%"; // Center of the circle

  const calculatePosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI; // Angle in radians
    const top = `calc(${center} - ${radius} * ${Math.sin(angle)})`;
    const left = `calc(${center} + ${radius} * ${Math.cos(angle)})`;
    return { top, left };
  };

  const [skills, setSkills] = useState(
    Array.from({ length: 8 }, (_, i) => {
      const position = calculatePosition(i, 8);
      return {
        link: [
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png",
          "https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png",
          "https://e7.pngegg.com/pngimages/185/866/png-clipart-html-logo-html-web-design-scalable-graphics-world-wide-web-markup-language-html5-icon-hd-miscellaneous-angle-thumbnail.png",
          "https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png",
          "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmtAv2G_LoVvYzVphgkaW6W1yj3z0tR7igw&s",
          "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
        ][i],
        ...position
      };
    })
  );

  useEffect(() => {
    const scrollToRandoms = setTimeout(() => {
      if (onScreen) {
        document.querySelector("#nikeAir")?.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 1500);

    return () => clearTimeout(scrollToRandoms);
  }, [onScreen]);

  useEffect(() => {
    if (onScreen) {
      const tl = gsap.timeline();
      const ctx = gsap.context(() => {
        tl.fromTo(
          SkillsRef.current,
          { opacity: 0 },
          {
            y: 0,
            duration: 1.9,
            opacity: 1,
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
          }
        );
      });
      return () => ctx.revert();
    }
  }, [onScreen]);

  useEffect(() => {
    gsap.to(".ao", {
      x: "+=10",
      yoyo: true,
      repeat: -1,
      duration: 0.4,
    });
  }, []);
  
  return (
    <div className="w-screen h-screen">
      <div
        className="section main flex lg:min-h-screen h-[15rem] px-6 lg:h-screen flex-col py-2 lg:px-10 lg:py-6 w-[50vw]"
        data-scroll-section
        id="randoms"
      >
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className="h-full w-full flex justify-between items-center" ref={ref}>
          <div className="hero flex flex-col gap-4 lg:ml-16">
            <h1
              className="text-6xl font-bold font-[avenir-black] underline lg:no-underline"
              ref={SkillsRef}
            >
              Skills
            </h1>
          </div>
          <div className="w-[50vw] h-screen relative">
            {skills.map((t, i) => (
              <img
                key={i}
                src={t.link}
                alt={`skill-${i}`}
                className={`ao size-28 object-contain absolute`}
                style={{ top: t.top, left: t.left }}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Skills;
