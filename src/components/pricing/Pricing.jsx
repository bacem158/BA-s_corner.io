import React from 'react';
import "./pricing.css";
import Image1 from "../../assets/price-1.svg"
import Image2 from "../../assets/price-2.svg"
import Image3 from "../../assets/price-3.svg"


const pricing = () => {
  return (
    <section className="pricing container section">
      <h2 className="section__title">Pricing Plans</h2>

      <div className="pricing__container grid">
        
        <div className="pricing__item">
          <img src={Image1} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Basic</h3>
          <p className="pricing__title">A Simple option but powerful to manage your business</p>
          <h3 className="pricing__support">Email support</h3>
          <h3 className="price">
            <em>$</em> 25 <span>Month</span>
          </h3>
          <a href="#Contact" className="btn">Get Started</a>
        </div>
        
        <div className="pricing__item best">
          <span className="badge">Recommended</span>
          <img src={Image2} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Premium</h3>
          <p className="pricing__title">Unlimited product including app integration and more features</p>
          <h3 className="pricing__support">Mon-Fri support</h3>
          <h3 className="price">
            <em>$</em> 50 <span>Month</span>
          </h3>
          <a href="#Contact" className="btn">Get Started</a>
        </div>
        
        <div className="pricing__item">
          <img src={Image3} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Ultimate</h3>
          <p className="pricing__title">A wise option for large companies and individuals</p>
          <h3 className="pricing__support">24/7 support</h3>
          <h3 className="price">
            <em>$</em> 100 <span>Month</span>
          </h3>
          <a href="#Contact" className="btn">Get Started</a>
        </div>


      </div>
    </section>
    )
}

export default pricing