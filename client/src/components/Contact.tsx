import React, { useRef } from "react";
import { Container } from "./Container";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoInstagram } from "react-icons/io5";

const Call: React.FC = () => {
  // const contactRef = useRef(null);

  return (
    <div
      className="bg-gray-200 dark:bg-gray-950 border-t dark:border-white border-black
     py-10 dark:text-white text-black"
      id="contactRef"
    >
      <Container>
        <div className="flex md:flex-row flex-col md:gap-0 gap-4">
          <h1 className="dark:text-white text-3xl font-bold p-4 md:justify-start justify-center flex">
            Get In Touch.
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="flex flex-col gap-4">
              {/*gmail box */}
              <div
                className="flex flex-row items-center gap-4 p-4 border border-white rounded-md 
              dark:bg-black bg-white"
              >
                <HiOutlineMail className="w-7 h-7" />
                <div className="font-bold">
                  <p>Email</p>
                  <p className="dark:text-grayColorDark text-grayColorLight">
                    mohammad.raei96@gmail.com
                  </p>
                </div>
              </div>
              {/*insta box */}
              <div
                className="flex flex-row items-center gap-4 p-4 border border-white rounded-md 
              dark:bg-black bg-white"
              >
                <IoLogoInstagram className="w-7 h-7" />
                <div className="font-bold">
                  <p>Instagram</p>
                  <p className="dark:text-grayColorDark text-grayColorLight">
                    @mdraei
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col gap-6 dark:bg-black
             bg-white border border-white rounded-md p-4  w-[450px]
             "
            >
              <h1 className="font-bold">Send a Message</h1>
              <p>Fill out the form below and I'll get back to you soon.</p>
              <input
                type="text"
                placeholder="Your Name"
                className="border border-black rounded-md  dark:bg-white bg-black dark:text-black text-white p-1 px-2"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border rounded-md border-black  dark:bg-white bg-black dark:text-black text-white p-1 px-2"
              />
              <textarea
                placeholder="Your Message"
                className="resize dark:bg-white bg-black max-h-96 max-w-[415px] min-w-[415px]
                 dark:text-black text-white rounded-md p-1 px-2"
              />
              <button className="border dark:border-white border-black p-2 rounded-md">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Call;
