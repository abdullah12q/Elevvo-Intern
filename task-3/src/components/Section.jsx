import { motion } from "framer-motion";

export default function Section({ children, footer }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className={footer ? "" : "my-16"}
    >
      {children}
    </motion.div>
  );
}
