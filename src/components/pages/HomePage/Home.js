import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';
import {  motion } from 'framer-motion'


function Home() {
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit = {{opacity: 0}}
    >
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </motion.div>
  );
}

export default Home;