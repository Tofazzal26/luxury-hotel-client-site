import { Helmet } from "react-helmet-async";
import letTalk from "../../../public/About/contact.png";

const Contact = () => {
  const handleContact = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-[calc(100vh-332px)]">
      <Helmet>
        <title>Luxury Hotel || Contact</title>
      </Helmet>
      <div className="mt-[80px]">
        <div className="container mx-auto">
          <div className="my-12">
            <h1 className="text-center text-[40px] my-6 font-semibold">
              Contact Us
            </h1>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
              <div className="flex flex-col justify-between items-center">
                <div className="">
                  {/* <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                    Let's talk!
                  </h2>
                  <div className="dark:text-gray-600">
                    <p className="text-lg">Welcome to My Hotel</p>
                  </div> */}
                  <img src={letTalk} alt="" className="" />
                </div>
              </div>
              <div className="mt-[80px]">
                <form
                  onSubmit={handleContact}
                  noValidate=""
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="text-base font-semibold">
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Name"
                      className="w-full p-3 rounded dark:bg-gray-100 border-2 border-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-base font-semibold">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-3 rounded dark:bg-gray-100 border-2 border-gray-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-base font-semibold"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="3"
                      className="w-full p-3 rounded dark:bg-gray-100 border-2 border-gray-400"
                      spellCheck="false"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-[#ffae4c] dark:text-gray-50"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
