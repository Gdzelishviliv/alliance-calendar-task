import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
  eachDayOfInterval,
  isSameDay,
  isToday,
  isSameMonth,
  isBefore,
  format as formatDate,
} from "date-fns";

const CustomCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const today = new Date();
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const handleDayClick = (day: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else if (day > startDate) {
      setEndDate(day);
    } else {
      setStartDate(day);
    }
  };

  const isSelected = (day: Date) =>
    (startDate && isSameDay(day, startDate)) ||
    (endDate && isSameDay(day, endDate)) ||
    (startDate && endDate && day >= startDate && day <= endDate);

  const isPastOrToday = (day: Date) => isBefore(day, today);
  const isTodayDay = (day: Date) => isToday(day);

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handlePreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const formatDateRange = () => {
    if (startDate && endDate) {
      const startDay = formatDate(startDate, "dd");
      const endDay = formatDate(endDate, "dd");
      const month = formatDate(startDate, "MMM");
      return `${startDay}-${endDay} ${month}`;
    } else if (startDate) {
      const startDay = formatDate(startDate, "dd");
      const month = formatDate(startDate, "MMM");
      return `${startDay} ${month}`;
    }
    return "Select dates";
  };

  return (
    <div className="bg-white rounded-[30px] p-4 w-[100%] md:w-[100%] shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePreviousMonth}
          className="text-gray-600 hover:text-black text-2xl"
        >
          &lt;
        </button>
        <h2 className="text-xl font-semibold">
          {format(currentDate, "MMM yyyy")}
        </h2>
        <button
          onClick={handleNextMonth}
          className="text-gray-600 hover:text-black text-2xl"
        >
          &gt;
        </button>
      </div>

      {/* Day Labels */}
      <div className="grid grid-cols-7 text-center font-semibold mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-gray-500">
            {day}
          </div>
        ))}
      </div>

      {/* Days of the Month */}
      <div className="grid grid-cols-7 gap-[2px]">
        {daysInMonth.map((day) => (
          <div
            key={day.toISOString()}
            onClick={() => handleDayClick(day)}
            className={`cursor-pointer p-2 rounded-full text-center
              ${
                isSameMonth(day, currentDate)
                  ? isTodayDay(day)
                    ? "text-black" // Special styling for today
                    : isPastOrToday(day)
                    ? "text-[#c4c4c4]" // Lighter color for past days
                    : isSelected(day)
                    ? "bg-[#162137] text-white"
                    : "text-black"
                  : "text-gray-400"
              }
              ${isSelected(day) && startDate && endDate && day > startDate && day < endDate ? "bg-[#162137] text-white" : ""}
            `}
          >
            {format(day, "d")}
          </div>
        ))}
      </div>

      {/* Date Range Display */}
      <div className="mt-4">
        <p>{formatDateRange()}</p>
      </div>
    </div>
  );
};

export default CustomCalendar;
