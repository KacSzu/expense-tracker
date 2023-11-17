function ButtonIcon({ children, type, onClick }) {
  const base =
    "rounded-full transition-colors duration-300 hover:bg-emerald-200 focus:bg-emerald-200 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  const styles = {
    small: base + " p-1 sm:p-2 md:p-3 lg:p-4 text-xl",
    normal: base + " p-4 text-2xl ",
  };
  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default ButtonIcon;
