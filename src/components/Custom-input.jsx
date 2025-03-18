import { useEffect, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";

export const CustomInput = ({
  label,
  value,
  onChange,
  type,
  placeholder,
  isSkeleton,
  animateText,
}) => {
  const inputRef = useRef(null);
  const typedRef = useRef(null);

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.select();
      navigator.clipboard.writeText(inputRef.current.value);
    }
  };

  useEffect(() => {
    if (animateText && value && inputRef.current) {
      if (typedRef.current) {
        typedRef.current.destroy();
      }

      typedRef.current = new Typed(inputRef.current, {
        strings: [value],
        typeSpeed: 100,
        showCursor: false,
        onComplete: () => {
          if (inputRef.current) {
            inputRef.current.value = value;
          }
        },
      });
    } else if (inputRef.current) {
      inputRef.current.value = value;
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, [value, animateText]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <label
          htmlFor={label}
          className="text-custom-black text-base cursor-pointer flex flex-row items-center gap-1"
        >
          {label}
          <span className="bg-custom-lightGray text-[10px] flex w-3.5 h-3.5 p-0.5 items-center justify-center rounded-xs text-custom-text-gray">
            5
          </span>
        </label>

        <Image
          src="copy.svg"
          alt="copy"
          width={15}
          height={15}
          onClick={handleIconClick}
          className="cursor-pointer"
          title="Copy text"
        />
      </div>
      <>
        {isSkeleton ? (
          <div className="bg-transparent text-custom-black text-xs rounded-md px-3 py-1.5 border border-custom-lightGray outline-none animate-pulse">
            <div className="h-[16px] bg-gray-200 dark:bg-gray-200 w-full"></div>
          </div>
        ) : (
          <div className="relative">
            <input
              id={label}
              type={type}
              ref={inputRef}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className="bg-transparent text-custom-black text-xs rounded-md px-3 py-1.5 border border-custom-lightGray outline-none w-full"
              readOnly={animateText}
            />
          </div>
        )}
      </>
    </div>
  );
};
