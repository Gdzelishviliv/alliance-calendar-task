import React from "react";

interface GuestCounterProps {
  label: string;
  description: string;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const GuestCounter: React.FC<GuestCounterProps> = ({
  label,
  description,
  count,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-col">
        <h2 className="text-[#1d273d] font-bold">{label}</h2>
        <span>{description}</span>
      </div>
      <div className="flex items-center gap-2 border border-[#979ca0] rounded-[25px] w-[100px] justify-evenly">
        <button className="text-[20px]" onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
};

export default GuestCounter;
