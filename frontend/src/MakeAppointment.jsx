import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const generateTimeOptions = () => {
    const startTime = new Date();
    startTime.setHours(8, 0, 0);

    const endTime = new Date();
    endTime.setHours(20, 0, 0);

    const timeOptions = [];

    while (startTime <= endTime) {
      const formattedTime = startTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
      });
      timeOptions.push(
        <option key={formattedTime} value={formattedTime}>
          {formattedTime}
        </option>
      );

      startTime.setMinutes(startTime.getMinutes() + 15);
    }

    return timeOptions;
  };

  const HandleAppointmentSubmit = () => {
    // insert logic here plz
    if (!selectedDate || !selectedTime || !selectedDoctor) {
      console.error("Make sure to fill all fields!");
      toast.error("Appointment failed. Make sure to fill all fields!");
      return;
    }

    const appointmentData = {
      appointmentdate: selectedDate,
      appointmenttime: selectedTime,
      selecteddoctor: selectedDoctor,
    };

    // POST request to backend
    fetch("http://localhost:3001/MakeAppointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })

      .catch((error) => {
        console.error("Error submitting appointment data to database: ", error);
      });

    toast.success("Appointment made succesfully!");

    // clear all fields
    setSelectedDate("");
    setSelectedTime("");
    setSelectedDoctor("");
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
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="" disabled>
              Choose a time
            </option>
            {generateTimeOptions()}
          </select>
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
      <ToastContainer />
    </div>
  );
};

export default MakeAppointment;
