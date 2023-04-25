import React from "react";

const Preloader = () => {
  return (
    <>
      <div id="preloader-active">
        <img
          className="jump m-auto"
          style={{ margin: "auto" }}
          src={"/assets/imgs/logos/pn-logo.svg"}
          alt="Prototye.NEXT Logo"
        />
      </div>
    </>
  );
};

export default Preloader;
