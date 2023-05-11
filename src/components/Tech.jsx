import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, technologies_min } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { useState } from "react";
import { fadeIn, textVariant } from "../utils/motion";
import { isMobile } from 'react-device-detect';

const Tech = () => {
  const [nameInput, setNameInput] = useState('The balls are 3D and interactable! Click on any ball to get more information about technology and my relation to it.');
  const [isOpen, setIsOpen] = useState(true)



  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  function toggleHide(name) {
    setNameInput(name);
  };

  if (isMobile) {
    return (
      <>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>
            What I have mastered so far
          </p>
          <h2 className={`${styles.sectionHeadText}`}>
            My Skills.
          </h2>
        </motion.div>

        <motion.p
          variants={variants}
          animate={isOpen ? "open" : "closed"}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center content-center items-center mx-auto'
        >
          {nameInput}
        </motion.p>
        <br></br>

        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28 flex items-center justify-center rounded-full bg-tertiary shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300" key={technology.name}>
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center transform hover:rotate-12 transition-all duration-300"
                onClick={(e) => {
                  setIsOpen(isOpen => !isOpen);
                  toggleHide(technology.description);
                  setTimeout(function () {
                    setIsOpen(isOpen => !isOpen);
                  }, 1);
                }}>
                <img className="w-16 h-16" src={technology.icon} alt={technology.name} />
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          What I have mastered so far
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          My Skills.
        </h2>
      </motion.div>

      <motion.p
        variants={variants}
        animate={isOpen ? "open" : "closed"}
        className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px] content-center items-center'
      >
        {nameInput}
      </motion.p>
      <br></br>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies_min.map((technology) => (
          <div className='w-28 h-28' key={technology.name}
            onClick={(e) => {
              setIsOpen(isOpen => !isOpen);
              toggleHide(technology.description);
              setTimeout(function () {
                setIsOpen(isOpen => !isOpen);
              }, 1);
            }}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");