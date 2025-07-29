import { motion } from "framer-motion";
export default function PriceCard({ title, description, price }) {
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.05, rotate: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className=" p-6 rounded-lg shadow-lg text-center"
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <p className="text-2xl font-bold">${price}</p>
    </motion.div>
  );
}
