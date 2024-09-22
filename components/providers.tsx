"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";

type ProviderProps = {
  children: React.ReactNode;
};

export const Provider = ({ children }: ProviderProps) => {
  return (
    <>
      {/* <ReactLenis root options={{ lerp: 0.1, duration: 2, smoothTouch: true }}> */}
      {children}
      {/* </ReactLenis> */}
    </>
  );
};
