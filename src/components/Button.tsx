import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "grey";
  disabled?: boolean;
  onClick: () => void;
};

const baseStyles = "inline-block px-6 py-3 rounded-2xl transition font-medium shadow-lg";
const variants = {
  grey: "bg-gray-700 hover:bg-gray-600 text-white",
  primary: "bg-blue-600 hover:bg-blue-500 text-white",
};

export const Button = ({ children, variant = "primary", disabled = false, onClick }: ButtonProps) => {
  return (
    <button className={`${baseStyles} ${disabled ? variants.grey : variants[variant]}`} disabled={disabled} onClick={onClick} type="button">
      {children}
    </button>
  );
};
