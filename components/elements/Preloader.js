import React from "react";

const Preloader = () => {
  return (
    <>
      <div id="preloader-active">
        <div className="preloader flex-1 content-center">
          <div className="logo absolute inset-y-2/4 jump center">
            <img
              src={"/assets/imgs/logos/felp_app.svg"}
              alt="Prototye.NEXT Logo"
            />
            <h1 className="text-lg font-semibold">Prototye.NEXT </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
