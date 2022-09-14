import React from 'react';
import HeroSection from '../../HeroSection';
import {  homeObjThree } from './Data';
import { motion } from 'framer-motion'

function SignUp() {
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit = {{opacity: 0}}
    >
     
      <HeroSection {...homeObjThree} />
    </motion.div>
  );
}

export default SignUp;