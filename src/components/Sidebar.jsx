export default function Sidebar({ isBlurred, children }) {
  return (
    <div
      className={`bg-background-secondary w-[325px] rounded-4xl shadow-lg relative z-30 h-full ${
        isBlurred ? "animate-shadowRun" : ""
      }`}
    >
      {children}
    </div>
  );
}
