"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import React, { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
};

function FadeIn({ children }: Props) {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
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
  );
}

export default FadeIn;
