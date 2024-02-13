"use client";
import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline";

type ThreeDProps = {};

export const ThreeD = ({}: ThreeDProps) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/jSfSUZgbHIoamKOX/scene.splinecode" />
      </Suspense>
    </>
  );
};
