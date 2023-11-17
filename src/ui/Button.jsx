function Button({ children, type, onClick, variation, active, disabled }) {
  const base =
    "rounded-full  font-medium focus:outline-none focus:ring  focus:ring-offset-2           disabled:cursor-not-allowed  ";
  const styles = {
    small: base + " px-4 py-2 md:px-5 md:py-4 text-xs",
    primary:
      base +
      "focus:ring-emerald-400 bg-emerald-200  hover:bg-emerald-300 focus:bg-emerald-300 px-3.5 py-2 md:px-5 md:py-3 lg:text-base sm:text-sm  ",
    filter:
      base +
      `focus:ring-emerald-400  bg-emerald-100 border border-emerald-300 hover:bg-emerald-300 focus:bg-emerald-300 rounded-full px-2 text-xs lg:px-3    py-1 lg:py-2 md:text-sm lg:text-base   ${
        active ? " bg-emerald-300 " : " bg-emerald-100 "
      }   ${
        type === "dashboard"
          ? " lg:px-3 lg:py-2 sm:text-sm lg:text-lg  md:text-base  "
          : ""
      }  `,
    danger:
      base +
      " px-3.5 py-2  md:px-5 md:py-3  bg-red-300 hover:bg-red-400 focus:bg-red-300   focus:ring-red-400 ",
  };
  return (
    <button disabled={disabled} onClick={onClick} className={styles[variation]}>
      {children}
    </button>
  );
}

export default Button;
