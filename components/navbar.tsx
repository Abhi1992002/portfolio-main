"use client";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type NavbarProps = {};

export const Navbar = ({}: NavbarProps) => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();
  const page = pathname.split("/")[1];
  return (
    <>
      <nav className=" animate-fade-in">
        <ul className="flex items-center justify-center gap-12">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm duration-500 text-zinc-500 hover:text-white",
                "/" + page === item.href && "text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};
