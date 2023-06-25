import React from "react";
import { useState } from "react";

const Video = () => {
  const [imageURL, setImageURL] = useState("/shape-union-image.svg");

  //will be used to upload thumbnails

//   const handleChangeImage = () => {
//     // Update the image URL dynamically
//     const newImageURL = "path_to_new_image.jpg";
//     setImageURL(newImageURL);
//   };

  return (
    <div className="">
      <div className="relative flex max-w-[320px]">
        <svg
          width="320"
          height="320"
          viewBox="0 0 497 559"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="image-pattern"
              patternUnits="userSpaceOnUse"
              width="100%"
              height="100%"
            >
              <image
                href={imageURL}
                width="497"
                height="559"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          </defs>
          <path
            d="M475.411 1.00002L403.304 1.00002C400.011 1.00002 396.851 2.29719 394.511 4.61025L365.17 33.6075C361.69 37.0474 356.989 38.9773 352.09 38.9773L163.59 38.9773C158.691 38.9773 153.991 37.0473 150.51 33.6074L123.535 6.94733C119.68 3.13704 114.474 0.999984 109.049 0.999983L21.5896 0.999979C10.2201 0.999978 1.00015 10.2004 1.00015 21.5537L1.00018 133.609L1.00015 133.613L1.00006 133.68L1.00007 537.446C1.00007 548.8 10.22 558 21.5895 558L108.394 558C114.223 558 119.779 555.534 123.683 551.212L150.44 521.597C153.965 517.696 158.981 515.469 164.245 515.469L351.435 515.469C356.699 515.469 361.716 517.696 365.241 521.597L394.665 554.165C396.871 556.607 400.01 558 403.304 558L475.41 558C486.78 558 496 548.8 496 537.446L496 400.989L496 400.938L496 21.5537C496 10.2005 486.78 1.00002 475.411 1.00002Z"
            fill="url(#image-pattern)"
            stroke="url(#paint0_linear_145_13315)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_145_13315"
              x1="127.5"
              y1="598"
              x2="424.261"
              y2="-13.8586"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.2" />
              <stop offset="0.535192" />
              <stop
                offset="0.963542"
                stopColor="white"
                stopOpacity="0.2"
              />
            </linearGradient>
          </defs>
        </svg>
        <img
          className="absolute left-0 flex justify-center items-center right-0 mx-auto shadow-2xl mix-blend-plus-lighter  top-[40%] w-[70px] "
          src="/shape-union-image-button.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Video;
