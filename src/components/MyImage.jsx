import React, { useState } from "react";

const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);
  return (
    <div className="wholeImg">
      <div className="myImgs">
        {imgs.map((curElm, index) => {
          return (
            <figure>
              <img
                src={curElm.url}
                alt={curElm.filename}
                className="box-image--style"
                key={index}
                onClick={() => {
                  setMainImage(imgs[index]);
                }}
              />
            </figure>
          );
        })}
      </div>
      <div className="main-screen">
        <img src={mainImage.url} alt={imgs[0].filename} />
      </div>
    </div>
  );
};

export default MyImage;
