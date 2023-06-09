import React, { useState } from "react";
import axios from "axios";

export const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setState("Loading");
    try {
      const response = await axios.post("/api/subscribe", { email });
      setState("Success");
      setTimeout(() => {
        setState("idle");
      }, 900);

      setEmail("");
    } catch (e) {
      setErrorMsg(e.response.data.detail);
      setState("Error");
      setTimeout(() => {
        setState("idle");
      }, 900);
    }
  };

  const subscribeForm = (
    <div className="flex flex-wrap max-w-lg mx-auto">
      <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blue-500 border border-blue-300 rounded">
        <svg
          className="h-6 w-6 my-auto text-blue-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
        </svg>
        <input
          className="w-full pl-3 py-4 text-xs text-white placeholder-white font-semibold leading-none bg-blue-500 outline-none"
          type="text"
          placeholder="Type your e-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <button
        className="w-full md:w-auto py-4 px-8 text-xs text-white text-blue-800 hover:text-white font-semibold leading-none border border-blue-300 hover:border-blue-300 bg-white hover:bg-blue-500 rounded transition duration-300 ease-in-out"
        type="submit"
        onClick={handleSubscribe}
      >
        {" "}
        Sign Up{" "}
      </button>
    </div>
  );

  return (
    <section className="py-20 bg-blue-500">
      <div className="container">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="mb-4 text-3xl lg:text-3xl text-white font-bold font-heading">
            <span>Subscribe now to </span>
            <span className="text-blue-200">Our Newsletter</span>{" "}
            <br />
            <span>and get the Coupon code.</span>
          </h2>
          <p className="mb-8 text-blueGray-200">
            All your information is completely confidential
          </p>
          {state === "Success" ? (
            <p className="lg:text-4xl text-blueGray-200">
              Awesome, you have been subscribed to Prototye.NEXT
            </p>
          ) : (
            subscribeForm
          )}
        </div>
      </div>
      {state === "Error" &&
        alert(
          "Oops Something went WORONG \nPlease Try Again or You are already a member !!!",
        )}
    </section>
  );
};
