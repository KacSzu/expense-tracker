function Button({ children, onClick, variation }) {
  const base =
    "rounded-full bg-sky-200  hover:bg-sky-300 focus:bg-sky-100 font-semibold focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 disabled:cursor-not-allowed ";
  const styles = {
    small: base + " px-4 py-2 md:px-5 md:py-4 text-xs",
    primary: base + " px-3.5 py-2 md:px-5 md:py-3  ",
    danger:
      base +
      " px-3.5 py-2  md:px-5 md:py-3  bg-red-300 hover:bg-red-300 focus:bg-red-200  focus:outline-none focus:ring focus:ring-red-300 ",
  };
  return (
    <button onClick={onClick} className={styles[variation]}>
      {children}
    </button>
  );
}

export default Button;
