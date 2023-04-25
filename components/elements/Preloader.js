import React from "react";

const Preloader = () => {
  return (
    <>
      <img
        id="preloader-active"
        className="jump"
        style={{
          margin: "auto",
          marginTop: "10%",
        }}
        src={"/assets/imgs/logos/pn-logo.svg"}
        alt="Prototye.NEXT Logo"
      />
    </>
  );
};

export default Preloader;
