"use client";
import { PinContainer } from "@/components/contact/3d-pin";
import { ContactCard } from "@/components/contact/contact-card";
import { ContactCardMobile } from "@/components/contact/contact-card-mobile";
import { Meteors } from "@/components/meteors";
import { Navbar } from "@/components/navbar";
import Particles from "@/components/particles";
import { Title } from "@/components/title";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiMailAddFill, RiTwitterXFill } from "react-icons/ri";

type ContactProps = {};

const Contact = ({}: ContactProps) => {
  const socials = [
    {
      icon: FaGithub,
      href: "https://github.com",
      handle: "@abhi1992002",
      label: "Github",
    },
    {
      icon: RiTwitterXFill,
      href: "https://x.com",
      handle: "abhi1992002",
      label: "X",
    },
    {
      icon: RiMailAddFill,
      href: "https://gmail.com",
      handle: "Abhimanyu",
      label: "mail",
    },
  ];
  return (
    <div className="h-screen w-screen overflow-x-hidden flex flex-col items-center pt-24 relative">
      <div className="w-full fixed top-0 bg-black/50 z-[102] p-8  backdrop-blur-xl ">
        <Navbar />
      </div>
      <div className="w-screen h-screen absolute top-[-50px] left-24 animate-fade-in">
        <Meteors number={25} />
      </div>
      <Particles
        className="fixed inset-0 -z-10 animate-fade-in"
        quantity={300}
      />
      <div className="mb-20">
        <Title title="Contact" />
      </div>
      {/* cards */}
      <div className=" w-[100%] grid-cols-1 gap-8 mx-auto  sm:mt-0 lg:grid-cols-3 lg:gap-16 h-[400px] animate-fade-in hidden xl:grid">
        {socials.map((s, i) => (
          <ContactCard s={s} key={i} />
        ))}
      </div>

      <div className=" w-[95%] grid-cols-1 gap-8 mx-auto  sm:mt-0 lg:grid-cols-3 lg:gap-16  animate-fade-in grid xl:hidden pb-20">
        {socials.map((s, i) => (
          <ContactCardMobile s={s} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
