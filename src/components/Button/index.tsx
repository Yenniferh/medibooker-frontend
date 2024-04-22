import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="w-full rounded-xl bg-teal py-3 font-headings font-medium text-white hover:bg-opacity-80"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
