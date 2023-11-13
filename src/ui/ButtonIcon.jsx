function ButtonIcon({ children, type, onClick }) {
  const base =
    "rounded-full transition-colors duration-300 hover:bg-sky-100 focus:bg-sky-100 focus:outline-none focus:ring focus:ring-sky-100 focus:ring-offset-2 disabled:cursor-not-allowed";
  const styles = {
    small: base + " p-1 md:p-3  text-lg",
    normal: base + " p-4 text-2xl ",
  };
  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default ButtonIcon;
