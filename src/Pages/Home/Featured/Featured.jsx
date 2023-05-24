import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
  return (
    <div className="mb-24 bg-fixed" id="featured">
      <SectionTitle
        subHeading="Check it out"
        heading="featured items"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-600 bg-opacity-30 space-x-16 py-20 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="space-y-5 text-white">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            impedit aperiam, ipsum cum quisquam hic vero ad perspiciatis
            voluptatum repellendus!
          </p>
          <button className="btn btn-outline border-0 border-b-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
