import React from "react";

const Bottle = ({ bottle }) => {
  const { id, name, img, price } = bottle;
  return (
    <div
      style={{
        border: "4px solid aqua",
        margin: "20px",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h5>{name}</h5>
      <img
        src={img}
        alt=""
        style={{
          height: "200px",
          width: "150px",
          objectFit: "cover",
        }}
      />
      <p>Price: {price}</p>
    </div>
  );
};

export default Bottle;
