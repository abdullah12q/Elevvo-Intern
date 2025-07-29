import "./App.css";
import { useState } from "react";
import { TfiAlignJustify, TfiAlignLeft } from "react-icons/tfi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import reactLogo from "./assets/logos/react.svg";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const links = [
    { href: "/", label: "Home", icon: <IoMdHome /> },
    {
      href: "https://github.com/abdullah12q",
      label: "Github",
      icon: <FaGithub />,
    },
    {
      href: "https://www.linkedin.com/in/abdullah-mohamed-1q1q/",
      label: "Linkedin",
      icon: <FaLinkedin />,
    },
    {
      href: "https://www.instagram.com/abdullahmohamed91/",
      label: "Instagram",
      icon: <FaInstagram />,
    },
  ];

  function toggleSidebar() {
    return (
      <motion.div
        layout
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute p-2 bg-gray-800"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-col items-center justify-center mb-2"
        >
          <img src={reactLogo} alt="react logo" />
        </motion.div>
        <motion.ul
          layout
          variants={{
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.3 },
            },
            hidden: {},
          }}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, scale: 0.8 }}
          className="flex flex-col my-1 gap-6 font-semibold text-xl"
        >
          {links.map(({ href, label, icon }) => (
            <motion.li
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 20 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 80 },
                },
              }}
              key={label}
              className="flex items-center"
            >
              <a
                href={href}
                target={label === "Home" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-9 text-white hover:bg-gray-700 rounded-lg p-2 transition-colors duration-300"
              >
                <span className="text-2xl">{icon}</span>
                <span>{label}</span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    );
  }

  return (
    <div className="h-screen bg-gray-600 relative">
      <header className="relative top-0 z-50 flex items-center justify-between p-4 bg-gray-800 text-white">
        <AnimatePresence mode="popLayout">
          {isOpened ? (
            <motion.div
              key="open"
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <TfiAlignLeft
                onClick={() => setIsOpened(false)}
                className="cursor-pointer"
              />
            </motion.div>
          ) : (
            <motion.div
              key="closed"
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <TfiAlignJustify
                onClick={() => setIsOpened(true)}
                className="cursor-pointer"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <h1 className="text-xl text-center font-bold">Elevvo Task 1</h1>
      </header>
      <AnimatePresence>{isOpened && toggleSidebar()}</AnimatePresence>
      <h2 className="text-lg md:text-3xl text-center text-white font-semibold">
        Responsive Sidebar
      </h2>
    </div>
  );
}

export default App;
