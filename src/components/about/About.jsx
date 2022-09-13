import React from 'react';
import "./about.css";
import l1 from "../../assets/i4.png";
import AboutBox from './AboutBox';

const about = () => {
  return (
    <section className="about container section" id='about'>
        <h2 className="section__title">About us</h2>

        <div className="about__container grid">
            <img src={l1} alt="" className="about__img" />

            <div className="about__data grid">
                <div className="about__info">
                    <p className="about__description">
                    Founded in 2022, our agency partners with design leaders of tech brands and growing businesses to create simple, useful, and scalable digital solutions.
                    Like the world around us and the businesses we work with, our design practice is always moving and improving.
                    </p>
                    <a href="#Contact" className='btn'>Contact us</a>
                </div>

                <div className="about__skills grid">
                    
                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Members</h3>
                            <span className="skills__number">25+</span>
                        </div>

                        <div className="skills__bar">
                            <span className="skills__percentage members"></span>
                        </div>
                    </div>
                
                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Projects</h3>
                            <span className="skills__number">350+</span>
                        </div>

                        <div className="skills__bar">
                            <span className="skills__percentage projects"></span>
                        </div>
                    </div>
                
                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Experience</h3>
                            <span className="skills__number ">5 years</span>
                        </div>

                        <div className="skills__bar">
                            <span className="skills__percentage experience"></span>
                        </div>
                    </div>
                
                </div>

            </div>
        </div>

        <AboutBox />
    </section>
    )
}

export default about