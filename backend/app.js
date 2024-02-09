const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");

// Database connection
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "appointment_system",
});

// if database cant connect show error
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

app.use(cors());
app.use(express.json());

// Handle appointment submit to database
app.post("/MakeAppointment", (req, res) => {
  const { appointments_id, appointmentdate, appointmenttime, selecteddoctor } =
    req.body;

  const insertQuery =
    "INSERT INTO appointments (appointments_id, appointmentdate, appointmenttime, selecteddoctor) VALUES (?, ?, ?, ?)";

  connection.query(
    insertQuery,
    [appointments_id, appointmentdate, appointmenttime, selecteddoctor],
    (err) => {
      if (err) {
        console.error(
          "Error inserting appointment to appointments table: ",
          err
        );
        res.status(500).json({ error: "Error submitting appointment" });
        return;
      }

      console.log("Appointment table updated succesfully");
      res.status(200).json({ message: "Appointment submitted!" });
    }
  );
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
