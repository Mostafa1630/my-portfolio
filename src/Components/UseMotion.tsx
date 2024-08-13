"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { LayoutProps } from "../../types";

const UseMotion = ({ children }: LayoutProps) => {
  const router = useRouter();
  return (
    <motion.div key={router.route} className="h-full">
      {children}
    </motion.div>
  );
};

export default UseMotion;
