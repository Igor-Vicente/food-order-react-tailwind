const Button = ({ children, textOnly, ...props }) => {
  let css = textOnly
    ? 'cursor-pointer bg-transparent border-none text-bgBodyGradient2 hover:text-yellowDark active:text-yellowDark'
    : 'cursor-pointer bg-yellow border border-yellow text-[#1f1a09] py-2 px-6 rounded hover:bg-yellowDark hover:border-yellowDark active:bg-yellowDark active:border-yellowDark';

  return (
    <button className={css} {...props}>
      {children}
    </button>
  );
};

export default Button;
