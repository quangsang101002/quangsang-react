import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjFour } from './Data';
import {  motion } from 'framer-motion'

function Products() {
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit = {{opacity: 0}}
    >
    
      <HeroSection {...homeObjFour} />
    </motion.div>
  );
}

export default Products;