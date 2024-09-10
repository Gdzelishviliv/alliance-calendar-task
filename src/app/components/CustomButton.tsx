import React, { FC, ReactNode } from "react";

interface CustomButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  onClick,
  children,
  className = "",
  ariaLabel = "",
}) => {
  return (
    <button
      className={`p-2 rounded-3xl ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default CustomButton;
