import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="inline-block w-full rounded-4xl cursor-pointer">
      <div
        className="bg-background-secondary text-primary font-medium px-[24px] py-[17px] rounded-4xl flex justify-between"
        onClick={toggleDropdown}
      >
        <div className="flex flex-row gap-[8px]">
          <Image src="tSvg.svg" alt="tSvg" width={22.5} height={16.5} />
          <div className="text-lg"> Data Entry</div>
          <Image src="info.svg" alt="info" width={16.25} height={16.25} />
        </div>
        <Image
          src={`${isOpen ? "dropUp.svg" : "drop.svg"}`}
          alt="drop"
          width={13.75}
          height={7.5}
          className={`ease-in-out duration-300`}
        />
      </div>

      <motion.div
        className="origin-center flex gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -10,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="py-[8px] px-[8px] gap-2 flex flex-col w-full">{children}</div>
      </motion.div>
    </div>
  );
};

export default Dropdown;
