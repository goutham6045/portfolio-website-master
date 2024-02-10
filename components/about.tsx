"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">I'm Goutham Kumar Mekala, a passionate 
        {" "}
        <span className="font-medium">full Stack AND ASP.NET Developer.</span>
        With a knack for both front-end and back-end technologies, 
        I specialize in crafting seamless digital experiences. 
        I'm dedicated to transforming innovative concepts into functional 
        applications. My toolbox includes REACT.JS, NODE.JS, JAVASCRIPT, JAVA, PYTHON, 
        ASP.NET MVC, HTML, CSS and more. I'm also well-versed in AZURE CLOUD
        technology, leveraging its capabilities to build scalable and reliable 
        solutions. Collaboration fuels my creativity, and I'm always excited 
        to learn and adapt in the ever-changing tech landscape. Let's connect 
        and bring ideas to life!
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing Cricket. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
