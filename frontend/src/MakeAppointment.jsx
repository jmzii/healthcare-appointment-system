import React, { useState } from "react";

const MakeAppointment = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const doctors = [
    "General Practicioner",
    "Cardiologist",
    "Dermatologist",
    "Occupational health physician",
  ];

  const HandleAppointmentSubmit = () => {
    // tähän logiikka
  };

  return (
    <div>
      <h3>Make an appointment</h3>
      <form>
        <label>
          Date:
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Time:
          <input
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          />
        </label>
        <br />
        <label>
          Select Doctor:
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="" disabled>
              Choose a Doctor
            </option>
            {doctors.map((doctors, index) => (
              <option key={index} value={doctors}>
                {doctors}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="button" onClick={HandleAppointmentSubmit}>
          Submit Appointment
        </button>
      </form>
    </div>
  );
};

export default MakeAppointment;
