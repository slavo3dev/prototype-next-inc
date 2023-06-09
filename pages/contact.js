import React, { useState } from "react";
import Layout from "../components/layout/Layout";

import {
  ContactForm,
  Subscribe,
  HeadComponent,
  Hero,
} from "@components";
import Head from "next/head";
const Contact = () => {
  return (
    <>
      <Layout>
        <HeadComponent
          title={
            "Contact Prototye.NEXT for more information | Software Web & Mobile Development"
          }
        />
        <Hero />
        <section className="py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="max-w-md mb-8 mx-auto">
                <span
                  className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  Contact Us
                </span>
                <h2
                  className="mt-2 text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".s"
                >
                  We will{" "}
                  <span className="text-blue-500">be glad</span> to
                  hear from you!
                </h2>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        <Subscribe />
      </Layout>
    </>
  );
};

export default Contact;
