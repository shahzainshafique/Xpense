import React from "react";

//import data
import { overview } from "../data";
const Brands = () => {
  const { brands } = overview;
  return (
    <section className="py-9">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6">
        {/*Brands*/}
        {brands.map((item, i) => {
          const { image, delay } = item;
          return (
            <div key={i} data-aos="fade-up" data-aos-delay={delay}>
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
