import React, { Fragment } from "react";

// import blue from "../assets/img/blue.png";
// import black from "../assets/img/black.png";
// import green from "../assets/img/green.png";
// import red from "../assets/img/red.png";
// import orange from "../assets/img/orange.png";

import blue from "../assets/img/Varsity2/blue.png";
import red from "../assets/img/Varsity2/red.png";
import black from "../assets/img/Varsity2/black.png";

const ProductImages = () => {
  return (
    <Fragment>
      <img src={blue} alt="blue shoe" className="shoe show" color="blue" />
      <img src={red} alt="red shoe" className="shoe" color="red" />
      <img src={black} alt="black shoe" className="shoe " color="black" />
    </Fragment>
  );
};

export default ProductImages;
