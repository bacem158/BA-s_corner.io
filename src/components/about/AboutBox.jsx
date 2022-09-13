import React from 'react';
import "./about.css";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">198</h3>
                <span className="about__subtitle">Project Completed</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-bulb"></i>

            <div>
                <h3 className="about__title ">168</h3>
                <span className="about__subtitle">Coloboration</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">427</h3>
                <span className="about__subtitle">Satisfid clients</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className="about__title">35</h3>
                <span className="about__subtitle">Nominees winner</span>
            </div>
        </div>


    </div>
    )
}

export default AboutBox