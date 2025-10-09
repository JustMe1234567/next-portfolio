"use client";

import { socialMedia } from "@/data";
import Image from "next/image";
import { useState } from "react";
import {
  FaEnvelope,
  FaLocationArrow,
  FaLocationPin,
  FaPhone,
} from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Message sent!");

    // ✅ Clear inputs
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <footer className="w-full pt-20 pb-5 relative" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Let&apos;s turn your
          <span className="text-purple"> &#x201C;uhm&#x201D;</span> into
          <span className="text-purple"> &#x201C;awe&#x201D;</span> hihi
        </h1>
        <Image
          src={"/mc.gif"}
          alt="mc"
          width={100}
          height={100}
          className="mt-5"
        />
        {/* <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p> */}

        {/* ✅ Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg  flex-col gap-4 mt-6 z-50 hidden"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-black-200 text-white border border-black-300 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-black-200 text-white border border-black-300 outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-black-200 text-white border border-black-300 outline-none resize-none"
          />

          {/* ✅ Magic Button as Submit */}
          <div className="self-center mt-2">
            <MagicButton
              title="Send Message"
              icon={<FaLocationArrow />}
              position="right"
              forForm={true}
              className="active:scale-95 transition-transform duration-150" // ✅ Click animation
            />
          </div>
        </form>
      </div>
      <div
        className="flex items-center md:gap-3 gap-6 mt-20 md:mt-0 justify-center lg:mt-10"
        id="footer"
      >
        {socialMedia.map((info) => (
          <div
            key={info.id}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <a href={info.link} title={info.link} target="_blank">
              <Image src={info.img} alt="icons" width={30} height={30} />
            </a>
          </div>
        ))}
      </div>
      <div className="flex text-sm font-light lg:mt-5 mt-5  md:flex-row flex-col justify-between items-center gap-1">
        <p className="  font-light hidden lg:inline-block ">
          All Rights Reserved | Copyright © 2025 John Chloe
        </p>
        <div className="flex  justify-center items-center gap-2">
          <FaPhone />
          +63 9108755326
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <FaEnvelope />
          johnchloe.h.gomandoy@gmail.com
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <FaLocationPin />
          Misamis Occidental - Philippines
        </div>

        <p className="md:text-base text-sm md:font-normal font-light lg:hidden lg:pt-0 pt-2">
          All Rights Reserved | Copyright © 2025 John Chloe
        </p>
      </div>
    </footer>
  );
};

export default Footer;
