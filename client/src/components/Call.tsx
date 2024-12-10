import React from "react";
import { Container } from "./Container";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoInstagram } from "react-icons/io5";

const Call: React.FC = () => {
  return (
    <div className="bg-gray-900 py-4 dark:text-white text-black">
      <Container>
        <div>
          <h1 className="dark:text-white text-3xl font-bold py-4">
            Get In Touch.
          </h1>
          <div className="flex flex-row">
            <div className="flex flex-col gap-4">
              {/*gmail box */}
              <div className="flex flex-row items-center gap-4 p-4 border border-white rounded-md bg-black">
                <HiOutlineMail className="w-7 h-7" />
                <div className="font-bold">
                  <p>Email</p>
                  <p className="dark:text-grayColorDark text-grayColorLight">
                    mohammad.raei96@gmail.com
                  </p>
                </div>
              </div>
              {/*insta box */}
              <div className="flex flex-row items-center gap-4 p-4 border border-white rounded-md bg-black">
                <IoLogoInstagram className="w-7 h-7" />
                <div className="font-bold">
                  <p>Instagram</p>
                  <p className="dark:text-grayColorDark text-grayColorLight">
                    @mdraei
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-black border border-white rounded-md p-4">
              <h1>Send a Message</h1>
              <p>Fill out the form below and I'll get back to you soon.</p>
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-md bg-black"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="border rounded-md"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Call;
