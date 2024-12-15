import React, { useState, useEffect } from 'react';

const Calendar = ({ selectedDate, onDayClick, handleMonthChange }) => {
  const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();

  const handlePrevMonth = () => {
    handleMonthChange(-1);
  };

  const handleNextMonth = () => {
    handleMonthChange(1);
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <button onClick={handlePrevMonth} className="bg-blue-500 text-white py-1 px-4 rounded">Prev</button>
        <h3>{`${selectedDate.toLocaleString('default', { month: 'long' })} ${currentYear}`}</h3>
        <button onClick={handleNextMonth} className="bg-blue-500 text-white py-1 px-4 rounded">Next</button>
      </div>
      
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {[...Array(daysInMonth)].map((_, idx) => (
          <div
            key={idx}
            className={`p-2 bg-blue-200 rounded cursor-pointer ${
              selectedDate.getDate() === idx + 1 ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => onDayClick(idx + 1)}
          >
            {idx + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
