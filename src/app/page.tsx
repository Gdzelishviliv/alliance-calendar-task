"use client";
import React, { useState } from "react";
import CustomButton from "./components/CustomButton";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import dayjs from "dayjs";
import "./globals.css";

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

  const formatDateRange = (
    startDate: Date | undefined,
    endDate: Date | undefined
  ) => {
    if (startDate && endDate) {
      return `${dayjs(startDate).format("DD")}-${dayjs(endDate).format(
        "DD MMM"
      )}`;
    }
    return "Select dates";
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
        <CustomButton onClick={handleSelectDates} ariaLabel="Select dates">
          {formatDateRange(startDate, endDate)}
        </CustomButton>
      </div>
      {showCalendar && (
        <div className="calendar-container relative">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateRangeCalendar"]}>
              <DemoItem>
                <DateRangeCalendar
                  disablePast
                  calendars={1}
                  onChange={handleDateChange}
                />
              </DemoItem>
            </DemoContainer>
            <div className="flex justify-between items-center m-0 p-0 absolute bottom-5 left-[30px] w-[312px]">
              <button
                className="underline"
                onClick={() => {
                  setStartDate(undefined);
                  setEndDate(undefined);
                }}
              >
                reset
              </button>
              <CustomButton
                onClick={handleClose}
                className="bg-[#1d273d] text-center items-center text-[#fff] px-4"
                ariaLabel="Close calendar"
              >
                Next
              </CustomButton>
            </div>
          </LocalizationProvider>
        </div>
      )}
      <div className="flex justify-between items-center p-3 w-[50vh] rounded-3xl bg-[#fff] border border-[#979ca0] h-[60px]">
        <span>Guests</span>
        <CustomButton onClick={handleClose} ariaLabel="Select guests">
          Select guests
        </CustomButton>
      </div>
      <div className="flex justify-between underline">
        <CustomButton
          onClick={() => {
            setStartDate(undefined);
            setEndDate(undefined);
          }}
        >
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
