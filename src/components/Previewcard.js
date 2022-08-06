import React, { useState } from "react";
import "../Card.css";
import Searchpreview from "../images/search.png";

const Previewcard = ({ description, image, title, url }) => {
  const [value, setValue] = useState(false);
  let endValue = value ? description.length : 100;

  return (
    <>
      <div className="customcard">
        <div className="title">
          Preview <img src={Searchpreview} alt="" />
        </div>
        <div className="card-container">
          <img src={image} alt="..." />
          <div className="card-content">
            <h3>{title}</h3>
            <p>
              {description && description.length >= 100
                ? `${description.substring(0, endValue)}`
                : description}{" "}
              {description && description.length > 100 && (
                <button
                  className="subString"
                  type="button"
                  onClick={() => {
                    setValue(!value);
                  }}
                >
                  {value ? "...Show less" : `...more`}
                </button>
              )}{" "}
            </p>
          </div>
        </div>

        <a href={url} rel="noreferrer" target="_blank" className="card-button">
          Website link
        </a>
      </div>
    </>
  );
};

export default Previewcard;
