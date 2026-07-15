import Link from "next/link";

export const InfoBannerB = () => (
  <section className="py-20" id="how-we-work">
    <div className="container">
      <div className="flex flex-wrap -mx-8">
        <div className="w-full lg:w-1/2 px-8">
          <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
            <h2
              className="mb-4 text-3xl lg:text-4xl font-bold font-heading max-w-md wow animate__animated animate__fadeIn"
              data-wow-delay=".1s"
            >
              Unlock the Benefits
              <span className="text-blue-600"> of</span> ChatGPT or AI
              Integration
            </h2>
            <p
              className="mb-8 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn"
              data-wow-delay=".3s"
            >
              By integrating ChatGPT into your business, you will stay
              ahead of the curve, capitalizing on the latest
              advancements in conversational AI to enhance user
              experiences, optimize operations, and drive growth. Do
              not miss out on the opportunity to revolutionize your
              business with ChatGPT integration.
            </p>
            {/* <Link href="/services">
              <a
                className="inline-block text-xs py-4 px-8 text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded hover-up-2 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                Learn More
              </a>
            </Link> */}
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-8">
          <ul className="space-y-12">
            <li
              className="flex -mx-4 wow animate__animated animate__fadeIn"
              data-wow-delay=".3s"
            >
              <div className="px-4">
                <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                  1
                </span>
              </div>
              <div className="px-4">
                <h3 className="my-4 text-xl font-semibold">
                  Enhanced Customer Support
                </h3>
                <p className="text-blueGray-400 leading-loose">
                  Integrate ChatGPT into your customer support system
                  to provide instant, accurate, and personalized
                  assistance 24/7. Reduce wait times, increase
                  customer satisfaction, and free up your support
                  staff to focus on more complex tasks.
                </p>
              </div>
            </li>
            <li
              className="flex -mx-4 wow animate__animated animate__fadeIn"
              data-wow-delay=".5s"
            >
              <div className="px-4">
                <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                  2
                </span>
              </div>
              <div className="px-4">
                <h3 className="my-4 text-xl font-semibold">
                  AI-Powered Sales Assistance
                </h3>
                <p className="text-blueGray-400 leading-loose">
                  Harness the power of ChatGPT to guide potential
                  customers through the purchasing process, offering
                  tailored product recommendations, answering
                  questions, and addressing concerns – all in
                  real-time, boosting conversion rates and sales.
                </p>
              </div>
            </li>
            <li
              className="flex -mx-4 wow animate__animated animate__fadeIn"
              data-wow-delay=".7s"
            >
              <div className="px-4">
                <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                  3
                </span>
              </div>
              <div className="px-4">
                <h3 className="my-4 text-xl font-semibold">
                  Fast Content Creation
                </h3>
                <p className="text-blueGray-400 leading-loose">
                  ChatGPT accelerates the content creation process,
                  generating high-quality drafts for blog posts,
                  social media updates, email campaigns, and more.
                  With ChatGPT, your marketing team can focus on
                  refining and optimizing content, while the AI
                  handles the heavy lifting.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
