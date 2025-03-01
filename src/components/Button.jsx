import PropTypes from "prop-types";

const Button = ({ children, variant = "primary", onClick }) => {
  const baseStyles =
    "text-lg md:px-32 py-4 sm:px-22 rounded font-medium transition cursor-pointer";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-600 hover:bg-gray-200 font-bold",
    outline: "border border-gray-400 text-gray-400 hover:bg-gray-200",
    dark: "bg-stone-900/90 text-gray-400 border-t-4 border-gray-400 pb-2 hover:bg-gray-200",
    white: "bg-white text-black hover:bg-gray-200 md:px-26",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  onClick: PropTypes.func,
};

export default Button;
