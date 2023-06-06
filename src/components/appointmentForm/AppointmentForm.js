import React, { useState } from "react";
import { ContactPicker } from '../contactPicker/ContactPicker'

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
      </label>
      <label>
        <ContactPicker
          name='contact'
          value={contact}
          contacts={contacts}
          setContact={setContact}
          onChange={(e) => setContact(e.target.value)}
        />
      </label>
      <label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>
        <input 
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          min={getTodayString()}
        />
      </label>
      <input type="submit" /> 




    </form>
  );
};
