import Head from "next/head";
import React, { useState } from "react";
import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [hiddenClass, setHiddenClass] = useState("hidden");

  const handleHidden = () => setHiddenClass("");

  const handleRemove = () => {
    if (hiddenClass === "") {
      setHiddenClass("hidden");
    }
  };

  return (
    <>
      <Head>
        <title>
          Prototye.NEXT Inc | Web & Mobile Software Development |
          Custom Solutions for Businesses
        </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="icon"
          sizes="16x16"
          href="/assets/logos/Prototye.NEXT_logo.svg"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
          integrity="sha512-Eak/29OTpb36LLo2r47IpVzPBLXnAMPAVypbSZiZ4Qkf8p/7S/XRG5xp7OKWPPYfJT6metI+IORkR5G8F900+g=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
        <script>new WOW().init();</script>
        <meta
          name="description"
          content="Expert web and mobile software development services for businesses. Our skilled developers create custom, user-friendly applications tailored to your unique requirements. Get in touch for a free consultation today!"
        />
        <meta
          property="og:title"
          content="Web & Mobile Software Development | Custom Solutions for Businesses"
        />
        <meta
          name="keywords"
          content="software development, web development, mobile development, custom software, app development, mobile applications, web applications, business solutions"
        />
        <meta
          property="og:image"
          content="www.prototype.next/assets/imgs/icons/instagram-blue.svg"
        />
        <meta property="og:url" content="www.prototypenext.com" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow"></meta>
        <meta
          property="og:site_name"
          content="Prototype.NEXT Inc."
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web & Mobile Software Development | Custom Solutions for Businesses"
        />
        <meta
          name="twitter:description"
          content="Expert web and mobile software development services for businesses. Our skilled developers create custom, user-friendly applications tailored to your unique requirements. Get in touch for a free consultation today!"
        />
        <meta
          name="twitter:image"
          content="URL-to-your-company-logo/image"
        />
        <meta name="twitter:site" content="@slavo3dev" />
        <meta name="twitter:creator" content="@slavo3dev"></meta>
        <link
          rel="canonical"
          href="https://www.prototyenext.com"
        ></link>
      </Head>
      <div className="main font-body text-body">
        <Header handleHidden={handleHidden} />
        <MobileMenu
          hiddenClass={hiddenClass}
          handleRemove={handleRemove}
        />
        {children}
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Layout;
