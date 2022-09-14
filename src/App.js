
import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Products from './components/pages/Products/Products';
import Services from './components/pages/Services/Services';
import Footer from './components/pages/Footer/Footer';
import SignUp from './components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <AnimatePresence>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services'  component={Services} />
        <Route path='/products'   component={Products} />
        <Route path='/sign-up'  component={SignUp} />
      </Switch>
      </AnimatePresence>
     
      <Footer />
    </Router>
  );
}

export default App;