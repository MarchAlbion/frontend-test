import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./Button";

export const Checked = ({onClick}) => {
  return (
    <div className="absolute  z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          mass: 1.5,
        }}
        exit={{
          y: -500,
          opacity: 1,
          transition: { type: "tween", duration: 1 },
        }}
      >
        <div className=" p-6 border bg-gradient-to-br from-custom-purple via-custom-blue to-custom-light-blue border-gray-300 rounded-4xl text-center text-white w-[544px] h-[409px] flex flex-col justify-center items-center gap-5">
          <h1 className="text-2xl">Great!</h1>
          <Image src="/check.svg" alt="check" width={198} height={198} />
          <p>Congrats on completing the tour!</p>
          <div className="flex justify-center">
            <Button title="Continue" onClick={onClick} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
