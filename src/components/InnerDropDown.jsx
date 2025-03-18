import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const InnerDropDown = ({ title, children, isOpenDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="inline-block w-full cursor-pointer bg-custom-secondary-white shadow-xs rounded-2xl">
      <div
        className="bg-custom-secondary-white text-primary font-medium px-[18px] py-[17px] rounded-2xl flex justify-between"
        onClick={toggleDropdown}
      >
        <div className="flex flex-row gap-[8px] text-custom-gray text-sm">
          <div>{title.toUpperCase()}</div>
        </div>

        <div className="flex gap-2">
          <div className="flex gap-0.5">
            <div className="text-xs flex justify-center items-center text-custom-orange">
              4
            </div>
            <Image
              src={`x.svg`}
              alt="x"
              width={13}
              height={13}
              className={`ease-in-out duration-300`}
            />
          </div>

          <Image
            src={`${isOpen ? "dropUp.svg" : "drop.svg"}`}
            alt="drop"
            width={11}
            height={6}
            className={`ease-in-out duration-300`}
          />
        </div>
      </div>

      <motion.div
        className="origin-center"
        initial={{ opacity: 0, y: -10, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -10,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="p-4 flex flex-col gap-3 relative">{children}</div>
      </motion.div>
    </div>
  );
};

export default InnerDropDown;
