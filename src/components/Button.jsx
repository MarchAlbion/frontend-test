import { motion } from "framer-motion";

export const Button = ({ title, onClick }) => {
  return (
    <div className="relative inline-block">
      <button
        className="bg-custom-blue2 px-6 py-2.5 rounded-xl relative z-10 cursor-pointer"
        onClick={onClick}
      >
        {title}
      </button>

      <motion.div
        className="absolute inset-0 rounded-xl border border-[#4D5194]"
        initial={{
          opacity: 0,
          scale: 1,
          boxShadow: "inset 0 0 0 0 rgba(77, 81, 148, 0)",
        }}
        animate={{
          opacity: [0, 1, 0],
          scale: [1, 1.4],
          boxShadow: [
            "inset 0 0 0 0 rgba(77, 81, 148, 0)",
            "inset 0 15px 25px 5px rgba(77, 81, 148, 0.5)",
            "inset 0 30px 50px 10px rgba(77, 81, 148, 0)",
          ],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: "easeOut",
        }}
        style={{
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
