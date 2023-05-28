import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

function Calenda() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div className='calendar'>
      <Calendar onChange={handleDateChange} value={date} />
      <p>Entry date: {date.toDateString()}</p>
    </div>
  );
}

export default Calenda;
