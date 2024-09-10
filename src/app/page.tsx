import React from "react";

const calendar = () => {
  return (
    <div className="bg-[#fff] mt-6 rounded-t ps-6 pe-6 ">
      <div className="text-end">
        <button>x</button>
      </div>
      <div className="flex justify-between items-center ps-3 pe-3 w-[50vh] rounded-3xl bg-[#fff] border-[1px] border-solid border-[#979ca0] h-[50px]">
        <span>when</span>
        <button className="underline">select dates</button>
      </div>
      <div className="flex justify-between items-center ps-3 pe-3 w-[50vh] rounded-3xl bg-[#fff] border-[1px] border-solid border-[#979ca0] h-[50px]">
        <span>guests</span>
        <button className="underline">select guests</button>
      </div>
    </div>
  );
};

export default calendar;
