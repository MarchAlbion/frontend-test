import Image from "next/image";

export const Missing = () => {
  return (
    <div className="bg-transparent text-primary font-medium px-4 py-[16px] border-t-3 border-custom-orange rounded-2xl flex gap-0.5 absolute w-full right-0 top-0">
      <div className="flex ">
        <Image
          src={`x.svg`}
          alt="x"
          width={16.25}
          height={16.25}
          className={`ease-in-out duration-300`}
        />
      </div>
      <div className="flex flex-row gap-[8px] text-custom-orange text-sm">
        <div>MISSING</div>
      </div>
      <div className="flex gap-2"></div>
    </div>
  );
};
