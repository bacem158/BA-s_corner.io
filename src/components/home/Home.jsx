import React from 'react';
import "./home.css";
// import Logo from "../../assets/home-1.svg";
import i1 from "../../assets/i1.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const home = () => {
  return (
    <section className='home container' id='home'>
      <div className="intro">
        <img src={i1}  alt='' className='home__img' />
        <h1 className='home__name'>BA'S Corner</h1>
        <span className='home__education'>Custom Web Development Company.</span>

        <HeaderSocials />

        <a href="#Contact" className='btn'>Contact us</a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default home