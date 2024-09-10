"use client";
import React, { useState } from "react";
import CustomButton from "./components/CustomButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "./calendar.css"; // Custom CSS for styling

const Calendar: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleSelectDates = () => {
    setShowCalendar(true);
  };

  const handleClose = () => {
    setShowCalendar(false);
  };

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start || undefined);
    setEndDate(end || undefined);
  };

  return (
    <div className="flex flex-col gap-8 bg-[#fff] mt-6 rounded-t p-6 pt-8 pb-12 rounded-b-[85px]">
      <div className="text-end">
        <CustomButton
          className="text-xl"
          onClick={handleClose}
          ariaLabel="Close calendar"
        >
          x
        </CustomButton>
      </div>

      <div className="flex justify-between items-center p-3 w-[50vh] rounded-3xl bg-[#fff] border border-[#979ca0] h-[60px]">
        <span>When</span>
        <CustomButton
          className="underline"
          onClick={handleSelectDates}
          ariaLabel="Select dates"
        >
          {startDate && endDate
            ? `${startDate.toLocaleDateString()} - ${endDate?.toLocaleDateString()}`
            : "Select dates"}
        </CustomButton>
      </div>

      {showCalendar && (
        <div className="calendar-container">
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            monthsShown={1}
          />
          <div className="flex justify-between items-center m-0 p-0">
            <button>clear</button>
            <CustomButton
              onClick={handleClose}
              className="bg-[#1d273d] text-center items-center text-[#fff] px-4"
              ariaLabel="Close calendar"
            >
              next
            </CustomButton>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center p-3 w-[50vh] rounded-3xl bg-[#fff] border border-[#979ca0] h-[60px]">
        <span>Guests</span>
        <CustomButton
          className="underline"
          onClick={handleClose}
          ariaLabel="Select guests"
        >
          Select guests
        </CustomButton>
      </div>

      <div className="flex justify-between underline">
        <CustomButton onClick={() => {}} ariaLabel="Clear all">
          Clear all
        </CustomButton>
        <CustomButton
          className="bg-[#1d273d] text-center items-center text-[#fff] px-4"
          onClick={() => {}}
          ariaLabel="Request"
        >
          Request
        </CustomButton>
      </div>
    </div>
  );
};

export default Calendar;
