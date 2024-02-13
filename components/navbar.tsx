import Link from "next/link";
import React, { useEffect, useState } from "react";

type NavbarProps = {};

export const Navbar = ({}: NavbarProps) => {
  const navigation = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <>
      <nav className=" animate-fade-in">
        <ul className="flex items-center justify-center gap-12">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};
