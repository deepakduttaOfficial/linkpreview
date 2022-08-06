import React, { useState } from "react";
import Serach from "../images/search.gif";
import NotFound from "../images/result-not found.svg";
import Previewcard from "./Previewcard";
import { preview } from "./helper";
import { PacmanLoader } from "react-spinners";
//
const Linkpreview = () => {
  const [value, setValue] = useState("");
  const [animation, setAnimation] = useState({
    succss: false,
    loading: false,
    error: false,
    searchgif: true,
  });
  const { succss, loading, error, searchgif } = animation;
  const [data, setData] = useState({
    description: "",
    image: "",
    title: "",
    url: "",
  });
  const { description, image, title, url } = data;

  const isSubmit = (e) => {
    setAnimation({
      loading: true,
      succss: false,
      error: false,
      searchgif: false,
    });
    e.preventDefault();
    preview(value).then((res) => {
      if (res.error) {
        setAnimation({ loading: false, succss: false, error: true });
        setValue(" ");
      } else {
        setData({
          description: res.description,
          image: res.image,
          title: res.title,
          url: res.url,
        });
        setAnimation({ loading: false, succss: true, error: false });
      }
    });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={isSubmit}>
          <input
            type="text"
            className="css-input"
            placeholder="Get preview any website"
            onChange={(e) => {
              setValue(e.target.value);
              setAnimation({
                loading: false,
                succss: false,
                error: false,
                searchgif: true,
              });
            }}
          />
          <i className="bi bi-search"></i>
        </form>

        <div className="search-gif">
          {searchgif && <img src={Serach} alt="" />}
          <PacmanLoader color="#f6b352" loading={loading} size={30} />
        </div>
        {error && (
          <div className="search-gif error">
            <img src={NotFound} alt="" />
            <h3 className="error-message">
              Opps! page not found .Enter a valid url .
            </h3>
          </div>
        )}
      </div>

      {succss && (
        <Previewcard
          description={description}
          title={title}
          image={image}
          url={url}
        />
      )}
    </>
  );
};

export default Linkpreview;
