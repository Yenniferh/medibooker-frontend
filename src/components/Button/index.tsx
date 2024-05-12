import { ButtonHTMLAttributes } from "react";

const Button: React.FC<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">> = (props) => {
  return (
    <button
      className="w-full rounded-xl bg-teal py-3 font-headings font-medium text-white hover:bg-opacity-80 disabled:cursor-not-allowed disabled:bg-teal-gray disabled:opacity-70"
      {...props}
    />
  );
};

export default Button;
