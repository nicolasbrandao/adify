"use client";

import classNames from "classnames";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  from?: "top" | "bottom" | "left" | "right";
  width?: "fit" | "full";
};

function SlideIn({ children, from = "bottom", width = "fit" }: Props) {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView, mainControls]);

  const slideFrom = () => {
    switch (from) {
      case "bottom":
        return { y: 75 };
      case "top":
        return { y: -75 };
      default:
        return { y: 75 };
    }
  };

  const mainContainer = classNames(width === "fit" ? "w-fit" : "w-full");

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, ...slideFrom() },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 0.5,
        delay: 0.25,
      }}
      className={mainContainer}
    >
      {children}
    </motion.div>
  );
}

export default SlideIn;
