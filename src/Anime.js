import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

export default function Anime(props) {
  return (
    <motion.div className="card" animate={{ opacity: props.show ? 1 : 0 }} />
  );
}
