import { SignIn } from "@components";

export const PriceBanner = () => (
  <section
    className="py-20 xl:bg-contain bg-top bg-no-repeat"
    style={{
      backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')",
    }}
  >
    <div className="container">
      <div className="text-center mb-8">
        <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated">
          <span>Choose Your</span>
          <br />
          <span className="text-blue-600">Best </span>
          <span>Pricing Plan</span>
        </h2>
        <p
          className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeIn animated"
          data-wow-delay=".3s"
        >
          Great Things In Business Are Never Done By One Person
        </p>
        <br />
        <p
          className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeIn animated"
          data-wow-delay=".3s"
        >
          !!! ALL PLANS ARE FREE - TILL WE ARE IN BETA MODE !!!
        </p>
      </div>
      <div className="flex flex-wrap sm:justify-center mb-10">
        <label
          className="flex items-center mr-8 mb-2 wow animate__animated animate__fadeIn animated"
          data-wow-delay=".3s"
        >
          <input type="radio" name="billing" value="1" />
          <span className="mx-2 font-semibold">Monthly Billing</span>
          <span className="inline-flex items-center justify-center w-12 h-10 bg-blue-500 text-white font-semibold rounded">
            $59
          </span>
        </label>
        <label
          className="flex items-center mb-2 wow animate__animated animate__fadeIn animated"
          data-wow-delay=".5s"
        >
          <input type="radio" name="billing" value="2" />
          <span className="mx-2 font-semibold">Annual Billing</span>
          <span className="inline-flex items-center justify-center w-12 h-10 bg-blue-500 text-white font-semibold rounded">
            $99
          </span>
        </label>
      </div>
      <SignIn />
    </div>
  </section>
);
