'use client'

import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { generateUniqueId } from "@/helpers/helpers";

const expContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};


const Exp = ({ exp }) => {
  const exRef = useRef();
  const inView = useInView(exRef);
  const myController = useAnimation();

  useEffect(() => {
    if (inView) {
      myController.start("visible");
    }
  }, [inView, myController]);
  return (
    <motion.li variants={expContainer}
    initial="hidden"
    animate={myController}
    transition={{ duration: 0.5, delay: 0.2 }}
    ref={exRef} className="rounded-lg bg-sky-950/40 p-4 w-[100%] md:w-[48%] text-white/70 flex-grow flex flex-col justify-between">
      <div className="flex flex-row gap-3 items-start text-sm w-full">
        <Image src={exp.thumb} width={40} height={40} alt={exp.title} />
        <div className="w-full">
          <h3 className="text-sky-400 text-lg font-bold">{exp.title}</h3>
          <h4 className="text-sky-700">{exp.subTitle}</h4>
          <h5>{`${exp.startDate} - ${exp.endDate}`}</h5>
          {exp.location && <h5 className="text-right text-orange-500">{exp.location}</h5>}
        </div>
      </div>
      <ul className="list-disc list-inside md:ps-4">
        {exp.exp.map(item => (
          <li key={generateUniqueId()} className="my-4">{item}</li>
        ))}
      </ul>
    </motion.li>
  );
};

export default Exp;
