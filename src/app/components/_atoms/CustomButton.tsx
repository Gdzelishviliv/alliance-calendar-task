import React, { FC } from "react";
import { CustomButtonProps } from "./types";



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
