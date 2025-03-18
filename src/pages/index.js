import { useState, useEffect, useRef } from "react";
import Sidebar from "@/components/Sidebar";
import Dropdown from "@/components/DropDown";
import InnerDropDown from "@/components/InnerDropDown";
import { CustomInput } from "@/components/Custom-input";
import { Missing } from "@/components/Missing";
import { Main } from "@/components/Main";
import { Public_Sans } from "next/font/google";
import Autofill from "@/components/Autofill";
import { AnimatePresence } from "framer-motion";
import { Checked } from "@/components/Checked";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-public-sans",
  display: "swap",
});

export default function Home() {
  const [isBlurred, setIsBlurred] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isSkeleton, setIsSkeleton] = useState(false);
  const [animatedText, setAnimatedText] = useState(false);
  const [globalBlur, setGlobalBlur] = useState(false);
  const [filled, setFilled] = useState(false);

  const timeoutRefs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlurred(true);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  const clearAllTimeouts = () => {
    timeoutRefs.current.forEach(clearTimeout);
    timeoutRefs.current = [];
  };

  const onAutofill = () => {
    clearAllTimeouts();

    setCompanyAddress("Company@gmail.com");
    setCompanyName("Cy Company");
    setName("John");
    setLastName("Doe");
    setIsBlurred(false);
    setIsSkeleton(true);

    timeoutRefs.current.push(
      setTimeout(() => {
        setIsSkeleton(false);
        setAnimatedText(true);
        setFilled(true);
        console.log("setAnimatedText");
      }, 3000)
    );

    timeoutRefs.current.push(
      setTimeout(() => {
        setGlobalBlur(true);
        console.log("Global blur");
      }, 6000)
    );
  };
  const onCheCked = () => {
    setGlobalBlur(false);
    setAnimatedText(false);
  };

  useEffect(() => {
    return () => clearAllTimeouts();
  }, []);

  return (
    <div className={`${publicSans.variable} font-primary`}>
      {globalBlur && <Checked onClick={() => onCheCked()} />}

      <div
        className={`${
          isBlurred || globalBlur ? "bg-background-blur" : "bg-background"
        } w-screen h-screen flex px-[40px] py-[32px] justify-between  transition-colors duration-300 ${
          globalBlur ? "blur-[2px]" : ""
        } `}
      >
        {isBlurred && (
          <div className="fixed top-0 left-0 w-full h-full backdrop-blur-[2px]  z-10 pointer-events-none" />
        )}

        <div className="relative z-20">
          <Sidebar isBlurred={isBlurred}>
            <AnimatePresence>
              {isBlurred && <Autofill onAutofill={onAutofill} />}
            </AnimatePresence>
            <Dropdown>
              <InnerDropDown title="employer" isOpenDefault={true}>
                <Missing />
                <div className="h-6"></div>
                <CustomInput
                  label="First name"
                  placeholder="Enter Value"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  isSkeleton={isSkeleton}
                  animateText={animatedText}
                />
                <CustomInput
                  label="Last name"
                  placeholder="Enter Value"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  isSkeleton={isSkeleton}
                  animateText={animatedText}
                />
                <CustomInput
                  label="Company address"
                  placeholder="Enter Value"
                  value={companyAddress}
                  onChange={(e) => setCompanyAddress(e.target.value)}
                  isSkeleton={isSkeleton}
                  animateText={animatedText}
                />
                <CustomInput
                  label="Company name"
                  placeholder="Enter Value"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  isSkeleton={isSkeleton}
                  animateText={animatedText}
                />
              </InnerDropDown>
              <InnerDropDown title="document details" />
              <InnerDropDown title="employee" />
            </Dropdown>
          </Sidebar>
        </div>

        <div className={`relative z-5 ${isBlurred ? "blur-[2px]" : ""}`}>
          <Main
            isSkeleton={isSkeleton}
            name={name}
            lastName={lastName}
            companyAddress={companyAddress}
            companyName={companyName}
            animatedText={animatedText}
            filled={filled}
          />
        </div>
      </div>
    </div>
  );
}
