import React, { useState, useEffect, useRef } from 'react';
import Loading from '../Loading';
import NavLinks from '../NavLinks';
import MobileNav from '../MobileNav';
import HeroSection from '../HeroSection';
import Projects from '../Projects';
import Easy from '../Projects/Easy';
import Skills from '../Skills';
import Contact from '../Contact';
import Ecommerce from '../Projects/Ecommerce';
import Obys from '../Projects/Obys';

const Home = () => {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(2);
  const id = useRef(null);
  const containerRef = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1500);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  const [openMenu, setOpenMenu] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div>
      {preloader ? (
        <Loading setIsLoaded={setIsLoaded} isLoaded={isLoaded} />
      ) : (
        <div className="w-full h-full overflow-x-hidden">
          <NavLinks openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <div
            className="outer-wrapper scroll-container"
            ref={containerRef}
            data-scroll-container
            id="main-container"
          >
            <div className="wrapper">
              <MobileNav />
              <HeroSection
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                isLoaded={isLoaded}
              />
              <Projects openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <Easy openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <Ecommerce openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <Obys openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <Skills openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <Contact openMenu={openMenu} setOpenMenu={setOpenMenu} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
