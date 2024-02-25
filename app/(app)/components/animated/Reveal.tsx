"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import classNames from "classnames";

type Props = {
  children: ReactNode;
  width?: "fit" | "full";
};

function Reveal({ children, width = "fit" }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  const mainContainer = classNames(
    "relative overflow-hidden",
    width === "fit" ? "w-fit" : "w-full",
  );

  return (
    <div ref={ref} className={mainContainer}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute bottom-[4px] left-0 right-0 top-[4px] z-20 animate-pulse bg-accent"
      />
    </div>
  );
}

export default Reveal;
