import Footer from '@/components/footer/footer';
import About from '@/components/Home/About';
import App_install from '@/components/Home/App_install';
import HomePage from '@/components/Home/HomePage';
import How_it_work from '@/components/Home/How_it_work';
import People from '@/components/Home/People';
import Pricing from '@/components/Home/Pricing';
import Why_choose from '@/components/Home/Why_Choose';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import { FunctionComponent } from 'react'
const Home: FunctionComponent = () => {
return (
      <div>
             <Navbar/>
        <HomePage/>
        <About/>
        <How_it_work/>
        <Why_choose/>
        <App_install/>
        <People/>
        <Pricing />
        <hr></hr>
        <Footer />
      </div>
    );
  };
  export default Home;
  