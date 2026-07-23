"use client"; // Necesario porque Framer Motion usa hooks del navegador (useEffect, useRef)

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
}

export default function FadeInSection({ children, className = "" }: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Empieza invisible y 50px más abajo
      whileInView={{ opacity: 1, y: 0 }} // Cuando entra en pantalla, se hace visible y sube
      viewport={{ once: true, margin: "-100px" }} // once: true hace que solo se anime la primera vez. margin hace que espere un poco antes de activarse.
      transition={{ duration: 0.8, ease: "easeOut" }} // Duración y tipo de aceleración
      className={className}
    >
      {children}
    </motion.div>
  );
}