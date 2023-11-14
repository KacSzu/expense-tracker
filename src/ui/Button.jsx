function Button({ children, onClick, variation, active }) {
  const base =
    "rounded-full  font-medium focus:outline-none focus:ring  focus:ring-offset-2 disabled:cursor-not-allowed ";
  const styles = {
    small: base + " px-4 py-2 md:px-5 md:py-4 text-xs",
    primary:
      base +
      "focus:ring-sky-400 bg-sky-200  hover:bg-sky-300 focus:bg-sky-300 px-3.5 py-2 md:px-5 md:py-3 lg:text-base sm:text-sm  ",
    filter:
      base +
      `focus:ring-sky-400 bg-sky-200  hover:bg-sky-300 focus:bg-sky-300 rounded-full  ${
        active ? " bg-sky-200 " : " bg-white "
      } px-2 py-1 sm:px-3 py-2 sm:text-sm lg:text-base`,
    danger:
      base +
      " px-3.5 py-2  md:px-5 md:py-3  bg-red-300 hover:bg-red-400 focus:bg-red-300   focus:ring-red-400 ",
  };
  return (
    <button onClick={onClick} className={styles[variation]}>
      {children}
    </button>
  );
}

export default Button;
