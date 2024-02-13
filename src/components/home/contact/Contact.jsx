/* eslint-disable no-unused-vars */
import React from "react";
import "./Contact.css";
import { getImageurl } from "../../../util";

function Contact() {
  return (
    <div className="cntContaner">
      <div className="cntContent">
        <h1>
          Ready to get started? It is Swift, Secure, and Seamless: Experience
          the Power of Bitss.fr Cyber Security
        </h1>
      </div>
      <div className="cntAddress">
        <img src={getImageurl("header/bitss_logo.png")} alt="bitss image" />
        <h3>Bitss by BFIN SASU</h3>
        <p>
          8 rue dublin 34200 sète france support@bobosohomail.com +
          0033666100010
        </p>
        <button>GET A FREE CONSULT</button>
      </div>
    </div>
  );
}

export default Contact;
