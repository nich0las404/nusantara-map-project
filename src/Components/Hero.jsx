import { img, img2, img3, img4, img5 } from "../assets/index";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const Hero = () => {
    const gifs = [img, img2, img3, img4, img5];
    const [currIndex, setCurrIndex] = useState(0);
    useEffect(() => {
      // Set up an interval to change the image every 3.5 seconds
      const interval = setInterval(() => {
        setCurrIndex((index) => (index + 1) % gifs.length);
      }, 3500);
  
      // Clean up the interval on component unmount
      return () => clearInterval(interval);
    }, []);

  return (
    <div id="hero" className="h-screen w-full relative flex justify-center items-center flex-col z-[1] bg-black">
        <div className=" opacity-50 -z-[1] w-full h-full bg-cover bg-center transition-all ease-in-out absolute top-0" style={{backgroundImage: `url(${gifs[currIndex]})`}}></div>
        {/* overlay effect */}
        <motion.div
          className="absolute top-0 w-full h-full bg-black z-0"
          initial={{ height: '100%', width: '100%' }}
          animate={{ width: 0 }}
          transition={{ duration: 0.7, ease: "easeIn" }}
          
        ></motion.div>

        <div className="z-[1] text-white text-center -mt-12 max-w-screen-md px-4">
            <motion.h1 className="font-hostGrotesk sm:text-7xl mb-5 text-5xl font-bold tracking-wide"
            initial={{opacity: 0}}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.8,
              duration: 0.6,
              ease: 'easeInOut'
            }}
            >Discover The Beauty of <span className="gradient-text">Indonesia</span></motion.h1>
            <motion.p className="font-nunito text-lg opacity-70"
            initial={{opacity: 0}}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.5,
              duration: 0.5,
              ease: 'easeInOut'
            }}>An interactive journey throughout the Nusantara islands, showcasing it's rich history and cultural heritage</motion.p>
        </div>
        <button className='hover:animate-[bounce] absolute sm:w-[140px] sm:h-[140px] sm:-bottom-[70px] -bottom-14
          w-[120px] h-[120px] bg-blue3 rounded-full items-center hover:bg-blue5 duration-200 ease-out active:scale-90' >
          <i class="fa-solid fa-arrow-down text-white text-5xl sm:text-6xl "></i>
          </button>
    </div>
  )
}

export default Hero