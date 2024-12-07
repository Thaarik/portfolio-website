"use client";

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useTheme } from "next-themes";

export const ContactForm = () => {
  const { theme } = useTheme();
  const [hydrated, setHydrated] = useState(false);
  const [token, setToken] = useState<string>("");
  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "69574ce2-52f0-44e9-8347-ba88acb65206");

    const object = Object.fromEntries(formData);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: token,
        ...object,
      }),
    });
    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully! I will reach out to you soon!! 😉",
        icon: "success",
      });
    }
  }

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // Or a loading spinner
  }
  return (
    <section
      id="contact"
      className="w-full h-auto flex justify-center items-center mt-32 md:mt-2"
    >
      <div className="w-[90%] h-auto p-6 flex flex-col md:flex-row justify-between items-center ">
        <div
          className={`${
            theme === "light" ? "text-gray-700" : "text-white"
          } w-full md:w-[40%] text-balance text-lg  p-6 rounded-lg text-`}
        >
          <p className="text-2xl font-bold mb-4 leading-relaxed">
            Need Help with an Awesome Software or Website and Mobile App
            Building?
          </p>
          <p className="leading-relaxed mb-4">
            Whether it’s crafting a sleek landing page, working with the latest
            technologies, or bringing your unique vision to life, I’m here to
            help!
          </p>
          <p className=" leading-relaxed">
            Simply fill out the contact form, and I’ll get in touch with you
            soon to discuss how we can make your project a success. Let’s build
            something amazing together!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className={`max-w-[500px] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] h-auto ${
            theme === "dark"
              ? "bg-gray-700 bg-opacity-90 text-white"
              : "bg-white text-gray-700"
          } p-6 rounded-lg shadow-lg m-4 hover:shadow-2xl transition-shadow duration-300 animate-fade-in `}
        >
          <p
            className={`font-bold text-2xl text-center ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Contact Form
          </p>
          <div className="mt-5">
            <label
              className={`block mb-2 text-sm font-medium ${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Full Name
            </label>
            <input
              type="text"
              className={`w-full h-[50px] ${
                theme === "dark"
                  ? "bg-gray-800 text-white placeholder-gray-400"
                  : "bg-gray-100 text-gray-800 placeholder-gray-500"
              } border-2 border-gray-300 rounded-lg outline-none p-4 focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div className="mt-5">
            <label
              className={`block mb-2 text-sm font-medium ${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Email Address
            </label>
            <input
              type="email"
              className={`w-full h-[50px] ${
                theme === "dark"
                  ? "bg-gray-800 text-white placeholder-gray-400"
                  : "bg-gray-100 text-gray-800 placeholder-gray-500"
              } border-2 border-gray-300 rounded-lg outline-none p-4 focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
          <div className="mt-5">
            <label
              className={`block mb-2 text-sm font-medium ${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Your Message
            </label>
            <textarea
              name="message"
              className={`w-full h-[150px] resize-none ${
                theme === "dark"
                  ? "bg-gray-800 text-white placeholder-gray-400"
                  : "bg-gray-100 text-gray-800 placeholder-gray-500"
              } border-2 border-gray-300 rounded-lg outline-none p-4 focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className="w-full flex justify-center items-center mt-5">
            <HCaptcha
              theme={theme === "light" ? "light" : "dark"}
              sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
              reCaptchaCompat={false}
              onVerify={() =>
                setToken(process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string)
              }

            />
          </div>
          <button
            type="submit"
            className={`w-full h-[50px] mt-6 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105 ${
              theme === "dark"
                ? "bg-blue-600 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
