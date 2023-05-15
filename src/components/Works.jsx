import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { isMobile } from 'react-device-detect';
import github from "../assets/skills/tech/github.png";
import live from "../assets/general/live.png";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div>
              <div
                onClick={() => window.open(source_code_link, "_blank", 'noreferrer')}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
              {project_link.map(function (link) {
                return (<div
                  onClick={() => window.open(JSON.stringify(link).replaceAll('"', ''), "_blank", 'noreferrer')}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer my-1'
                >
                  <img
                    src={live}
                    alt='source code'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>);
              })}
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <br></br>
        <div className="inline-flex gap-2" role="group">

          {project_link.map(function (link) {
            return (<button
              type="button"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              data-te-ripple-init
              data-te-ripple-color="light"
              onClick={() => window.open(JSON.stringify(link).replaceAll('"', ''), "_blank", 'noreferrer')}
            >
              Live Demo
            </button>);
          })}

          <button
            type="button"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={() => window.open(source_code_link, "_blank", 'noreferrer')}
          >
            Source Code
          </button>
        </div>

      </Tilt>
    </motion.div>
  );
};

const ProjectCardMobile = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link
}) => {
  return (
    <div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div>
              <div
                onClick={() => window.open(source_code_link, "_blank", 'noreferrer')}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
              {project_link.map(function (link) {
                return (<div
                  onClick={() => window.open(JSON.stringify(link).replaceAll('"', ''), "_blank", 'noreferrer')}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer my-1'
                >
                  <img
                    src={live}
                    alt='source code'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>);
              })}
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        <br></br>
        <div className="inline-flex gap-2" role="group">

          {project_link.map(function (link) {
            return (<button
              type="button"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              data-te-ripple-init
              data-te-ripple-color="light"
              onClick={() => window.open(JSON.stringify(link).replaceAll('"', ''), "_blank", 'noreferrer')}
            >
              Live Demo
            </button>);
          })}

          <button
            type="button"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={() => window.open(source_code_link, "_blank", 'noreferrer')}
          >
            Source Code
          </button>
        </div>

      </Tilt>
    </div>
  );
};

const Works = () => {
  if (isMobile && window.innerWidth <= 900) {
    return (
      <>
        <div variants={`${textVariant()}`}>
          <p className={`${styles.sectionSubText}`}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </div>

        <div className='w-full flex'>
          <p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto'
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </div>

        <div className='mt-20 flex flex-wrap gap-7'>
          {projects.map((project, index) => (
            <ProjectCardMobile key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </>
    )
  }
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");