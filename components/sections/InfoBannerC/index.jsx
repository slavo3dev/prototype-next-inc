import Slider2 from "@components/slider/Slider2";

export const InfoBannerC = () => (
  <section className="py-12 md:py-20">
    <div className="container">
      <div className="flex flex-wrap -mx-3">
        <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
          <div className="max-w-md lg:max-w-xs mx-auto lg:ml-0 mb-6 lg:mb-0">
            <h2
              className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated"
              data-wow-delay=".3s"
            >
              Simple Solution for{" "}
              <span className="text-blue-500">Complex</span>{" "}
              Connections
            </h2>
            <p
              className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn"
              data-wow-delay=".9s"
            >
              A software solution is typically custom-built or
              configured to solve a specific customer problem.
            </p>
          </div>
          <div
            className="lg:absolute lg:bottom-0 lg:left-0 flex justify-center wow animate__animated animate__fadeIn"
            data-wow-delay=".5s"
          >
            <div id="carausel-fade-1-arrows" className="flex"></div>
          </div>
        </div>
        <div
          className="w-full lg:w-2/3 flex flex-wrap px-3 wow animate__animated animate__fadeIn"
          data-wow-delay=".5s"
        >
          <div className="relative w-full rounded">
            <div
              className="carausel-fade slick-carausel rounded"
              id="carausel-fade-1"
            >
              <Slider2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
