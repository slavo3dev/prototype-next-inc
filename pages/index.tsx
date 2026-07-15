import Layout from "@components/layout/Layout";

import {
  Subscribe,
  Hero,
  InfoBanner,
  InfoBannerB,
  InfoBannerC,
  ContactBanner,
  HeadComponent,
} from "@components";

const Home = () => {
  return (
    <>
      <Layout>
        <HeadComponent
          title={
            "Software Web/Mobile Development & Consulting | AI Tools to scale your business"
          }
        />
        <Hero />
        <InfoBanner />
        <Subscribe />
        <InfoBannerB />
        <InfoBannerC />
        <ContactBanner />
      </Layout>
    </>
  );
};

export default Home;
