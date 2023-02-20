import React, { ReactElement } from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";

interface TypeWriterAnimationProps extends HTMLMotionProps<"span"> {
  text: string;
  delay?: number;
}

const typeWriterVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.4,
      staggerChildren: 0.04,
      when: "beforeChildren",
    },
  },
};

const letterVariants: Variants = {
  initial: {
    opacity: 0,
    y: "50%",
  },
  animate: {
    opacity: 1,
    y: "0%",
  },
};

export const useTypeWriterAnimation = ({
  text,
  delay = 0,
  ...rest
}: TypeWriterAnimationProps): ReactElement => {
  const textArray = text.split("");

  return (
    <motion.span
      initial="initial"
      animate="animate"
      variants={typeWriterVariants}
      style={{ display: "inline-flex" }}
      {...rest}
    >
      {textArray.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          variants={letterVariants}
          style={{ display: "inline-block" }}
          custom={delay + index}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};
