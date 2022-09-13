import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "We provide intuitive User Interface (UI) and engaging User Experience (UX) design services for web and mobile applications across various industries.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "We deliver a wide range of custom, end-to-end web development services that cater to various business needs and industries.",
  },
  {
    id: 3,
    image: Image3,
    title: "Mobile Development",
    description:
      "Increase your business reach and customer engagement with our extensive mobile development expertise.",
  },
];

const services = () => {
  return <section className="services container section" id="services">
    <h2 className="section__title">Services</h2>

    <div className="services__container grid">
      {data.map(({id, image, title, description}) => {
        return (
          <div className="services__card" key={id}>
            <img src={image} alt="" className="services__img"></img>

            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        );
      })}
    </div>
  </section>
}

export default services