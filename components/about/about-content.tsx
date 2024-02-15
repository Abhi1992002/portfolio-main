import React, { useEffect, useState } from "react";

type AboutContentProps = {};

export const AboutContent = ({}: AboutContentProps) => {
  return (
    <div className="text-center text-sm sm:text-base lg:text-xl text-white/70 space-y-4">
      <p>
        Hello! My name is <span className="text-white">Abhimanyu, </span> and
        I'm currently navigating my way through a Bachelor of{" "}
        <span className="text-white">
          Computer Science <span className="text-white/70"> at </span> BITS
          Pilani{" "}
        </span>{" "}
        With a passion for technology that has fueled my journey, I've
        accumulated <span className="text-white">two years</span> of coding
        experience, diving deep into the world of web development. As a
        <span className="text-white"> full-stack developer </span> , my
        expertise lies in using a blend of cutting-edge technologies, including{" "}
        <span className="text-white">
          Next.js, TailwindCSS, TypeScript, server actions, Turbo Repo, Express,
          PostgreSQL, and Prisma.
        </span>{" "}
        My roots are in <span className="text-white"> India </span> , a place
        that has always inspired me to reach for greater heights in my career.
      </p>

      <p>
        My journey into coding began with the basics of{" "}
        <span className="text-white">C programming</span> , guided by various
        YouTube tutorials and blogs. This initial step sparked a deep interest
        in web development, prompting me to explore further through resources
        like <span className="text-white">FreeCodeCamp</span>,{" "}
        <span className="text-white">CodeWithMosh</span>, and courses by{" "}
        <span className="text-white">Angela Yu</span>. However, as I've grown,
        I've come to value the power of diving into documentation and learning
        through <span className="text-white">hands-on experience</span> ,
        embracing the philosophy of learning by doing.
      </p>

      <p>
        I'm currently on the lookout for an{" "}
        <span className="text-white">internship opportunity</span> that will
        allow me to bring my skills to the table and further hone them in a
        practical setting.
      </p>
    </div>
  );
};
