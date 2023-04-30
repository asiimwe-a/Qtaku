// import React from "react";

// const GenerateImages = () => {
//   return <div>GenerateImages</div>;
// };

// export default GenerateImages;

import React, { useState, useEffect } from "react";

const GenerateImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("your-api-endpoint");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      {images.map((image) => (
        <img key={image.id} src={image.url} alt={image.alt} />
      ))}
    </div>
  );
};

export default GenerateImages;
