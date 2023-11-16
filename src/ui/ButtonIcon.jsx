function ButtonIcon({ children, type, onClick }) {
  const base =
    "rounded-full transition-colors duration-300 hover:bg-emerald-200 focus:bg-emerald-200 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-offset- disabled:cursor-not-allowed";
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
