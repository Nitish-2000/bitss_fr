/* eslint-disable no-unused-vars */
import React from "react";
import "./Products.css";
import { getImageurl } from "../../../util";

function Products() {
  return (
    <div className="prContainer">
      <h1 className="prtitle">Bitss Cyber Security Products</h1>
      <button className="prButton">
        <img
          className="prButtonMan"
          src={getImageurl("products/mask_man.png")}
        />{" "}
        <p>All about cyber bitss Security</p>
      </button>
      <div className="prcontents">
        <div className="prlist1">
          <div className="prlist">
            <img
              className="primage"
              src={getImageurl("products/website_protection.svg")}
            />
            <div className="prcontext">
              <h4 className="prcontexttitle">
                Bitss WAP for database website protection
              </h4>
              <p className="prcontextDescription">
                Bitss WAP offers an innovative solution ensuring that your
                sensitive information remains secure from cyber threats.
              </p>
            </div>
          </div>

          <div className="prlist">
            <img
              className="primage"
              src={getImageurl("products/contact.png")}
            />
            <div className="prcontext">
              <h4 className="prcontexttitle">
                Bitss C antispam for contact page on website
              </h4>
              <p className="prcontextDescription">
                Bitss C offers a powerful and intelligent antispam system that
                ensures a hassle-free experience for your website visitors and
                enhances the security of your communication channels.{" "}
              </p>
            </div>
          </div>

          <div className="prlist">
            <img className="primage" src={getImageurl("products/form.png")} />
            <div className="prcontext">
              <h4 className="prcontexttitle">Bitss-C Preselect Form</h4>
              <p className="prcontextDescription">
                Free contact form permits selecting your contact input details.
                And and infuse bitss security payable options
              </p>
            </div>
          </div>
        </div>
        <div className="prlist2">
          <div className="prlist">
            <img
              className="primage"
              src={getImageurl("products/server_protection.png")}
            />
            <div className="prcontext">
              <h4 className="prcontexttitle">
                Bitss N for database network protection includes dedicted
                servers within network{" "}
              </h4>
              <p className="prcontextDescription">
                Bitss N offers an innovative solution designed to fortify your
                networks defenses, ensuring that your sensitive information
                remains secure.
              </p>
            </div>
          </div>

          <div className="prlist">
            <img
              className="primage"
              src={getImageurl("products/dedicated_server_protetion.png")}
            />
            <div className="prcontext">
              <h4 className="prcontexttitle">
                Bitss S for dedicated server database protection
              </h4>
              <p className="prcontextDescription">
                Bitss S offers a comprehensive and proactive approach to
                database security, ensuring that your sensitive information
                remains safe and secure.
              </p>{" "}
            </div>
          </div>

          <div className="prlist">
            <img
              className="primage"
              src={getImageurl("products/bitss_v.png")}
            />
            <div className="prcontext">
              <h4 className="prcontexttitle">
                Bitss V verifies IT identity, identification of false fake copy
                sites, advertising, brand infringement{" "}
              </h4>
              <p className="prcontextDescription">
                Bitss V offers a powerful and proactive approach to ensure the
                legitimacy of your digital presence and protect your brand from
                unauthorized use.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
