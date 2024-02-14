import React from "react";
import "./Hero.css";
import { getImageurl } from "../../../util";
function Hero() {
  return (
    <div className="prHeroContainer">
      <h1 className="prHeroContainerh" >
        Bitss WAP - Database Website Protection | Comprehensive Security
        Solutions
      </h1>
      <p>
        Donot compromise on security—choose Bitss WAP pioneering research to
        protect your website data{" "}
      </p>
      <div className="prHeroCard">
        <div className="card-left">
          <img src={getImageurl("header/bitss_logo.png")} alt="bitss_logo" />
          <h3>Bitss WAP for database website protection </h3>
          <p className="prHerop1">
            Secure your website, administration site,<br></br> video content site with
            Bitss wp and stop data /client theft, stops video :
          </p>
          <ul className="prHerolist">
            <li>Data theft _ Intrusion</li>
            <li>Hacking / ransom demands</li>
            <li>Spamming from website contact page</li>
            <li>Protect your revenue and data assets</li>
            <li>Protect your client base from theft</li>
          </ul>
          <p className="prHerop2">
            With research continued Bitss ensures updated security for real time
            protection.
          </p>
        </div>
        <div className="card-right">
          <h1>Bitss WAP</h1>
          <h2>Website Admin Panel Protection</h2>
          <span className="prherop">
            <h1>125 €</h1> First year only
          </span>
          <h3>What is included:</h3>
          <p>
            ✓ Bitss WAP - 125.00€ purchase price which includes ownership with
            first year training upgrade and support
          </p>
          <p>
            ✓ 2nd year if required to continue support upgrade and training
            29.50€ year
          </p>
          <p>✓ Bitss C anti spam for website contact page</p>
          <p>✓ Visit BITSS-WP user manual to know how our products work.</p>
          <div className="prHeroBtn">
          <button className="prHeroCartBtn">Add to Cart</button>
          <button className="prHeroUserBtn">BITSS-WAP User Manual</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
