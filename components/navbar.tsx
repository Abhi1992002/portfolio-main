"use client";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type NavbarProps = {};

export const Navbar = ({}: NavbarProps) => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const pathname = usePathname();
  const page = pathname.split("/")[1];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Check if the href is an id selector
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    if (targetId) {
      e.preventDefault();
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        className="animate-fade-in"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="flex items-center justify-center gap-12">
          {navigation.map((item) => (
            <motion.li
              key={item.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "text-sm duration-500 text-zinc-500 hover:text-white",
                  "/" + page === item.href && "text-white"
                )}
                onClick={handleScroll}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
};
