/* eslint-disable react/prop-types */
import Head from "next/head";

export const HeadComponent = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="title"
        content="Web & Mobile Software Development | AI Integration | Custom Solutions"
      />
      <meta
        name="description"
        content="Experience cutting-edge web and mobile software development with AI integration, tailored to elevate your business. Custom web applications, mobile apps, AI-powered tools, and more."
      />
      <meta
        name="keywords"
        content="web software development, mobile software development, AI integration, custom web applications, mobile app development, eCommerce solutions, responsive web design, AI-powered web solutions, AI-enhanced mobile apps, chatbots, predictive analytics, NLP"
      />
      <meta name="author" content="Prototype.NEXT" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
    </Head>
  );
};
