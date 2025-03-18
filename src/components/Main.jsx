import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { SectionItem } from "./SectionItem";

export const Main = ({
  isSkeleton,
  name,
  lastName,
  companyAddress,
  companyName,
  animatedText,
  filled,
}) => {
  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const companyAddressRef = useRef(null);
  const companyNameRef = useRef(null);

  useEffect(() => {
    if (animatedText && !isSkeleton) {
      const typedName = new Typed(nameRef.current, {
        strings: [name || "[Employer.FirstName]"],
        typeSpeed: 50,
        showCursor: false,
      });

      const typedLastName = new Typed(lastNameRef.current, {
        strings: [lastName || "[Employer.LastName]"],
        typeSpeed: 50,
        showCursor: false,
      });

      const typedCompanyAddress = new Typed(companyAddressRef.current, {
        strings: [companyAddress || "[Employer.CompanyAddress]"],
        typeSpeed: 50,
        showCursor: false,
      });

      const typedCompanyName = new Typed(companyNameRef.current, {
        strings: [companyName || "[Employer.Email]"],
        typeSpeed: 50,
        showCursor: false,
      });

      return () => {
        typedName.destroy();
        typedLastName.destroy();
        typedCompanyAddress.destroy();
        typedCompanyName.destroy();
      };
    }
  }, [animatedText, isSkeleton, name, lastName, companyAddress, companyName]);

  return (
    <main className="flex flex-col w-[668px] bg-custom-secondary-white gap-6 p-10 h-full">
      <h1 className="text-2xl">10. Applicable law</h1>
      <p className="text-base font-normal leading-[140%]">
        This Software Development Agreement and the interpretation of its terms
        shall be governed by and construed in accordance with the laws of the
        State of California and subject to the exclusive jurisdiction of the
        federal and state courts located in Alpine, California.
      </p>
      <p className="pt-6">
        IN WITNESS WHEREOF, each of the Parties has executed this Software
        Development Agreement, both Parties by its duly authorized officer, as
        of the day and year set forth below.
      </p>

      <section className="pt-[294px] flex flex-col gap-[7.5px]">
        <SectionItem
          placeholder="[Employer.FirstName]"
          title={name}
          isSkeleton={isSkeleton}
          animatedText={animatedText}
          ref={nameRef}
          filled={filled}
        />
        <SectionItem
          placeholder="[Employer.LastName]"
          title={lastName}
          isSkeleton={isSkeleton}
          animatedText={animatedText}
          ref={lastNameRef}
          filled={filled}
        />
        <SectionItem
          placeholder="[Employer.CompanyAddress]"
          title={companyAddress}
          isSkeleton={isSkeleton}
          animatedText={animatedText}
          ref={companyAddressRef}
          filled={filled}
        />
        <SectionItem
          placeholder="[Employer.Email]"
          title={companyName}
          isSkeleton={isSkeleton}
          animatedText={animatedText}
          ref={companyNameRef}
          filled={filled}
        />
      </section>
    </main>
  );
};
