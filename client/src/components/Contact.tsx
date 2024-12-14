import React, { ChangeEvent, useState } from "react";
import { Container } from "./Container";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import axios from "axios";

//toast
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//interface
interface TFormData {
  name: string;
  email: string;
  message: string;
}

const Call: React.FC = () => {
  const [isInputs, setIsInputs] = useState<TFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setIsInputs({ ...isInputs, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await axios.post("https://mdraei.ir/message/post", {
        name: isInputs.name,
        email: isInputs.email,
        message: isInputs.message,
      });

      if (response.status === 200) {
        // Test toast functionality by triggering it directly
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        });
      } else {
        // Test toast functionality by triggering it directly
        toast.success("Failed to send the message.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error: any) {
      if (error.response) {
        console.log(`Error sending message: ${error.response.data.message}`);
      } else if (error.request) {
        console.log("Error: No response from server.");
      } else {
        console.log("Error sending the message: " + error.message);
      }
    } finally {
      setIsInputs({ name: "", email: "", message: "" });
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-gray-200 dark:bg-gray-950 border-t dark:border-white border-black  dark:text-white text-black"
      id="contactRef"
    >
      <Container>
        <div className="flex md:flex-row flex-col md:gap-0 gap-4 md:px-0 px-10 py-10">
          <h1 className="dark:text-white text-3xl font-bold p-4 md:justify-start justify-center flex">
            Get In Touch.
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="flex md:flex-col flex-row w-full gap-4 justify-center">
              {/* Gmail box */}
              <a
                href="mailto:mohammad.raei96@gmail.com"
                className="flex flex-row items-center justify-center gap-4 p-4 border border-white rounded-md dark:bg-black bg-white"
              >
                <HiOutlineMail className="w-10 h-10" />
              </a>
              {/* Instagram box */}
              <a
                href="https://www.instagram.com/mdraei/profilecard/?igsh=NGM3bnI3bGd5eWxn"
                className="flex flex-row items-center gap-4 p-4 justify-center border border-white rounded-md dark:bg-black bg-white"
              >
                <IoLogoInstagram className="w-10 h-10" />
              </a>
              <a
                href="https://github.com/mohammadaliraei"
                className="flex flex-row items-center gap-4 p-4 justify-center border border-white rounded-md dark:bg-black bg-white"
              >
                <IoLogoGithub className="w-10 h-10" />
              </a>
            </div>

            <div className="flex flex-col gap-6 dark:bg-black bg-white border border-white rounded-md p-4 w-[400px]">
              <h1 className="font-bold">Send a Message</h1>
              <p>Fill out the form below and I'll get back to you soon.</p>
              <input
                name="name"
                value={isInputs.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                className="border border-black rounded-md dark:bg-white bg-black dark:text-black text-white p-1 px-2"
              />
              <input
                name="email"
                value={isInputs.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                className="border rounded-md border-black dark:bg-white bg-black dark:text-black text-white p-1 px-2"
              />
              <textarea
                name="message"
                value={isInputs.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="resize dark:bg-white bg-black max-h-96 max-w-[365px] min-w-[350px] dark:text-black text-white rounded-md p-1 px-2"
              />
              <button
                onClick={handleSubmit}
                className="border dark:border-white border-black p-2 rounded-md"
              >
                {isLoading ? "Processing..." : "Send Message"}
              </button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Call;
