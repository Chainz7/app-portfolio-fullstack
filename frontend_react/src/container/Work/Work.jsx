import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";

function Work() {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const sortByRealPrefix = (items) => {
    const realItems = items.filter((work) =>
      work.description.startsWith("Real Case")
    );
    const otherItems = items.filter(
      (work) => !work.description.startsWith("Real Case")
    );

    return [...realItems, ...otherItems];
  };

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      const sortedData = sortByRealPrefix(data);
      setWorks(sortedData);
      setFilterWork(sortedData);
    });
  }, []);

  const hanldeWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
<<<<<<< HEAD
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["HTML / CSS / JS / PHP", "React JS", "Laravel", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => hanldeWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
=======
      <h2 className='head-text'>My Creative <span>Portfolio</span> Section</h2>
      
      <div className='app__work-filter'>
        {['HTML / CSS / JS / PHP', 'React JS', 'Laravel', 'Full Stack', 'Game', 'All'].map((item, index) => (
          <div 
            key={index}
            onClick={() => hanldeWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          > 
            {item}
          </div>
        ))}
>>>>>>> 3d7944d5cb03f06daf7dd35523b4921c151af2ea
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default AppWrap(
<<<<<<< HEAD
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
=======
  MotionWrap(Work, 'app__works'), 
  'work',
  'app__primarybg'
)
>>>>>>> 3d7944d5cb03f06daf7dd35523b4921c151af2ea
