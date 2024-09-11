import { ReactNode } from "react";

export interface GuestsProps {
    onChange: (guests: {
        adults: number;
        children: number;
        pets: number;
    }) => void;
}

export interface CustomButtonProps {
    onClick: () => void;
    children: ReactNode;
    className?: string;
    ariaLabel?: string;
}