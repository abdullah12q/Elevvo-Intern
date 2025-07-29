export default function CustomButton({
  children,
  className,
  bottomButton,
  ...props
}) {
  const bottomButtonStyle =
    "px-3 py-1 font-medium border border-gray-200 rounded disabled:opacity-50 disabled:cursor-auto hover:bg-[#f4f4f5] transition-colors duration-300 cursor-pointer";
  return (
    <button {...props} className={bottomButton ? bottomButtonStyle : className}>
      {children}
    </button>
  );
}
