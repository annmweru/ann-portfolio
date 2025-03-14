import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words = [
  "Front-End Developer",
  "UI/UX Enthusiast",
  "JavaScript Lover",
  "Problem Solver",
];

const RotatingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
      className="text-cyan text-3xl font-bold"
    >
      {words[index]}
    </motion.div>
  );
};

export default RotatingText;
