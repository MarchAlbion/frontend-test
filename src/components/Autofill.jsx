import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./Button";

export default function Autofill({ onAutofill }) {
  return (
    <div className="absolute top-27 left-90">
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
          transition: { type: "tween", duration: 0.3 }, 
        }}
      >
        <div className="relative p-6 border bg-gradient-to-br from-custom-purple via-custom-blue to-custom-light-blue border-gray-300 rounded-4xl text-center text-white w-[328px] h-[250px]">
          <Image
            src={`/triangle.svg`} 
            alt="autofill"
            width={24}
            height={24}
            className="absolute top-7 right-78.5"
          />
          <div className="flex flex-row gap-4 justify-start items-center">
            <div className="bg-custom-white2 rounded-2xl py-[12.5px] p-[9px]">
              <Image src="/tSvg.svg" alt="tSvg" width={30} height={22} />
            </div>
            <div className="text-lg">Data Entry</div>
          </div>

          <div className="text-base py-4 text-left">
            Do not spend too much time filling out the same information again
            and again.
          </div>
          <div className="flex justify-end">
            <Button title="Autofill" onClick={onAutofill} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
