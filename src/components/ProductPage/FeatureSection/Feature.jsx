/* eslint-disable no-unused-vars */
import React from "react";
import "./Feature.css";
import Data from "./Feature.json";
import FeatureCard from "./FeatureCard";

function Feature() {
 
  return (
    <div className="FtrContainer">
      <h1>Bitss-WAP Features</h1>
      <div className="ftrcard">
        {
          Data.map((data,index)=>{
            return <FeatureCard key={index} data={data}/>
          })
        }
      </div>
      <button className="ftrbutton">Contact Us</button>
    </div>
  );
}

export default Feature;
