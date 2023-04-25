import { ContactForm } from "@components";

export const ContactBanner = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-2xl lg:max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h2
              className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated"
              data-wow-delay=".1s"
            >
              Get in touch!
            </h2>
            <p
              className="text-blueGray-400 wow animate__animated animate__fadeIn animated"
              data-wow-delay=".5s"
            >
              We will be glad to hear from you
            </p>
          </div>
          <div className="flex flex-wrap -mx-3 text-center">
            <div
              className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated"
              data-wow-delay=".1s"
            >
              <svg
                className="mb-6 h-8 w-8 mx-auto text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <div className="leading-relaxed">
                <span className="text-sm text-blueGray-400">
                  Phone
                </span>
                <p>
                  <a href="tel:305-560-0950">+ 1 305-560-0950</a>
                </p>
                <p>
                  <a href="tel:786-702-4261">+ 1 786-702-2331</a>
                </p>
              </div>
            </div>
            <div
              className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated"
              data-wow-delay=".3s"
            >
              <svg
                className="mb-6 h-8 w-8 mx-auto text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <div className="leading-relaxed">
                <span className="text-sm text-blueGray-400">
                  E-mail
                </span>
                <p>slavo@slavo.io</p>
              </div>
            </div>
            <div
              className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated"
              data-wow-delay=".5s"
            >
              <svg
                className="mb-6 h-8 w-8 mx-auto text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <div className="leading-relaxed">
                <span className="text-sm text-blueGray-400">
                  Address
                </span>
                <p>55 NE 5th Street</p>
                <p>Miami(FL), 33132</p>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
