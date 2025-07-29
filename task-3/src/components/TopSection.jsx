import { motion, useScroll, useTransform } from "framer-motion";

export default function TopSection() {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.header
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 30 }}
      style={{ scale, opacity }}
      className="bg-gradient-to-br from-purple-600 to-purple-900 text-white py-20 px-6 text-center"
    >
      <motion.div style={{ scale, opacity }}>
        <h1 className="text-4xl font-bold mb-4">TaskFlow</h1>
        <p className="text-lg mb-6">
          Organize your tasks and boost your productivity
        </p>
        <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-400 hover:text-purple-900 transition-all duration-500 cursor-pointer">
          Get Started
        </button>
      </motion.div>
    </motion.header>
  );
}
