import React, { useState } from "react";
import CustomButton from "../../_atoms/CustomButton";
import GuestCounter from "./guestContainer";
import { GuestsProps } from "../../types";



const Guests: React.FC<GuestsProps> = ({ onChange }) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0);

  const handleClose = () => {
    onChange({ adults, children, pets });
  };

  const increment = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter((prev) => prev + 1);
  };

  const decrement = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="flex flex-col gap-3 border border-[#979ca0] rounded-[30px] px-4 py-7" >
      <GuestCounter
        label="Adults"
        description="Ages above 13"
        count={adults}
        onIncrement={() => increment(setAdults)}
        onDecrement={() => decrement(setAdults)}
      />
      <GuestCounter
        label="Children"
        description="Ages below 13"
        count={children}
        onIncrement={() => increment(setChildren)}
        onDecrement={() => decrement(setChildren)}
      />
      <GuestCounter
        label="Pets"
        description="View pet policy"
        count={pets}
        onIncrement={() => increment(setPets)}
        onDecrement={() => decrement(setPets)}
      />
      <div className="flex justify-between items-center m-0 p-0  bottom-5 left-[30px] w-[100%]">
        <button
          className="underline"
          onClick={() => {
            setAdults(0);
            setChildren(0);
            setPets(0);
          }}
        >
          Reset
        </button>
        <CustomButton
          onClick={handleClose}
          className="bg-[#1d273d] text-center items-center text-[#fff] px-4"
          ariaLabel="Close calendar"
        >
          Next
        </CustomButton>
      </div>
    </div>
  );
};

export default Guests;
