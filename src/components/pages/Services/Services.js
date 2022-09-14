import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne,homeObjThree } from './Data';
import Pricing from '../../Pricing';
import { motion } from 'framer-motion'

function Services() {
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit = {{opacity: 0}}
    >
      <Pricing />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </motion.div>
  );
}

export default Services;