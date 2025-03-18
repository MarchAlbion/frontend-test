export const SectionItem = ({
  placeholder,
  title,
  animatedText,
  isSkeleton,
  ref,
  filled,
}) => {
  return (
    <div
      className={`${
        !filled
          ? "bg-custom-orange-light  border-custom-orange"
          : "bg-light-green border-custom-green"
      } w-fit border-b-[1.5px] ${isSkeleton ? "animate-pulse " : ""}`}
    >
      {isSkeleton ? (
        <div className="h-[25px] bg-gray-200 dark:bg-gray-200 w-full">
          <span className="opacity-0">{placeholder}</span>
        </div>
      ) : animatedText ? (
        <span ref={ref}></span>
      ) : (
        title || placeholder
      )}
    </div>
  );
};
